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
  const movieBackdrop = import.meta.env.VITE_API_IMG + movie?.backdrop_path;
  
  const getMovie = async ({ url }: { url: any; }): Promise<void> => {
    await axios.get(url)
    .then((response) => setMovie(response.data));
  };
  
  useEffect(() => {
    const apiURL = `${movieURL}${id}?api_key=${apiKey}`;
    getMovie({ url: apiURL });
  }, []);
  
  console.log(movie)  



  return (
    <section className="flex flex-col items-center justify-center bg-cover">
      <div className={`w-[80vw] max-w-[300px]`}>
      <img className={``} src={moviePoster} alt="poster"/>
    </div>
    <div className='py-4 mx-auto mb-6 max-w-[80vw]'>
      
      <h1 className='mb-3 text-center'>{movie?.title} - {movie?.original_title}</h1>
      <h3 className='mb-3 text-center'>{movie?.tagline}</h3>
      <p className='leading-relaxed text-justify text-sm'>{movie?.overview}</p>
      <div className='flex justify-center text-center gap-3'>
      {movie?.genres.map((genre: { name: any; }) => <span>{genre.name}</span>)}
      </div>
    </div>
    <img src={movieBackdrop}/>
    </section>
  )
}

export default MovieDetail