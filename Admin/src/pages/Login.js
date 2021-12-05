import React, { useState } from 'react';
import {Link, useHistory} from "react-router-dom";
import { login } from "utils/auth";
import { LOGIN } from 'utils/url';
import '../assets/styles/pages.css';
import Cover from '../assets/img/cover-login.png';
import Logo from '../assets/img/logo-fix.png';
import Email from '../assets/img/email.png';
import Key from '../assets/img/key.png';
import showIcon from '../assets/img/eye.png';
import showOffIcon from '../assets/img/eye_invisible.png';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const history = useHistory();

    const [password, setPassword] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);

    React.useEffect(() => {
        if (email || password) {
            setError(false);
        }
        return () => {};
    }, [email, password]);

    const _onSubmit = () => {
        axios
            .post(LOGIN, {
                email: email,
                password: password
            })
            .then((res) => {
                console.log(res.data);
                if(res.data.user.check === 1){
                    login(res.data.token);
                    history.push("/dashboard");
                } else{
                    console.log("eror Cuyy");
                    setError(true);
                }
            }).catch((err) => {
                console.log(err);
                setError(true);
            });
    };

    return (
        <>
            <div className="flex flex-wrap w-full h-screen ">
                <div className="bg-white w-full h-screen md:w-6/12">
                    <div className="flex flex-row space-x-4 w-full h-24 ml-10 mt-6">
                        <img src={Logo} alt="Logo Calorilin" className="w-16 h-16"/> 
                        <div className="flex flex-col justify-center h-14 mt-1">
                            <h2>Calorilin</h2>
                            <h2>Make your life is better</h2>
                        </div>
                    </div>
                    <div className="login ml-16 mt-20 md:ml-20">
                        <h3 className="text-3xl lg:text-4xl">Selamat Datang !</h3>
                        <form action="#" className="mt-8">
                            <div className="inputBox">
                                <div id="Icon">
                                    <img src={Email} alt="Icon Email"/> 
                                </div>
                                <input type="email" className="font-normal w-full h-14 rounded pl-12 text-sm focus:outline-none border border-greyLight focus:border-green" placeholder="Masukkan email anda"
                                    value={email} onChange={(e) => setEmail(e.target.value)}/>    
                            </div>
                            <div className="Password mt-4">
                                <div className="inputBox">
                                    <div id="Icon">
                                        <img src={Key} alt="Icon Key"/> 
                                    </div>
                                    <input className="font-normal w-full h-14 rounded pl-12 text-sm focus:outline-none border border-greyLight focus:border-green" name="password" 
                                            placeholder="Masukkan kata sandi anda" type={isRevealPwd ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)}/>
                                    <div id="toggle">
                                        <img
                                            alt={isRevealPwd ? "Hide password" : "Show password"}
                                            src={isRevealPwd ? showOffIcon : showIcon}
                                            onClick={() => setIsRevealPwd(prevState => !prevState)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <Link className="link bg-primary500 mt-10 focus:ring focus:ring-green-100 w-full h-14" onClick={_onSubmit}>MASUK</Link>
                        </form>
                        {error && 
                                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mt-4" role="alert">
                                    <strong class="font-bold text-sm">Login Gagal! </strong>
                                    <span class="block sm:inline text-sm">Email atau password salah.</span>
                                </div>
                        }
                    </div>
                </div>
                <div className="imageCover bg-white w-full md:w-6/12">
                    <img src={Cover} alt="Cover" className="h-screen w-full"/> 
                    <h3 className="tittleCover text-2xl ml-4 md:ml-14 lg:ml-20">Administrator Page</h3>
                    <h3 className="textCover text-sm ml-4 md:ml-14 lg:ml-20">Welcome aboard my friend, let's to develop !</h3>
                </div>
            </div>
        </>
    );
}

export default Login;
