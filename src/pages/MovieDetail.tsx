import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MovieCard from '../MovieCard';
import Movie from './../Movie';

function MovieDetail() {
  
  const movieURL = import.meta.env.VITE_API;
  const apiKey = import.meta.env.VITE_API_KEY; 
  
  
  const {id} = useParams();
  const [movie, setMovie] = useState<Movie>();
  const moviePoster = import.meta.env.VITE_API_IMG + movie?.poster_path;
  
  const getMovie = async ({ url }: { url: any; }): Promise<void> => {
    await axios.get(url)
    .then((response) => setMovie(response.data));
  };
  
  useEffect(() => {
    const apiURL = `${movieURL}${id}?api_key=${apiKey}`;
    getMovie({ url: apiURL });
    console.log(movie)
  }, []);
  
  return (
    <section className="flex flex-col items-center justify-center p-4">
      <div className={`w-[240px]`}>
      <img className={``} src={moviePoster} alt="poster"/>
    </div>
    <div className='py-4 mb-6'>
      
      <h1 className='mb-3 text-center'>{movie?.title}</h1>
      <p className='leading-relaxed text-justify text-sm max-w-[50ch]'>{movie?.overview}</p>
    </div>
    </section>
  )
}

export default MovieDetail