import React from 'react'
import infoImg from '../../assets/MovieImageInfo.png'
import '../../styles/MovieInfo.css'

const MovieInfo = () => {
    return (
        <div className='movie-info'>
            <div className="movie-info-img">
                <img src={infoImg} alt="" />
            </div>
            <div className="movie-info-details">
                <div className="title">
                    <h1>Movie Title <span>(Rating)</span></h1>
                </div>
                <div className="sub-info">
                    <p>Year | Length | Director</p>
                </div>
                <div className="cast">
                    Cast: Actor 1, Actor 2, ...
                </div>
                <div className="description1">
                    <p>Description:  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo
