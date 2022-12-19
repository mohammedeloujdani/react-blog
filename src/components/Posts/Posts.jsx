import "./Posts.css"
import Post from "../Post/Post"


function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => {
       return <Post post={p}/>
        
      })}
    </div>
  )
}

export default Posts
