import React, { Component } from 'react'


class FilmRow extends Component{
    render(){
        const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`
        return(
            <div className="film-row">
                <img src={posterUrl} />
                <h1>{this.props.film.title}</h1>
            </div>
        )
    }
}

export default FilmRow