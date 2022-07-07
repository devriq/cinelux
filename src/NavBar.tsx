import { useState } from "react";
import Listagem from "./Listagem";
import Movie from "./Movie";

import LOGO from './assets/cinelux.png';


function NavBar(props: { movieList: Movie[], movieStatus: any[] }): JSX.Element {
    const [listNumber, setListNumber] = useState<string>('3');

    function handleClick(e: any): void {
        e.preventDefault();
        setListNumber(e.target.innerText);
    }

    return (
        <>
        <header className="flex flex-col items-center h-[20vh] bg-[#111] border-b-2 mb-10">

            <img className="min-w-[100px] max-w-[200px]" id="logo" src={LOGO} alt="logIMGo" />
            <ul className="flex-1 flex items-center justify-center">
                <li className="md:text-xl font-bold rounded overflow-hidden px-6 py-2 hover:text-green-300 active:bg-green-500 active:text-white" onClick={handleClick}>Before 2000</li>
                <li className="md:text-xl font-bold rounded overflow-hidden px-6 py-2 hover:text-green-300 active:bg-green-500 active:text-white"  onClick={handleClick}>2000+</li>
                <li className="md:text-xl font-bold rounded overflow-hidden px-6 py-2 hover:text-green-300 active:bg-green-500 active:text-white"  onClick={handleClick}>2010+</li>
                <li className="md:text-xl font-bold rounded overflow-hidden px-6 py-2 hover:text-green-300 active:bg-green-500 active:text-white"  onClick={handleClick}>2020+</li>
            </ul>
        </header>
           
            <Listagem listNumber={listNumber} movieList={props.movieList} movieStatus={props.movieStatus}/>
        </>

    )
}

export default NavBar;