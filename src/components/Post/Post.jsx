import { Link } from "react-router-dom"
import "./Post.css"

export default function Post({ post }) {
  
  const PF ="http://localhost:5000/images/"
  return (
    <div className="post">

      {post.photo && 
      (<img 
      className="postImg"
      src={PF+post.photo} alt="" />
       )}
      <div className="postInfo">
        <div className="postCats">{
          post.categories.map(c=>{
            <span className="postCat">{c.name}</span>
          })
        }
            
            
        </div>
        <div className="postTitle">

        <Link to={`/post/${post._id}`} className="link" >{post.title}</Link>
        </div>
        <hr/>
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDescription">{post.description}
        
        </p>
    </div>
  )
}
