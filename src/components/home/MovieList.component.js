import React from 'react'
import MovieCard from '../card/MovieCard.component'
import '../../styles/MovieList.css'
import { useSelector } from 'react-redux'

const MovieList = ({ setPageNumber }) => {
    const { movies } = useSelector(state => state.movie)

    let displayMoviesList;
    if (movies.results && movies.results.length > 0) {
        displayMoviesList = movies.results.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
        ))
    } else {
        displayMoviesList = <h4>Movies not found!</h4>
    }

    function onPrevious() {
        if (movies.page > 1) {
            setPageNumber(movies.page - 1)
        }
    }
    function onNext() {
        if (movies.page < movies.total_pages) {
            setPageNumber(movies.page + 1)
        }
    }

    return (
        <>
            <div className='movie-list'>
                {displayMoviesList}
            </div>
            <div className="pagination">
                <button onClick={e => onPrevious(e)}>Previous</button>
                <p>{movies.page}</p>
                <button onClick={e => onNext(e)}>Next</button>
            </div>
        </>
    )
}

export default MovieList
