import Movie from './Movie';

export default function MovieShow(props: {movie: Movie; status:any[]}): JSX.Element {

  const movieState = props.status[0][`movie:${props.movie.id}`];
  const moviePoster = "https://image.tmdb.org/t/p/w500" + props.movie.poster_path

  return (
    <div className={`${movieState} movieShow w-[230px] h-[350px] border-2 border-green-300 flex flex-col items-center rounded-xl overflow-hidden hover:grayscale-0`}>

    <div className={`moviePoster w-[230px] h-[350px] flex flex-col items-center rounded-xl overflow-hidden`}>
      <img className={`h-[350px] transition-colors`} src={moviePoster} alt="poster"/>
    </div>

    <div className={`overviewInfo w-[230px] h-[350px] flex flex-col items-center rounded-xl hover:grayscale-0`}>
      <div className='flex flex-col mx-auto items-center leading-relaxed w-[20ch]'>
      <strong className='text-sm leading-relaxed flex-1 justify-center items-center py-2 mt-2'>
        {props.movie.title}   
      </strong>
      {/* <span className='text-bold text-green-500 w-[50px] items-center justify-center text-center p-2'>
         {props.movie.release_date.substring(0, 4)}
      </span>  */}
       <p className='text-[10px] text-justify leading-relaxed w-full'>
        {props.movie.overview}
       </p>
      </div> 
    </div>

    </div>
  );
}