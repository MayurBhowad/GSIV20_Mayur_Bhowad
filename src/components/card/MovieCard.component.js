import React from 'react'
import '../../styles/MovieCard.css'
import movieImgTemplate from '../../assets/MovieImage.png'

const MovieCard = () => {
    return (
        <div className='movie-card'>
            <div className="movie-img">
                <img src={movieImgTemplate} alt="" />
            </div>
            <div className="movie-info">
                <div className="header">
                    <h1>Movie Title</h1>
                    <p>(Rating)</p>
                </div>
                <p className='description'>Thisdhjd ahd a dad adsbua duasdnosd asdnasuhd asdnsad  uasdbda a is description on movie card.</p>
            </div>
        </div>
    )
}

export default MovieCard
