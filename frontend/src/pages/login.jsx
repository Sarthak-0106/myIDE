import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const login = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="container w-screen min-h-screen flex items-center justify-between px-[100px]">
                <div className="left w-[40%]">
                    <img src="  " alt="" />
                    <form onSubmit={submitForm} className='w-full mt-[30px]' action="">

                        <div className="inputbox">
                            <input onChange={(e)=>{setEmail(e.target.value)}} value={Email} type="email" placeholder="Email" />
                        </div>
                        
                        <div className="inputbox">
                            <input onChange={(e)=>{setPassword(e.target.value)}} value={Password} type="password" placeholder="Password" />
                        </div>

                        <p className="text-[gray] mt-[5px]">Don't have an account? <Link to="/signUp" className='text-[#00AEEF]'>SignUp</Link></p>
                        
                        <button className='btnblue w-full mt-[20px]'>Login</button>
                    </form>
                </div>
                <div className="right">
                    
                </div>
            </div>
        </>
    )
}

export default login;