import React from 'react'
import MovieCard from '../card/MovieCard.component'
import '../../styles/MovieList.css'
import { useSelector } from 'react-redux'

const MovieList = () => {
    const { movies } = useSelector(state => state.movie)

    let displayMoviesList;
    if (movies.results && movies.results.length > 0) {
        displayMoviesList = movies.results.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
        ))
    } else {
        displayMoviesList = <h4>Movies not found!</h4>
    }

    return (
        <div className='movie-list'>
            {displayMoviesList}
        </div>
    )
}

export default MovieList
