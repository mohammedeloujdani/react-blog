import axios from 'axios';
import { useContext, useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom'
import './SinglePost.css'
import {Link}from "react-router-dom"
import { Context } from '../../context/Context';

export default function SinglePost() {
  const location = useLocation();
  const path=location.pathname.split("/")[2];
  const [post,setPosts]=useState({});
  const PF ="http://localhost:5000/images/";
  const {user}=useContext(Context);
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [updateMode,setupdateMode]=useState(false);

  useEffect(()=>{

    const getPost=async ()=>{
      const res=await axios.get("/posts/"+path);
      setPosts(res.data);
      setTitle(res.data.title);
      setDesc(res.data.description);
    }
    getPost();
  },[path])

  const handleDelete= async ()=>{
    try{

      await axios.delete(`/posts/${post._id}`,{
        data: {username:user.username},
      });
      window.location.replace("/");
    }
    catch(err){
      console.log(err);
    }
  };
  
  const handleUpdate= async ()=>{

    try{

      await axios.put(`/posts/${post._id}`,{
        username:user.username,
         title,
         desc,
      });
      window.location.replace("/");
    }
    catch(err){
      console.log(err);
    }

  }

  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {post.photo &&(
        <img src={PF+post.photo}
         alt="" className="singlePostImg" />)
        }
        {
          updateMode ? <input type="text" 
          value={title} 
          className="singlePostTitleinput" 
          onChange={(e)=>setTitle(e.target.value)}
          autoFocus
          />
          
          :(
        
         <h1 className="singlePostTitle">
            {post.title}
            {post.username === user?.username && (
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"
            onClick={()=>{
              setupdateMode(true)
            }}
            >

            </i>
            <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
            </div> 
            )}
        </h1>
        )}
        <div className="singlePostInfo">
            <span className='singlePostAutor'> 
                <Link to={`/?user=${post.username}`} className="link"> <p>Author : {post.username}</p>
                
                </Link>
                
            </span>
            <span className="singlePostDate"> {new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ?<textarea value={desc} onChange={(e)=>setDesc(e.target.value)}
        className="siglePostDesinput"/>:(
        <p className='siglePostDes'>{post.description}</p>)}
      <button className="singlePostbutton" onClick={handleUpdate}>UPDATE</button>

      </div>
    </div>
  )
}
