import { useState } from 'react';
import Movie from './Movie';
import { MovieDetail } from './pages/MovieDetail';


export default function MovieCard(props: {movie: Movie; status:any[]}): JSX.Element {

  const movieState = props.status[0][`movie:${props.movie.id}`];
  const moviePoster = "https://image.tmdb.org/t/p/w500" + props.movie.poster_path

  const [activeMoviePoster,setActiveMoviePoster] = useState('')

  function handleMovie(e: any): void {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div className={`${movieState} hover:grayscale-0 scale-95 hover:scale-100 transition-all`}>

    <div className={`w-[250px] h-[370px] overflow-hidden rounded-md`}>
      <img className={`w-full h-full object-cover transition-colors`} src={moviePoster} alt="poster"/>
    </div>

    {/* <div className={`w-[200px] flex items-center rounded-xl hover:grayscale-0`}>
      <div className='flex flex-col mx-auto items-center leading-relaxed w-[20ch]'>
      <strong className='text-sm leading-relaxed flex-1 justify-center items-center py-2 mt-2'>
        {props.movie.title}   
      </strong>
    
       <p className='text-[10px] text-justify leading-relaxed w-full'>
        {props.movie.overview}
       </p>
      </div> 
    </div> */}

    </div>
  );
}


