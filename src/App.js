import React, { useContext } from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Setting from './pages/Settings/Setting';
import Single from './pages/Single/Single';
import Write from './pages/Write/Write';
import TopBar from './components/topbar/TopBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from './context/Context';

function App() {
  const {user}=useContext(Context)

  return (
    <BrowserRouter>
    <TopBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={user ? <Home /> :<Register />}/>
        <Route path="/login" element={user ? <Home /> :<Login />}/>
        <Route path="/write" element={<Write />}/>
        <Route path="/setting" element={<Setting />}/>
        <Route path="/post/:postId" element={<Single />}/>
        <Route path="/single" element={<Single />}/>
        
  </Routes>
    </BrowserRouter>
  );
}

export default App;
