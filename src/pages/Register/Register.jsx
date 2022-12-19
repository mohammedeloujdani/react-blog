import { Link } from "react-router-dom";
import "./Register.css";
import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState(false);

    //function register
    const handleSubmit = async (e) =>{

        e.preventDefault();
        setError(false);
        try
        {
            
            const res=await axios.post("/auth/register",{
            username,
            email,
            password,
        });
        res.data && window.location.replace("/login")
    }
        catch(err){
            setError(true);
        }
    }

    return (
        <div className="register">
            
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" 
                placeholder="Enter Your Username . . . "
                onChange={e=>setUsername(e.target.value)}
                ></input>
                
                <label>Email</label>
                <input type="text" 
                placeholder="Enter Your Email . . . "
                onChange={e=>setEmail(e.target.value)}
                ></input>
                <label>Password</label>
                <input type="Password" 
                placeholder="Enter Your Password . . . "
                onChange={e=>setPassword(e.target.value)}
                ></input>
                <button type="submit" className="registerButton" >Register</button>
                {error && <span style={{color:"red",marginTop:"10px"}}>Something went Wrong !</span>}
            </form>
        
        </div>
    );
}

export default Register;
