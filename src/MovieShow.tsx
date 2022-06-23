import Movie from './Movie';

export default function MovieShow(props: {movie: Movie; status:any[]}): JSX.Element {

  const movieState = props.status[0][`movie:${props.movie.id}`];
  const moviePoster = "https://image.tmdb.org/t/p/w500" + props.movie.poster_path

  return (
    <div className="movieShow w-[200px] h-[350px] flex flex-col group">
      <img className={`${movieState} h-[300px] border-2 border-green-300 group-hover:grayscale-0 transition-colors`} src={moviePoster} alt="poster"/>
      {/* <div className='overviewInfo flex w-full h-[50px] leading-relaxed'>
        <strong className='text-xs leading-relaxed flex-1 justify-center items-center'>
          {props.movie.title}   
        </strong>
        <span className='text-bold text-green-500 w-[50px] items-center justify-center text-center'>
           {props.movie.release_date.substring(0, 4)}
        </span> */}
        {/* <p>{props.movie.overview}</p>
      </div> */}
    </div>
  );
}