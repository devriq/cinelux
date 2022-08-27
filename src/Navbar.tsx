import {useState} from 'react';
import Movie from "./Movie";

import LOGO from "./assets/cinelux.png";
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Navbar(){
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); 
    console.log(search)
    if(!search) return
    navigate(`/search?q=${search}`)
    setSearch("")
  }

  return (
    <>
      <nav className="md:flex items-center justify-between bg-[#111] p-6">
        <div className="grid place-items-center md:flex items-center">
        <Link to='/'>
        <img
          className="min-w-[100px] max-w-[200px] cursor-pointer"
          id="logo"
          src={LOGO}
          alt="logIMGo"
        />
        </Link>
        </div>

          <div className="grid place-items-center text-sm md:flex md:justify-between">
           
            <form onSubmit={handleSubmit} className='text-black'>
              <input className='p-2 rounded w-[150px]' type='text' placeholder='Busque um filme' onChange={(e)=> setSearch(e.target.value)} value={search}></input>
              <button className='text-white p-2 rounded bg-gray-500' type='submit'>Buscar</button>
            </form>
          </div>
        </nav>
    </>
  );
    }

export default Navbar;
