import Movie from "../../models/Movie";

import { Link } from "react-router-dom";

export default function MovieCard(movie: Movie): JSX.Element {
  const moviePoster = import.meta.env.VITE_API_IMG + movie.poster_path;
  // const movieState = props.status[0][`movie:${props.movie.id}`];

  return (
    <Link to={`/movie/${movie.id}`} className="max-w-[250px] p-2 group " >
          <img
            className={`w-full h-full object-cover scale-95 hover:scale-100 outline-none hover:outline-2 hover:outline-violet-500` }
            src={moviePoster}
            alt={movie.title}
          />
    </Link>
  );
}
