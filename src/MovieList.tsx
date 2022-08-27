import React, { useEffect, useState } from "react"
import Movie from "./Movie"
import MovieCard from "./MovieCard"
import HorrorCategoryArt from './assets/undraw_horror_movie_category.svg'

function MovieList({ listNumber, movieList, movieStatus }: { listNumber: string; movieList: Movie[]; movieStatus: any[] }): JSX.Element {
    const [activeMovieList, setActiveMovieList] = useState<any[]>([]);

    useEffect(function (): void {
        if (listNumber === 'Before 2000') { 
            let result = movieList.filter((movie: Movie) => parseInt(movie.release_date.substring(0, 4)) < 2000);
            setActiveMovieList(result);
        }
        if (listNumber === '2000+') { 
            let result = movieList.filter((movie: Movie) => parseInt(movie.release_date.substring(0, 4)) >= 2000 && parseInt(movie.release_date.substring(0, 4)) < 2010) 
            setActiveMovieList(result)
        }
        if (listNumber === '2010+') { 
            let result = movieList.filter((movie: Movie) => parseInt(movie.release_date.substring(0, 4)) >= 2010 && parseInt(movie.release_date.substring(0, 4)) < 2020)
            setActiveMovieList(result)
        }
        if (listNumber === '2020+') { 
            let result = movieList.filter((movie: Movie) => parseInt(movie.release_date.substring(0, 4)) >= 2020)
            setActiveMovieList(result)
        }
    }, [listNumber, movieList]);

    return (
        <div className="flex justify-center gap-3 flex-wrap">
                    { listNumber=='0' ? 
                        <img src={HorrorCategoryArt} alt="" className="horror min-w-[200px] max-w-[400px] " /> : 
                        activeMovieList.map(movie => {
                            return <MovieCard id={0} title={""} overview={""} poster_path={""} release_date={""} /> }) 
                    }
                   
        </div>
        )
}
export default MovieList;