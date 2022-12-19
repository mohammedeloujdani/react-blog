import axios from 'axios';
import { useContext } from 'react';
import { useState } from 'react';
import { Context } from '../../context/Context';
import './Write.css'

const Write = () => {
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [file,setFile]=useState(null);
    const {user}=useContext(Context)

    const handleSubmit= async(e)=>{
        e.preventDefault();
        const newPost={
            username:user.username,
            title,
            description,
            
        };
        if(file){
            const data= new FormData();
            const filename=Date.now()+file.name;
            data.append("name",filename);
            data.append("file",file);
            newPost.photo=filename;
            try{
                await axios.post("/upload",data)

            }
            catch(err){

            }
        }
        try{
            const res = await axios.post("/posts",newPost);
            window.location.replace("/post/"+res.data._id);
        }
        catch(err){

        }
    }
    return (
        <div className='write'>
            {file && (
            <img 
            className='writeImg'
            src={URL.createObjectURL(file)}
             />)}
            <form className='writeForm' onSubmit={handleSubmit}>
                <div className="writFormGroup">
                    <label htmlFor='fileInput'>
                    <i className="writeIcon fa-solid fa-circle-plus"></i>
                    </label>
                    <input type="file" name='' id='fileInput' 
                    style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}/>
                    <input type="text" placeholder='Title' onChange={e=>setTitle(e.target.value)}
                    className='writeInput' autoFocus={true}/>
                    
                </div>
                <div className="writeForGroup">
                    <textarea placeholder='Tell Your Story' type="text" onChange={e=>setDescription(e.target.value)}
                     className='writeInput writeText'></textarea>
                </div>
                <button type='submit' className="button writeSubmit">
                    Publish
                </button>
                
            </form>
        </div>
    );
}

export default Write;

