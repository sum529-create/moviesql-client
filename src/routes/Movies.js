import { gql, useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";

function Movies() {
    const [movies, setMovies] = useState([]);
    const client = useApolloClient();
    useEffect(() => {
        client.query({
            query: gql`
                {
                    allMovies{
                        title
                        id
                    }
                }
            `,
        })
        .then((results) => setMovies(results.data.allMovies))
        .catch((error) => console.error('Error fetching movies:', error)); // 에러 핸들링 추가
    },[client])
    
    return(
        <div>
            {
                movies.map((e) => 
                    <li key={e.id}>{e.title}</li>
                )
            }
        </div>
    )
}

export default Movies;