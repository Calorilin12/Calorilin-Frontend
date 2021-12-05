import React, { useEffect, useState, useRef } from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import { USERS } from 'utils/url';
import { getToken } from 'utils/auth';
import showIcon from '../assets/img/eye.png';
import showOffIcon from '../assets/img/eye_invisible.png';
import axios from 'axios';

const SettingProfile = () => {
    const { id } = useParams();
    const [apiData, setApiData] = useState([]);
    const [sandi, setSandi] = useState("");
    const [konfirmasiSandi, setKonfirmasiSandi] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [isRevealConfirmPwd, setIsRevealConfirmPwd] = useState(false);
    const history = useHistory();
    const config = {
        headers: { Authorization: `Bearer ${getToken()}` }
    };
    useEffect(() => {
        axios
            .get(USERS + id, config)
            .then((res) => {
                console.log(res);
                setName(res.data.name);
                setEmail(res.data.email);
                setApiData(res.data);
            })
            .catch((err) => {
                console.log(err);
            }); 
    }, []);
    function uploadData(){
        if(!sandi || !konfirmasiSandi){
            alert('Ubah Password Gagal, Isi Field Terlebih Dahulu!');
        } else{
            if(sandi === konfirmasiSandi) {
                console.log("Passwords match");
                let formData = new FormData();
                formData.append("password", sandi);
                formData.append("name", name);
                formData.append("email", email);
                axios
                .post(USERS + id + '?_method=PUT', formData, config)
                .then((res) => {
                    console.log(res.data);
                    console.log(sandi)
                    console.log("sukses ubah sandi");
                    alert('Password Berhasil Dirubah');
                    history.replace('/profile-admin/1');
                }).catch((err) => {
                    console.log(err);
                });
            } else {
                alert("Passwords are not matching. Passwords should be same");
            }
        }
    }

    return (
        <>
            <div className="bg-white shadow-lg max-w-full mx-2 p-4 mt-4">
                <div className="flex">
                    <div className="w-full p-4 px-5 py-5">
                        <h3 className="text-center text-2xl font-semibold mb-8">UBAH PASSWORD</h3>
                        <div className="mt-6">
                            <label className="text-secondary500 text-sm">Password Baru</label><br/>
                            <div className="inputBox">
                                <input className="p-3 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" name="sandi" 
                                        placeholder="Password Baru" type={isRevealPwd ? "text" : "password"} value={sandi} onChange={e => setSandi(e.target.value)}/>
                                <div id="toggle">
                                    <img
                                        alt={isRevealPwd ? "Hide password" : "Show password"}
                                        src={isRevealPwd ? showOffIcon : showIcon}
                                        onClick={() => setIsRevealPwd(prevState => !prevState)}
                                    />
                                </div>
                            </div>
                            <br/>
                            <label className="text-secondary500 text-sm">Konfirmasi Password Baru</label><br/>
                            <div className="inputBox">
                                <input className="p-3 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" name="konfirmasiSandi" 
                                        placeholder="Konfirmasi Password Baru" type={isRevealConfirmPwd ? "text" : "password"} value={konfirmasiSandi} onChange={e => setKonfirmasiSandi(e.target.value)}/>
                                <div id="toggle">
                                    <img
                                        alt={isRevealConfirmPwd ? "Hide password" : "Show password"}
                                        src={isRevealConfirmPwd ? showOffIcon : showIcon}
                                        onClick={() => setIsRevealConfirmPwd(prevState => !prevState)}
                                    />
                                </div>
                            </div>
                            {/* <label className="text-secondary500 text-sm">Password Baru</label><br/>
                            <input type="password" className="p-3 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                    placeholder="Password Baru" value={sandi} onChange={(e) => setSandi(e.target.value)}
                            /> */}
                        </div>
                        <Link
                            onClick={uploadData}
                            className="flex bg-info500 focus:ring focus:ring-blue-200 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 mt-6 rounded-lg w-32"
                        >
                            UBAH
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SettingProfile;