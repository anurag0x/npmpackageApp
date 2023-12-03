import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { Route, Routes,  } from 'react-router-dom';

const App:React.FC=()=>{
  return < >
  <div  className='block m-auto w-8/12 p-2 mt-20'>
  <Routes>
    
    <Route path="/" element={<Favorites/>} />
    <Route path="/add"  element={<Home/>} />

</Routes>
  </div>
   
   
    </>
}

export default App;
