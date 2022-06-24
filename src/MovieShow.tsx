import Movie from './Movie';

export default function MovieShow(props: {movie: Movie; status:any[]}): JSX.Element {

  const movieState = props.status[0][`movie:${props.movie.id}`];
  const moviePoster = "https://image.tmdb.org/t/p/w500" + props.movie.poster_path

  return (
    <div className={`${movieState} movieShow w-[200px] h-[300px] border-2 border-green-300 flex flex-col items-center rounded-xl overflow-hidden hover:grayscale-0`}>
      <img className={`h-[300px] transition-colors`} src={moviePoster} alt="poster"/>
      <div className='overviewInfo grid leading-relaxed text-xs mx-auto items-center card__description leading-relaxed w-[28ch]'>
        <strong className='text-sm leading-relaxed flex-1 justify-center items-center p-2'>
          {props.movie.title}   
        </strong>
        {/* <span className='text-bold text-green-500 w-[50px] items-center justify-center text-center p-2'>
           {props.movie.release_date.substring(0, 4)}
        </span>  */}
         <p className='text-[8px] text-justify leading-relaxed w-full p-2'>
          {props.movie.overview}
         </p>
      </div> 
    </div>
  );
}