import React, { useEffect, useState } from "react"
import Movie from "./Movie"
import MovieShow from "./MovieShow"


function Listagem({ listNumber, movieList, movieStatus }: { listNumber: string; movieList: Movie[]; movieStatus: any[] }): JSX.Element {
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
        <div className="flex justify-center flex-wrap gap-5 w-screen">
                {activeMovieList.map(movie => {
                    return <MovieShow key={movie.id} movie={movie} status={movieStatus} />                
                })}

                
        </div>
    )
}
export default Listagem;