import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/MovieCard.css'

const MovieCard = ({ movie }) => {

    if (!movie.title || !movie.poster_path || !movie.overview) {
        return null
    }
    return (
        <Link to={`/movie/${movie.id}`}>
            <div className='movie-card'>
                <div className="movie-img">
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                </div>
                <div className="movie-card-info">
                    <div className="header">
                        <h1>{movie.original_title}</h1>
                        <p>({movie.vote_average})</p>
                    </div>
                    <p className='description'>{movie.overview}</p>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard
