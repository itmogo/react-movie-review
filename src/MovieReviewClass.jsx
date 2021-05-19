import React, { Component } from 'react';

export default class MovieReviewClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            moviesclass : [],
        };
    }

    // lifecycle call
    componentDidMount (){
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=KZGm4yrA1vMCD0FueGLy3OH7ko0rRjLQ")
        .then(res=>res.json())
       // .then(moviesclass => {
           .then( moviesclass => {
           console.log(moviesclass)          

           // this.setState({moviesclass: moviesclass});
           this.setState({moviesclass:moviesclass.results})
        })

        .catch((err) => console.log(err));
    }
    render() {
        return (
            <div>
                <h1 style= {{marginLeft:"50px" }}><u>New York Times Movie Reviews API - Class</u></h1>
                <div>
                    {this.state.moviesclass.map((moviesclass) =>
                <div>
                    <p style= {{marginLeft:"50px" }}><b>Title: </b> {moviesclass.display_title} </p>
                    <p style= {{marginLeft:"50px" }}><b>ByLine: </b> {moviesclass.byline}</p>
                    <p style= {{marginLeft:"50px" }}><b>Critic Pick: </b> {moviesclass.crities_pick} </p>
                    <p style= {{marginLeft:"50px" }}><b>Headline: </b> {moviesclass.headline} </p>
                        <hr style={{marginLeft: '50px', marginRight: '500px'}} />
                </div>
                
                
                )}  </div>
                
            </div>
        )
    }
}
