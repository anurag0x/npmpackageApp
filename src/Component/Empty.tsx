import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Empty = () => {

  const navigate = useNavigate()
  return <>
    <div className='p-3  m-32 flex flex-col justify-center gap-8 items-center	'>
      <p className='text-xl'>You don't have any favs yet.Please add.</p>
      <button
        onClick={() => navigate("/add")}
        className="border-2 p-px pr-3 pl-3  w-24 text-cyan-50 bg-blue-600 rounded-lg text-lg border-blue-600"
      >
        Add Fav
      </button>
    </div>
  </>

}
