import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MovieCard from '../MovieCard';
import Movie from "./../Movie.1";

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
    <div className="grid place-items-center md:max-w-[100vw] md:flex items-center justify-center">
      <div className={`w-[250px] h-[370px] items-center justify-center flex overflow-hidden rounded-md`}>
      <img className={`w-full h-full object-cover transition-colors`} src={moviePoster} alt="poster"/>
    </div>
    <div className='w-[250px] md:w-[60ch] text-justify py-4 md:px-4'>
      
      <h2 className='text-2xl mb-3'>{movie?.title}</h2>
      <p>{movie?.overview}</p>
    </div>
    </div>
  )
}

export default MovieDetail