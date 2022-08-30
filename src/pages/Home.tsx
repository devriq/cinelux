import React from 'react'
import GetMovie from '../GetMovie';
import Movie from './../Movie';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import MovieCard from '../MovieCard';

function Home() {
  
  const moviesURL = import.meta.env.VITE_API;
  const apiKey = import.meta.env.VITE_API_KEY; 

  const [topMovies, setTopMovies] = useState([]);

  const getTopRatdMovies = async ({ url }: { url: any; }): Promise<void> => {
    await axios.get(url)
      .then((response) => setTopMovies(response.data.results));
  };

  useEffect(() => {
    const apiURL = `${moviesURL}top_rated?api_key=${apiKey}`;
    getTopRatdMovies({ url: apiURL });
  }, []);

  return (
    <div className="w-full flex justify-center items-center gap-4 flex-wrap">
      {topMovies.map((movie:Movie): JSX.Element=>
      <MovieCard key={movie.id} id={movie.id} title={movie.title} overview={movie.overview} poster_path={movie.poster_path} release_date={movie.release_date} />)}
    </div>
  )
}

export default Home