import Movie from "./Movie";

import { Link } from "react-router-dom";

export default function MovieCard(movie: Movie): JSX.Element {
  const moviePoster = import.meta.env.VITE_API_IMG + movie.poster_path;
  // const movieState = props.status[0][`movie:${props.movie.id}`];

  return (
    <Link to={`/movie/${movie.id}`} className="p-1 group w-[10rem]" >
    <div
        className={`group-hover:grayscale-0 scale-95 group-hover:scale-100 transition-all rounded`}
      >
          <img
            className={`transition-colors`}
            src={moviePoster}
            alt={movie.title}
          />
      </div>
    </Link>
  );
}
