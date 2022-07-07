import React, { useEffect, useState } from "react"

import GetMovie from "./GetMovie";
import NavBar from "./NavBar";
import Movie from './Movie';

import LOGO from './assets/cinelux.png';
import MovieShow from "./MovieCard";
import Footer from "./components/Footer/Footer";


//API_URL = `https://api.themoviedb.org/4/list/8175818?page=1&api_key=a79b231633cd9524b54133ecc5c8f1a5&language=pt-BR&sort_by=release_date.asc`

function App() {

  const [movieList, movieState] = GetMovie();

  return (
    <div className="app h-screen flex flex-col justify-between">
        <NavBar movieList={movieList} movieStatus={movieState} />    
        <Footer/>
    </div>
  )
}

export default App
