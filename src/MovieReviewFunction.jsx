import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';

const MovieReviewFunction = () => {
    let mymoviesFunction = [];
    const [movies, setMovies] = useState(mymoviesFunction);
    useEffect(() =>{
        axios.get("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=KZGm4yrA1vMCD0FueGLy3OH7ko0rRjLQ")
         .then((movies) => {
             console.log(movies);
             setMovies(movies.data.results)
         })
         .catch((err) => console.log(err));
    })
    
    return (
        <div>
            <h1 style= {{marginLeft:"50px" }}><u>New York Times Movie Reviews API - Function</u></h1>
                <div>
                    {movies.map((movies) =>
                <div>
                    <p style= {{marginLeft:"50px" }}><b>Title: </b> {movies.display_title} </p>
                    <p style= {{marginLeft:"50px" }}><b>ByLine: </b> {movies.byline}</p>
                    <p style= {{marginLeft:"50px" }}><b>Critic Pick: </b> {movies.crities_pick} </p>
                    <p style= {{marginLeft:"50px" }}><b>Headline: </b> {movies.headline} </p>
                       
                    <hr style={{marginLeft: '50px', marginRight: '500px', color: 'blue'}} />
                </div>
                
                    )}
                    </div>
                    </div>
    )}

export default MovieReviewFunction;
