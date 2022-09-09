interface Movie {
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date:string;
    backdrop_path:string;
    popularity:number;
    tagline?:string;
    genres?:any;
  }

  export default Movie;