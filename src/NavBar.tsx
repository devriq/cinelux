import { useState } from "react";
import Listagem from "./Listagem";
import Movie from "./Movie";

function NavBar(props: { movieList: Movie[], movieStatus: any[] }): JSX.Element {
    const [listNumber, setListNumber] = useState<string>('3');


    function handleClick(e: any): void {
        e.preventDefault();
        setListNumber(e.target.innerText);
    }

    return (
        <>
        <header className="flex flex-col justify-evenly h-[10vh] items-center bg-[#111] mb-10">

            <img className="min-w-[100px] max-w-[200px]" id="logo" src='' alt="logIMGo" />
            <ul className="flex-1 flex gap-4 items-center justify-center">
                <li className="text-xs font-bold rounded overflow-hidden px-2 py-1 hover:text-green-300 active:bg-green-500 active:text-white" onClick={handleClick}>1960-1995</li>
                <li className="text-xs font-bold rounded overflow-hidden px-2 py-1 hover:text-green-300 active:bg-green-500 active:text-white"  onClick={handleClick}>1996-2010</li>
                <li className="text-xs font-bold rounded overflow-hidden px-2 py-1 hover:text-green-300 active:bg-green-500 active:text-white"  onClick={handleClick}>2011-2020</li>
                <li className="text-xs font-bold rounded overflow-hidden px-2 py-1 hover:text-green-300 active:bg-green-500 active:text-white"  onClick={handleClick}>2021-2022</li>
            </ul>
        </header>
            <Listagem listNumber={listNumber} movieList={props.movieList} movieStatus={props.movieStatus}/>
        </>

    )
}

export default NavBar;