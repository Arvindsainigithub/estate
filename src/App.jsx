import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignOut from "./pages/Signup.jsx";
import Profile from "./pages/Profile.jsx";

const App = () => {
  return (
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignOut />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
  )
}

export default App
