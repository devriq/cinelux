import { useState } from "react";
import MovieList from "./MovieList";
import Movie from "./Movie";

import LOGO from './assets/cinelux.png';


function NavBar(props: { movieList: Movie[], movieStatus: any[] }): JSX.Element {
    const [listNumber, setListNumber] = useState<string>('0');

    function handleClick(e: any): void {
        e.preventDefault();
        setListNumber(e.target.innerText);
    }

    function handleLogo(e: any): void {
        e.preventDefault();
        setListNumber('0');
    }

    return (
        <>
        <header className="flex flex-col items-center bg-[#111]">

            <img className="min-w-[100px] max-w-[200px] cursor-pointer" id="logo" src={LOGO} alt="logIMGo" onClick={handleLogo} />
            <ul className="grid grid-cols-4 items-center text-center justify-center">
                <li className="text-xs cursor-pointer font-bold rounded overflow-hidden px-3 py-2 hover:text-green-300 active:bg-green-500 active:text-white" onClick={handleClick}>Before 2000</li>
                <li className="text-xs cursor-pointer font-bold rounded overflow-hidden px-3 py-2 hover:text-green-300 active:bg-green-500 active:text-white"  onClick={handleClick}>2000+</li>
                <li className="text-xs cursor-pointer font-bold rounded overflow-hidden px-3 py-2 hover:text-green-300 active:bg-green-500 active:text-white"  onClick={handleClick}>2010+</li>
                <li className="text-xs cursor-pointer font-bold rounded overflow-hidden px-3 py-2 hover:text-green-300 active:bg-green-500 active:text-white"  onClick={handleClick}>2020+</li>
            </ul>
        </header>
           
            <MovieList listNumber={listNumber} movieList={props.movieList} movieStatus={props.movieStatus}/>
        </>

    )
}

export default NavBar;