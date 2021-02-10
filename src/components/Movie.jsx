import React from "react";

class Movie extends React.Component {
    render() {
        return (
            <>
                {this.props.movies.filter((movie) => {
                    return (movie.id === parseInt(this.props.match.params.id));
                })
                    .map((movie) => {
                        return (
                            <>
                                <h2>{movie.title}</h2>
                                <img src={movie.image} alt={`l'affiche de ${movie.title}`} />
                                <h3>Director: {movie.director}</h3>
                                <h3>Actors: {movie.stars.map((star) => {
                                    return (<p>{star}</p>)
                                })}</h3>
                                <h4 className="description">Desciption: {movie.description}</h4>
                            </>
                        );
                    })}
            </>
        )
    }
}

export default Movie;