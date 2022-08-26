import { useState } from 'react';
import Movie from '../Movie';
import MovieDetail from '../pages/MovieDetail';

import { Link } from 'react-router-dom';

export default function MovieCard(movie: Movie): JSX.Element {

  const moviePoster = import.meta.env.VITE_API_IMG + movie.poster_path;
  // const movieState = props.status[0][`movie:${props.movie.id}`];

 return (
    <div className={`hover:grayscale-0 scale-95 hover:scale-100 transition-all justify-between`}>

    <div className={`w-[250px] h-[370px] overflow-hidden rounded-md`}>
      <img className={`w-full h-full object-cover transition-colors`} src={moviePoster} alt="poster"/>
    </div>
    <div className='bg-gray-600 text-white text-center p-1 w-[250px]'>
    <Link  to={`/movie/${movie.id}`}>Detalhes</Link>
    </div>

    </div>
  );
}


