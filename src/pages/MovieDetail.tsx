import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Movie from '../models/Movie';

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
    window.scrollTo(0,0);
  }, []);
  
  console.log(movie)  


  return (
    <section className="max-w-[80%] max-h-[80%] md:flex w-[80%] mx-auto">
      <div className='max-w-[250px] md:my-auto mx-auto '>
      <img className={`object-cover`} src={moviePoster} alt="poster"/>
    </div>
    <div className='p-2 text-center md:w-[60%] flex flex-col justify-between'>
      <div className="mb-4">
      <h1 className='text-purple-500 font-extrabold py-2 md:text-[28px] text-[16px]'>{movie?.original_title}</h1>
      <h3 className='text-purple-300 text-[12px] md:text-[16px]'>{movie?.tagline}</h3>
      </div>
      <p className='md:p-4 text-[10px] md:text-[14px] md:leading-6 text-justify'>{movie?.overview}</p>
      <div className='mt-4 text-yellow-200 flex text-xs gap-2 justify-center'>
      {movie?.genres.map((genre: { name: any; }) => <span>{genre.name}</span>)}
      </div>
    </div>
    <div  ></div>
    </section>
  )
}

export default MovieDetail