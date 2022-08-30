import {useState} from 'react';
import { FaSearch } from 'react-icons/fa'

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
      <nav className="grid place-items-center">
        <Link to='/' className=''>
        <img
          className="w-[200px] cursor-pointer"
          id="logo"
          src={LOGO}
          alt="logIMGo"
        />
        </Link>

          <div className="w-[80vw] max-w-[800px]">
            <form onSubmit={handleSubmit} className='flex w-full h-[30px]'>
              <input className='w-[80%] p-3 bg-gray-700 hover:bg-gray-800' type='text' placeholder='Busque um filme' onChange={(e)=> setSearch(e.target.value)} value={search}></input>
              <button className='rounded w-[20%] h-full bg-green-500 hover:bg-green-600' type='submit'><FaSearch className='rounded w-full' /></button>
            </form>
          </div>
        </nav>
    </>
  );
    }

export default Navbar;
