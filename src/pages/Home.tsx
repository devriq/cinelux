import React from 'react'
import GetMovie from '../GetMovie';
import Movie from './../Movie';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import MovieCard from '../MovieCard';
import HomeImage from '../assets/undraw_horror_movie_category.svg'

function Home() {
  
  // const moviesURL = import.meta.env.VITE_API;
  // const apiKey = import.meta.env.VITE_API_KEY; 

  // const [topMovies, setTopMovies] = useState([]);

  // const getTopRatdMovies = async ({ url }: { url: any; }): Promise<void> => {
  //   await axios.get(url)
  //     .then((response) => setTopMovies(response.data.results));
  // };

  // useEffect(() => {
  //   const apiURL = `${moviesURL}top_rated?api_key=${apiKey}`;
  //   getTopRatdMovies({ url: apiURL });
  // }, []);

  return (
    <section className="">
      <img src={HomeImage} className="h-full w-[90%] max-w-[300px] mx-auto"/>
    </section>
  )
      {/* {topMovies.map((movie:Movie): JSX.Element=>
      <MovieCard key={movie.id} id={movie.id} title={movie.title} overview={movie.overview} poster_path={movie.poster_path} release_date={movie.release_date} />)}
    </section> */}
  
}

export default Home