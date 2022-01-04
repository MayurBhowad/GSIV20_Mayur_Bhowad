import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import infoImg from '../../assets/MovieImageInfo.png'
import { getMovieById } from '../../redux/actions/movie.actions'
import '../../styles/MovieInfo.css'

const MovieInfo = () => {
    const dispatch = useDispatch()
    const { id } = useParams();

    const { movie } = useSelector(state => state.movie);

    useEffect(() => {
        dispatch(getMovieById(id))
    }, [id])


    return (
        <div className='movie-info'>
            <div className="movie-info-img">
                <img width="200px" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
            </div>
            <div className="movie-info-details">
                <div className="title">
                    <h1>{movie.title} <span>({movie.vote_average})</span></h1>
                </div>
                <div className="sub-info">
                    <p>Year | Length | Director</p>
                </div>
                <div className="cast">
                    Cast: Actor 1, Actor 2, ...
                </div>
                <div className="description1">
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo
