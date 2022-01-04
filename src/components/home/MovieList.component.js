import React from 'react'
import MovieCard from '../card/MovieCard.component'
import '../../styles/MovieList.css'

const MovieList = () => {
    return (
        <div className='movie-list'>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    )
}

export default MovieList
