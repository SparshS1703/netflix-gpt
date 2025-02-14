import { useState } from "react";
import Header from "./Header";

const Login=()=>{
    const [isSignInForm, setIsSignInForm]=useState(true);
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm)

    }
    return (
    <div>
       <Header />
       <div className="w-full absolute">
        <img className="w-screen h-screen" src="https://i.pinimg.com/736x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg"></img>
       </div>
       <form className="p-12 absolute w-3/12 my-36 mx-auto right-0 left-0 text-white bg-black bg-opacity-85">
       <h1 className="font-bold text-3xl py-4 text-center">{isSignInForm? "Sign In": "Sign Up"}</h1>
       {!isSignInForm && <input type="text" placeholder="Enter name" className="p-3 my-4 w-full bg-gray-800 rounded-lg" ></input>}
        <input type="text" placeholder="Enter email address" className="p-3 my-4 w-full bg-gray-800 rounded-lg"></input>
        <input type="password" placeholder="Enter password" className="p-3 my-4 w-full bg-gray-800 rounded-lg" ></input>
        <button className="p-3 my-4 bg-red-700 w-full rounded-lg">{isSignInForm? "Sign In": "Sign Up"}</button>
        <p  className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up now.":"Already a user. Sign in now"}</p>
       </form>
       
    </div>
    )
}

export default Login;