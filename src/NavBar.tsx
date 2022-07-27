import { useState } from "react";
import MovieList from "./MovieList";
import Movie from "./Movie";

import LOGO from "./assets/cinelux.png";

function NavBar(props: {
  movieList: Movie[];
  movieStatus: any[];
}): JSX.Element {
  const [listNumber, setListNumber] = useState<string>("0");

  function handleClick(e: any): void {
    e.preventDefault();
    setListNumber(e.target.innerText);
  }

  function handleLogo(e: any): void {
    e.preventDefault();
    setListNumber("0");
  }

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-[#111] p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          className="min-w-[100px] max-w-[200px] cursor-pointer"
          id="logo"
          src={LOGO}
          alt="logIMGo"
          onClick={handleLogo}
        />
        </div>
          <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
        </button>
      </div>
        
        <div className="w-full flex flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm flex-1">
            <a
              onClick={handleClick}
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 text-white mr-4"
            >
              Before 2000
            </a>
            <a
              onClick={handleClick}
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 text-white mr-4"
            >
              2000+
            </a>
            <a
              onClick={handleClick}
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 text-white mr-4"
            >
              2010+
            </a>
            <a
              onClick={handleClick}
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 text-white"
            >
              2020+
            </a>
          </div>
        </div>
        </nav>
        
      {/* 
      
      <header className="flex flex-col items-center bg-[#111]">
        <img
          className="min-w-[100px] max-w-[200px] cursor-pointer"
          id="logo"
          src={LOGO}
          alt="logIMGo"
          onClick={handleLogo}
        />
        <ul className="grid grid-cols-4 items-center text-center justify-center">
          <li
            className="text-xs cursor-pointer font-bold rounded overflow-hidden px-3 py-2 hover:text-green-300 active:bg-green-500 active:text-white"
            onClick={handleClick}
          >
            Before 2000
          </li>
          <li
            className="text-xs cursor-pointer font-bold rounded overflow-hidden px-3 py-2 hover:text-green-300 active:bg-green-500 active:text-white"
            onClick={handleClick}
          >
            2000+
          </li>
          <li
            className="text-xs cursor-pointer font-bold rounded overflow-hidden px-3 py-2 hover:text-green-300 active:bg-green-500 active:text-white"
            onClick={handleClick}
          >
            2010+
          </li>
          <li
            className="text-xs cursor-pointer font-bold rounded overflow-hidden px-3 py-2 hover:text-green-300 active:bg-green-500 active:text-white"
            onClick={handleClick}
          >
            2020+
          </li>
        </ul>
      </header> */}

      <MovieList
        listNumber={listNumber}
        movieList={props.movieList}
        movieStatus={props.movieStatus}
      />
    </>
  );
}

export default NavBar;
