import React, { Component } from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'

class FilmRow extends Component{
    handleDetailsClick = (film) => {
        console.log(`Fetching details for ${film}`)
    }

    render(){
        const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`
        return(
            <div onClick={() => this.handleDetailsClick(this.props.film)} className="film-row">
                    <FilmPoster poster_path={posterUrl} title={this.props.film.title}/>
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date}</p>
                </div>
                <div className="fave">
                    <Fave />
                </div>
            </div>
        )
    }
}

export default FilmRow