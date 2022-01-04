import React from 'react'
import '../../styles/MovieCard.css'

const MovieCard = ({ movie }) => {
    return (
        <div className='movie-card'>
            <div className="movie-img">
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
            </div>
            <div className="movie-card-info">
                <div className="header">
                    <h1>{movie.original_title}</h1>
                    <p>(Rating)</p>
                </div>
                <p className='description'>{movie.overview}</p>
            </div>
        </div>
    )
}

export default MovieCard
