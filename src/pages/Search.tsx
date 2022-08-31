import axios from 'axios';
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../MovieCard';
import Movie from "../Movie";

function Search() {
  
  const searchURL = import.meta.env.VITE_API_SEARCH;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")

  
  const [searchMovies, setSearchMovies] = useState([]);

  const getSearchMovies = async (url: string) => {
    console.log(url)
    await axios.get(url)
      .then((response) => setSearchMovies(response.data.results));
  };

  useEffect(() => {
    const apiURL = `${searchURL}?api_key=${apiKey}&query=${query}`;
    console.log(apiURL)
    getSearchMovies(apiURL);
  }, [query]);

  return (

    <div className="flex justify-center items-center gap-3 flex-wrap max-w-[1200px]">
      {searchMovies.map((movie:Movie)=>
      <MovieCard key={movie.id} id={movie.id} title={movie.title} overview={movie.overview} poster_path={movie.poster_path} release_date={movie.release_date} />)}
     </div>
  )
}

export default Search