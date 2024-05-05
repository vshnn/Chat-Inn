import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

const App = () => {
    const { authUser } = useAuthContext();
	const googleTranslateElementInit = () => {
		new window.google.translate.TranslateElement(
		  {
			pageLanguage: "en",
			autoDisplay: false
		  },
		  "google_translate_element"
		);
	  };
	  useEffect(() => {
		// Check if the script already exists
		if (!document.querySelector("script[src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit']")) {
			var addScript = document.createElement("script");
			addScript.setAttribute(
				"src",
				"//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
			);
			document.body.appendChild(addScript);
		}	window.googleTranslateElementInit = googleTranslateElementInit;
	}, []); // Empty dependency array

    return (
        <>
            <div className='relative overflow-y-auto top-0 z-0 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-4 flex flex-col items-center justify-center pt-28'> 
				<Routes>
                    <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
                    <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
                    <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
                </Routes>
                <Toaster />
				<div id="google_translate_element" className="self-start mb-0 mt-auto w-1/5 "></div>
            </div> 
        </>
    );
}

export default App;
