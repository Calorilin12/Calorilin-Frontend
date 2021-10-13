import React, { useState } from 'react';
import '../assets/styles/pages.css';
import Logo from '../assets/img/logo.png'
import {Link} from "react-router-dom";
import showIcon from '../assets/img/eye.png';
import showOffIcon from '../assets/img/eye_invisible.png';

function Login() {
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    localStorage.setItem('name', 'Bob');
    console.log(localStorage.getItem('name'))
    return (
        <>
        <div className="bg-white w-full h-screen">
            <div className="box w-8/12 md:w-4/12">   
                <div className="logo-title space-y-7">
                    <div className="logo">
                        <img className="h-auto w-auto" src={Logo} alt="Logo Calorilin"/>
                    </div>
                    <h4 className="text-netral500 lg:text-xl">Login ke dashboard anda</h4>
                </div>
                <form action="#" className="mt-5">
                    <div className="Email mb-3">
                        <div className="">
                            <label className="text-secondary500 text-sm">Email Admin</label><br/>
                            <input type="text" className="inputField p-4 w-full h-10 pl-4 mt-1 text-sm focus:outline-none border border-greyLight focus:border-green" placeholder="Masukkan email anda"/>
                        </div>
                    </div>
                    <div className="Password">
                        <div className="">
                            <label className="text-secondary500 text-sm">Kata Sandi Admin</label><br/>
                                <div className="inputBox">
                                    <input className="inputField p-4 w-full h-10 pl-4 mt-1 text-sm focus:outline-none border border-greyLight focus:border-green" name="pwd" 
                                            placeholder="Masukkan kata sandi" type={isRevealPwd ? "text" : "password"} value={pwd} onChange={e => setPwd(e.target.value)}/>
                                    <div id="toggle">
                                        <img
                                            title={isRevealPwd ? "Hide password" : "Show password"}
                                            src={isRevealPwd ? showOffIcon : showIcon}
                                            onClick={() => setIsRevealPwd(prevState => !prevState)}
                                        />
                                    </div>
                                </div>
                        </div>
                    </div>
                    <Link className="link bg-primary500 mt-8 focus:ring focus:ring-green-100 w-full h-10" to="/dashboard">Masuk</Link>
                </form>
            </div>
        </div>
        </>
    );
}

export default Login;

