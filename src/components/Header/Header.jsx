import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='headerTitlesm'>React & Node</span>
                <span className='headerTitlelg'>Blog</span>
            </div>
            <img className='headerImg' src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    );
}

export default Header;
