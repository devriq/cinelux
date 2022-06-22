import './App.css'
import GetMovie from "./GetMovie";
import NavBar from "./NavBar";

//const API_URL = `https://api.themoviedb.org/4/list/8175818?page=1&api_key=a79b231633cd9524b54133ecc5c8f1a5&language=pt-BR&sort_by=release_date.asc`

function App() {

  const [movieList, movieState] = GetMovie();

  return (
    <>
    <h1>Cinelux</h1>
    <NavBar movieList={movieList} movieStatus={movieState}></NavBar>

    {/* {movieList.map((movie:Movie)=>{
      return(
      <div className="movie" key={movie.id}>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie--poster" className={movieState[`movie:${movie.id}`]} width={200}/>
      <h4 className="movie--title">`{movie.title} - {movieState[`movie:${movie.id}`]}`</h4>
    </div>
      )
    })} */}
    
    </>
  )
}

export default App
