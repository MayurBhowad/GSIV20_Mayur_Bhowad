import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '../../assets/Home_Icons.png';
import '../../styles/Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate()

    function goback() {
        navigate(`/`)
    }

    return (
        <div className='navbar'>
            {location.pathname.includes('/movie')
                ? <div className="movie-info-page">
                    <h2>Movie Details</h2>
                </div>
                : <div className="search">
                    <input type="text" name='search' placeholder='Search' />
                </div>
            }
            <div className="home">
                <img src={HomeIcon} alt="" srcset="" onClick={e => goback()} />
            </div>
        </div>
    )
}

export default Navbar
