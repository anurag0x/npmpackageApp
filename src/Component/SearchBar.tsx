import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Package {
  name: string;
  reason: string
  // Other properties...
}

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState<Package[]>([]);
  const [toAdd, setToAdd] = useState('');
  const [why, setWhy] = useState('');
  const storedPackages = JSON.parse(localStorage.getItem('packages') || '[]');
  console.log(storedPackages)
  const navigate = useNavigate()
  const searchPackages = async (el: string) => {
    try {
      const response = await fetch(`https://api.npms.io/v2/search?q=${el}`).then((res) =>
        res.json()
      );

      if (response.results) {
        const packages = response.results.map((result: any) => result.package);
        setData(packages);
      } else {
        console.error('No results found.');
      }
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  const handleSubmit = () => {


    const isThere = storedPackages.some((el: any) => el.name === toAdd);

    if (!isThere) {
      storedPackages.push({ name: toAdd, reason: why })

      localStorage.setItem("packages", JSON.stringify(storedPackages))
      console.log(localStorage.getItem("packages"))
      setWhy(" ")
      setToAdd("")
      setSearchTerm("")
      setData([])
      alert(` Added to fav`)
    } else {
      alert("Package is already in fav...")
    }
  };



  return (
    <>
      <div className="flex w-full justify-end">
        <button
          onClick={() => navigate("/")}
          className="border-2 p-px pr-5 pl-5 mt-2.5 w-30 text-cyan-50 bg-blue-500 rounded-lg text-lg border-blue-500"
        >
          Go to Fav
        </button>
      </div>
      <div>
        <h2 className="font-bold text-lg text-gray-700">Search for NPM Packages</h2>
        <input
          value={searchTerm}
          className="text-xl  text-gray-600 w-full border-2 border-solid border-gray-500 rounded focus:outline-none p-2"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.value === '') {
              setData([]);
              setSearchTerm("")
            } else {
              setSearchTerm(e.target.value);
              searchPackages(e.target.value);
            }
          }}
          placeholder="Example - react"
        />
        <h3 className="font-bold text-lg mt-5">Results:</h3>
      </div>
      <div className="overflow-y-auto max-h-48 mt-5">
        <ul style={{ width: '300px' }} className="h-32 flex flex-col gap-2">
          {data.length > 0 &&
            data.map((el: any, i: number) => (
              <div className="flex gap-3 items-center" key={i}>
                <input
                  name="fav"
                  value={el.name}
                  className="w-3.5 pt-px cursor-pointer"
                  type="radio"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setToAdd(e.target.value);
                    setSearchTerm(e.target.value);
                  }}
                />
                <b>
                  {' '}
                  <p className="text-xl pb-px">{el.name}</p>
                </b>
              </div>
            ))}
        </ul>
      </div>

      <div className="block w-full mt-16">
        <h2 className="font-bold text-lg text-gray-700">Why is this your fav?</h2>
        <textarea
          value={why}
          className="resize-none text-xl border-2 border-solid border-gray-400 rounded w-full p-2.5 focus:outline-none"
          rows={5}
          onChange={(e) => {
            setWhy(e.target.value);

          }}
        ></textarea>
        <div className="flex w-full justify-end">
          <button
            disabled={why == "" || toAdd == ""}
            onClick={handleSubmit}
            className="border-2 p-2 pr-5 pl-5 mt-2.5 w-30 text-cyan-50 bg-blue-600 rounded-lg text-lg border-blue-600"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
