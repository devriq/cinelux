import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import Movie from "./Movie"
import MovieShow from "./MovieShow"

import 'swiper/css'
import { Navigation, Pagination } from 'swiper';

function Listagem({ listNumber, movieList, movieStatus }: { listNumber: string; movieList: Movie[]; movieStatus: any[] }): JSX.Element {
    const [activeMovieList, setActiveMovieList] = useState<any[]>([]);

    useEffect(function (): void {
        if (listNumber === '1960+') { 
            let result = movieList.filter((movie: Movie) => parseInt(movie.release_date.substring(0, 4)) <= 1995);
            setActiveMovieList(result);
        }
        if (listNumber === '1996+') { 
            let result = movieList.filter((movie: Movie) => parseInt(movie.release_date.substring(0, 4)) >= 1996 && parseInt(movie.release_date.substring(0, 4)) <= 2010) 
            setActiveMovieList(result)
        }
        if (listNumber === '2011+') { 
            let result =     movieList.filter((movie: Movie) => parseInt(movie.release_date.substring(0, 4)) >= 2011 && parseInt(movie.release_date.substring(0, 4)) <= 2020)
            setActiveMovieList(result)
        }
        if (listNumber === '2021+') { 
            let result =     movieList.filter((movie: Movie) => parseInt(movie.release_date.substring(0, 4)) >= 2021)
            setActiveMovieList(result)
        }
    }, [listNumber, movieList]);

    return (
        <>
             <Swiper 
                className="mySwiper"
                slidesPerView={1}
                breakpoints={{
                    425:{
                        slidesPerView: 2,
                    },
                    768:{
                        slidesPerView: 3,
                    },
                    1024:{
                        slidesPerView: 4,
                    },
                    1440:{
                        slidesPerView: 5,
                    },
                    2560:{
                        slidesPerView: 6,
                    },
                    }
                }
                modules={[Pagination, Navigation]}
                >
                {activeMovieList.map(movie => {
                    return <SwiperSlide key={movie.id}>
                                <MovieShow movie={movie} status={movieStatus} />
                            </SwiperSlide>                
                })}

                
            </Swiper>
        </>
    )
}
export default Listagem;