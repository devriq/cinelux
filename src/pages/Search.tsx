import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard/MovieCard";
import Movie from "../models/Movie";

function Search() {
  const searchURL = import.meta.env.VITE_API_SEARCH;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [searchMovies, setSearchMovies] = useState([]);

  const getSearchMovies = async (url: string) => {
    console.log(url);
    await axios
      .get(url)
      .then((response) => setSearchMovies(response.data.results));
  };

  useEffect(() => {
    const apiURL = `${searchURL}?api_key=${apiKey}&query=${query}`;
    console.log(apiURL);
    getSearchMovies(apiURL);
  }, [query]);

  return (
    <section className="flex flex-wrap justify-center">
      {searchMovies.map((movie: Movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          original_title={movie.original_title}
          overview={movie.overview}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
          backdrop_path={movie.backdrop_path}
          popularity={movie.popularity}

        />
      ))}
    </section>
  );
}

export default Search;
