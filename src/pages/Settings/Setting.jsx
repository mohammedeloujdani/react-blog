
import "./Setting.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";




const Setting = () => {

    const [file,setFile]=useState(null);
    const [username,setUsername]=useState(null);
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const [success,setSuccess]=useState(false);

    const {user,dispatch}=useContext(Context);
    const PF="http://localhost:5000/images/";

    const handleSubmit= async(e)=>{
        e.preventDefault();
        dispatch({type:"UPDATE_START"})
        const updatedUser={
            userId:user._id,
            username,
            email,
            password,
            
        };
        if(file){
            const data= new FormData();
            const filename=Date.now()+file.name;
            data.append("name",filename);
            data.append("file",file);
            updatedUser.profilePicture=filename;
            try{
                await axios.post("/upload",data)
                

            }
            catch(err){

            }
        }
        try{
            const res = await axios.put("/users/"+user._id,updatedUser);
            //window.location.replace("/");
            setSuccess(true);
            dispatch({type:"UPDATE_SUCCESS",payload:res.data})
        }
        catch(err){

            dispatch({type:"UPDATE_FAILURE"})
        }
    }

    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
                </div>
            </div>
            <form className="settingForm" onSubmit={handleSubmit}>
                <label>Profile Picture</label>
                <div className="settingPP">
                    <img 
                    src={file ? URL.createObjectURL(file):PF+user.profilePicture}
                     alt="" />
                <label htmlFor="fileInput">
                <i className="settinPPicon fa-solid fa-user"></i>
                </label>
                <input type="file"id="fileInput" 
                style={{display:"none"}}
                onChange={e=>setFile(e.target.files[0])}
                />
                </div>
                <label>Username</label>
                <input type="text" className="inputSetting" placeholder={user.username}
                onChange={e=>setUsername(e.target.value)}
                />
                <label>Email</label>
                <input className="inputSetting" type="email" placeholder={user.email}
                onChange={e=>setEmail(e.target.value)}
                />
                <label>Password</label>
                <input type="password" className="inputSetting"
                onChange={e=>setPassword(e.target.value)}
                />
                <button type="submit" className="settingSubmit">Update</button>
                {success && <span style={{color:"green",marginTop:"10px",textAlign:"center"}}>Profile has been updated</span>}
            </form>
            <Sidebar/>
        </div>
    );
}

export default Setting;


