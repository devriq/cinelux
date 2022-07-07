import axios from "axios";
import Movie from "./Movie";

function GetMovie (){

    let movieStatus: any[] = [];
    let movieData: any[] = [];
    
      async function loadData() {

            for (let i = 0; i < 12; i++) {
                let apiUrl = `https://api.themoviedb.org/4/list/8175818?page=${i + 1}&2&api_key=a79b231633cd9524b54133ecc5c8f1a5&language=en-US&sort_by=release_date.asc`;

                await axios(apiUrl)
                    .then((response) => {
                        if(i===0){movieStatus.push(response.data['comments']);}
                        response.data['results'].forEach((item: Movie) => { movieData.push(item); });
                    });
            }
        }
      loadData();
    

    return [movieData, movieStatus]
}

export default GetMovie