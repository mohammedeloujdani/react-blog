import './TopBar.css'
import img from '../images/profile.PNG'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';


const TopBar = () => {

    const PF="http://localhost:5000/images/"
    const {user,dispatch}=useContext(Context)
    const handleLogout =()=>{
        dispatch({type:"LOGOUT"});

    }
    return (
        <div className='top'>
            <div className="topLeft">
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'>
                        <Link to="/" >HOME</Link>
                    </li>
                    <li className='topListItem'>
                    <Link to="/" >ABOUT</Link></li>
                    <li className='topListItem'>
                    <Link to="/" >CONTACT</Link>
                    </li>
                    <li className='topListItem'>
                    <Link to="/write" >WRITE</Link></li>
                    <Link style={{textDecoration:"none",color:"black"}} to="/"><li className='topListItem' onClick={handleLogout}>
                    {user && "LOGOUT"}</li></Link>
                    <li className='topListItem'>
                    <Link to="/login" >{!user && "LOGIN"}</Link></li>
                    <li className='topListItem'>
                    <Link to="/register" >{!user && "REGISTER"}</Link></li>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    </ul>
            </div>
            <div className="topRight">
                
                {user ? (
                    
                    <div className='proflLink'>
                    <Link to="/setting">
                    <img className='topRightItems topImg'
                    src={PF+user.profilePicture} alt="" />
                    </Link>
                    <h3 className='link' > {user.username}</h3>
                    </div>
                    
                    
                ):(
                    <div>
                    <img className='topRightItems topImg'
                    src={img} alt="" />
                    
                    </div>
                   
                )}
                
            </div>
        </div>
    );
}

export default TopBar;
