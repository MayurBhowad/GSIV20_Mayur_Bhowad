import React from 'react';
import HomeIcon from '../../assets/Home_Icons.png';
import '../../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="search">
                <input type="text" name='search' placeholder='Search' />
            </div>
            <div className="home">
                <img src={HomeIcon} alt="" srcset="" />
            </div>
        </div>
    )
}

export default Navbar
