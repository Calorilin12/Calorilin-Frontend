import React, { useState } from 'react';
import {Link, useHistory} from "react-router-dom";
import { login } from "utils/auth";
import { LOGIN } from 'utils/url'
import '../assets/styles/pages.css';
import Logo from '../assets/img/logo.png'
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
        if (email === "calorilin@gmail.com" && password === "12345") {
            login({
                email: email,
            });
            history.push("/dashboard");
        } else {
            setError(true);
        }
        /**axios
            .post(LOGIN, {
                email: email,
                password: password
            })
            .then((res) => {
                console.log(res);
                login(res.data.token);
                history.push("/dashboard");
            }).catch((err) => {
                console.log(err);
            });
        */
    };

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
                            <input type="email" className="inputField p-4 w-full h-10 rounded pl-4 mt-1 text-sm focus:outline-none border border-greyLight focus:border-green" placeholder="Masukkan email anda"
                                value={email} onChange={(e) => setEmail(e.target.value)}/>    
                        </div>
                    </div>
                    <div className="Password">
                        <div className="">
                            <label className="text-secondary500 text-sm">Kata Sandi Admin</label><br/>
                                <div className="inputBox">
                                    <input className="inputField p-4 w-full h-10 pl-4 mt-1 text-sm focus:outline-none border border-greyLight focus:border-green" name="password" 
                                            placeholder="Masukkan kata sandi" type={isRevealPwd ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)}/>
                                    <div id="toggle">
                                        <img
                                            alt={isRevealPwd ? "Hide password" : "Show password"}
                                            src={isRevealPwd ? showOffIcon : showIcon}
                                            onClick={() => setIsRevealPwd(prevState => !prevState)}
                                        />
                                    </div>
                                </div>
                        </div>
                    </div>
                    <Link className="link bg-primary500 mt-8 focus:ring focus:ring-green-100 w-full h-10" onClick={_onSubmit}>Masuk</Link>
                </form>
                {error && 
                        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mt-4" role="alert">
                            <strong class="font-bold text-sm">Login Gagal! </strong>
                            <span class="block sm:inline text-sm">Email atau password salah.</span>
                        </div>
                }
            </div>
        </div>
        </>
    );
}

export default Login;
