import React from 'react'

function FilmPoster(props) {
    return (
        <div>
            <img src={props.poster_path}
                alt={props.title}
            />
        </div>
    )
}


export default FilmPoster