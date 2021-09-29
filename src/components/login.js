import React from 'react';
import './login.css';
import Logo from './Logo.png'
import {Link} from "react-router-dom";

function Login () {
    return (
        <div className="min-h-screen bg-black">
            <div className="lg:grid lg:grid-cols-2">
                <div className="w-full p-10 bg-olive lg:flex lg:flex-col lg:justify-center">
                    <img className="h-60 w-60" src={Logo} alt="Logo Calorilin"/>
                    <h2 className="text-black text-2xl lg:text-4xl font-bold">
                        CALORILIN
                    </h2>
                    <p className="lg:text-lg text-black">
                        Aplikasi penghitung kalori makananmu tiap hari.
                    </p>
                </div>
                <div className="w-full h-screen p-10 bg-white lg:flex lg:flex-col lg:justify-center">
                    <div className="sideRight">
                        <div className="headerForm w-80">
                            <h4 className="text-darkBrown">Halo,</h4>
                            <h3 className="text-darkBrown text-3xl lg:text-4xl font-bold mb-8">Selamat Datang !</h3>
                        </div>
                        <form action="#" className="space-y-4">
                            <div className="Email">
                                <div className="relative mt-1">
                                    <label className="text-darkBrown">Email</label><br/>
                                    <input type="text" class="p-4 w-80 h-10 rounded pl-10 text-sm focus:outline-none border border-gray-200 focus:border-olive font-light" placeholder="Email"/>
                                </div>
                            </div>
                            <div className="password">
                                <div className="relative mt-1 mb-2">
                                    <label className="text-darkBrown">Password</label><br/>
                                    <input type="password" className="p-4 w-80 h-10 rounded pl-10 text-sm focus:outline-none border border-gray-200 focus:border-olive font-light" placeholder="Password"/>
                                </div>
                            </div>
                            <Link className="link focus:ring focus:ring-gray-300 w-80 h-9" to="/dashboard">Masuk</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );       
}

export default Login;