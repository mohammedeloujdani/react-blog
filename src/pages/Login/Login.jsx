import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Login.css";

const Login = () => {

    const userRef= useRef();
    const passwordRef= useRef();
    const {dispatch , isFetching }= useContext(Context);

    const handleSubmit =async (e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        
        try{
            const res=await axios.post("/auth/login",{
                username:userRef.current.value,
                password:passwordRef.current.value,
            })
            dispatch({type:"LOGIN_SUCCESS",payload:res.data});

        }catch (err){

            dispatch({type:"LOGIN_FAILURE"});
        }


    }

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>username</label>
                <input type="text" placeholder="Enter Your Username . . . "ref={userRef}></input>
                <label>Password</label>
                <input type="Password" placeholder="Enter Your Password . . . " ref={passwordRef}></input>
                <button className="loginButton" disabled={isFetching}>Login</button>
            
            </form>
            <button className="registerButton" type="sumbit"><Link className="link" to="/register">Register</Link></button>
            
        </div>
    );
}

export default Login;
