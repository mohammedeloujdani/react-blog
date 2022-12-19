import "./Sidebar.css";
import {useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [cats,setCat]=useState([]);
    useEffect(()=>{

        const getCats=async ()=> {
            const res=await axios.get("/categories");
            setCat(res.data)
        }
        getCats();
    },[])


    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg" src="https://images.pexels.com/photos/2741648/pexels-photo-2741648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p>A blog (a truncation of "weblog") is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order so that the most</p>

            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c)=>{
                       return <Link to={`/?cat=${c.name}`} className="link">
                         <li className="sidebarListItem">{c.name}</li>
                        </Link>
                        
                    })}
                    

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">

                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>

                </div>
            </div>
        </div>
    );
}

export default Sidebar;
