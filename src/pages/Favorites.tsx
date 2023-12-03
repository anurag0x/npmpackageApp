import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Empty } from '../Component/Empty';
import Package from '../Component/Package';



const Favorites: React.FC = () => {
  const navigate = useNavigate()
  const favorites= JSON.parse(localStorage.getItem('packages') || '[]')
const [count,setcount]=useState(favorites.length)
const counter=()=>{
setcount(count-1)
}
  useEffect(()=>{

  },[favorites])
  return <>
    <div className="flex w-full justify-between items-center">
      <h1 className='text-2xl'>Welcome to Favorite NPM Packages</h1>
      <button
        onClick={() => navigate("/add")}
        className={!favorites.length ? 'hidden' : "block border-2 p-px pr-5 pl-5  w-30 text-cyan-50 bg-blue-600 rounded-lg text-lg border-blue-600 "}>
        Add Fav
      </button>


    </div>
    
    <div className='border-2 border-gray-600  mt-32 flex flex-col justify-center gap-8 items-center rounded-lg'>
      {favorites.length > 0 ? <Package counter={counter} /> : <Empty />}
    </div>

  </>
};

export default Favorites;
