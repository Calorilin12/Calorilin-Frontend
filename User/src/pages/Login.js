import React, { useState } from 'react';
import {Link, useHistory} from "react-router-dom";
import { login } from "utils/auth";
import { LOGIN } from 'utils/url';
import '../assets/styles/pages.css';
import Cover from '../assets/img/cover-login.png';
import Logo from '../assets/img/Logo2.png';
import Email from '../assets/img/email.png';
import Key from '../assets/img/lock.png';
import showIcon from '../assets/img/eye.png';
import showOffIcon from '../assets/img/eye_invisible.png';
import background from '../assets/img/background.png';
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
                login(res.data.token, res.data.user.id);
                history.push("/dashboard");
            }).catch((err) => {
                console.log(err);
                setError(true);
            });
    };

    return (
        <>
            <section className="flex flex-col md:flex-row h-screen items-center">
                <div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                    <img src={background} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                    flex items-center justify-center">
                    <div className="w-full h-100">
                        <img src={Logo} className='w-auto h-16'/>
                        <h1 className="text-xl md:text-2xl font-regular leading-tight mt-6">Log in to your account</h1>
                        <form action="#" className="mt-5">
                            <div className="inputBox">
                                <div id="Icon">
                                    <img src={Email} alt="Icon Email"/> 
                                </div>
                                <label className="block text-gray-700">Email Address</label>
                                <input type="email" name="email" id="" placeholder="Enter Email Address" className="w-full px-12 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-green focus:bg-white focus:outline-none"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <div className="inputBox">
                                    <div id="Icon">
                                        <img src={Key} alt="Icon Key"/> 
                                    </div>
                                    <label className="block text-gray-700">Password</label>
                                    <input type="password" name="password" id="" placeholder="Enter Password" minlength="6" className="w-full px-12 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-green
                                        focus:bg-white focus:outline-none" placeholder="Masukkan Kata Sandi Anda" type={isRevealPwd ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)}/>
                                    <div id="toggle">
                                        <img
                                            alt={isRevealPwd ? "Hide password" : "Show password"}
                                            src={isRevealPwd ? showOffIcon : showIcon}
                                            onClick={() => setIsRevealPwd(prevState => !prevState)}
                                        />
                                    </div>
                                </div>
                                </div>
                            <Link className="text-center w-full block bg-primary500 hover:bg-blue-400 focus:bg-primary500 text-white font-semibold rounded-lg
                                    px-4 py-3 mt-6" onClick={_onSubmit}>Log In</Link>
                            <h4 className='leading-tight text-gray-700 text-base pt-2'>Test : calorilintest@gmail.com</h4>
                            <h4 className='leading-tight text-gray-700 text-base'>Password : 123456</h4>
                        </form>
                        {error && 
                            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mt-4" role="alert">
                                <strong class="font-bold text-sm">Login Gagal! </strong>
                                <span class="block sm:inline text-sm">Email atau password salah.</span>
                            </div>
                        }
                        <hr className="my-6 border-gray-300 w-full" />
                        <a href='https://play.google.com/store/apps/details?id=com.calorilin.calorilin_mobile'>
                        <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-primary500 font-medium rounded-lg px-4 py-3 border border-gray-300">
                            <div className="flex items-center justify-center">
                            <span className="ml-4">
                            Mobile app download</span>
                            </div>
                        </button>
                        </a>
                        <p className="text-sm text-gray-500 mt-4">&copy; 2022 Calorilin - All Rights Reserved.</p>
                    </div>  
                </div>

        </section>
        </>
    );
}

export default Login;