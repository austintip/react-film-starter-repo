import React from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'

function FilmRow(props) {
    // const handleDetailsClick = film => {
    //     console.log(`Fetching details for ${film}`)
    // }
    const posterUrl = `https://image.tmdb.org/t/p/w780/${props.film.poster_path}`
    return (
        <div onClick={() => props.handleDetailsClick(props.film)} className="film-row">
            <FilmPoster poster_path={posterUrl} title={props.film.title} />
            <div className="film-summary">
                <h1>{props.film.title}</h1>
                <p>{props.film.release_date}</p>
            </div>
            <div className="fave">
                <Fave onFaveToggle={() => {props.onFaveToggle(props.film)}}
                isFave={props.isFave}/>
            </div>
        </div>
    )

}

export default FilmRow