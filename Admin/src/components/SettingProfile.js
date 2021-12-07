import React, { useEffect, useState, useRef } from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import { PASSWORD } from 'utils/url';
import { getToken } from 'utils/auth';
import showIcon from '../assets/img/eye.png';
import showOffIcon from '../assets/img/eye_invisible.png';
import axios from 'axios';

const SettingProfile = () => {
    const { id } = useParams();
    const [errorMatching, setErrorMatching] = useState(false);
    const [error, setError] = useState(false);
    const [sandi, setSandi] = useState("");
    const [sandiLama, setSandiLama] = useState("");
    const [konfirmasiSandi, setKonfirmasiSandi] = useState("");
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [isRevealPwdNew, setIsRevealPwdNew] = useState(false);
    const [isRevealConfirmPwd, setIsRevealConfirmPwd] = useState(false);
    const history = useHistory();
    const config = {
        headers: { Authorization: `Bearer ${getToken()}` }
    };
    React.useEffect(() => {
        if (sandiLama || sandi || konfirmasiSandi) {
            setError(false);
            setErrorMatching(false);
        }
        return () => {};
    }, [sandiLama, sandi, konfirmasiSandi]);
    // useEffect(() => {
    //     axios
    //         .get(PASSWORD + id, config)
    //         .then((res) => {
    //             console.log(res);
    //             setName(res.data.name);
    //             setEmail(res.data.email);
    //             setApiData(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         }); 
    // }, []);
    function uploadData(){
        if(!sandiLama || !sandi || !konfirmasiSandi){
            alert('Ubah Password Gagal, Isi Field Terlebih Dahulu!');
        } else{
            if(sandi === konfirmasiSandi) {
                console.log("Passwords match");
                let formData = new FormData();
                formData.append("passwordLama", sandiLama);
                formData.append("password", sandi);
                axios
                .post(PASSWORD + id + '?_method=PUT', formData, config)
                .then((res) => {
                    console.log(res.data);
                    console.log(sandiLama);
                    console.log(sandi);
                    console.log("sukses ubah sandi");
                    alert('Password Berhasil Dirubah');
                    history.replace('/profile-admin/1');
                }).catch((err) => {
                    //alert('Password Password Lama Tidak Sesuai');
                    setError(true);
                    console.log(err);
                    history.replace('/ubah-kata-sandi/1');
                });
            } else {
                setErrorMatching(true);
                //alert("Passwords are not matching. Passwords should be same");
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
                        <label className="text-secondary500 text-sm">Password Lama</label><br/>
                            <div className="inputBox">
                                <input className="p-3 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" name="sandiLama" 
                                        placeholder="Password Lama" type={isRevealPwd ? "text" : "password"} value={sandiLama} onChange={e => setSandiLama(e.target.value)}/>
                                <div id="toggle">
                                    <img
                                        alt={isRevealPwd ? "Hide password" : "Show password"}
                                        src={isRevealPwd ? showOffIcon : showIcon}
                                        onClick={() => setIsRevealPwd(prevState => !prevState)}
                                    />
                                </div>
                            </div><br/>
                            <label className="text-secondary500 text-sm">Password Baru</label><br/>
                            <div className="inputBox">
                                <input className="p-3 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" name="sandi" 
                                        placeholder="Password Baru" type={isRevealPwdNew ? "text" : "password"} value={sandi} onChange={e => setSandi(e.target.value)}/>
                                <div id="toggle">
                                    <img
                                        alt={isRevealPwdNew ? "Hide password" : "Show password"}
                                        src={isRevealPwdNew ? showOffIcon : showIcon}
                                        onClick={() => setIsRevealPwdNew(prevState => !prevState)}
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
                            {errorMatching && 
                                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mt-4" role="alert">
                                    <strong class="font-bold text-sm">Ubah Password Gagal! </strong>
                                    <span class="block sm:inline text-sm">Password Baru dan Konfirmasi Password Tidak Sama</span>
                                </div>
                            }
                            {error && 
                                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mt-4" role="alert">
                                    <strong class="font-bold text-sm">Ubah Password Gagal! </strong>
                                    <span class="block sm:inline text-sm">Password Lama Tidak Sesuai</span>
                                </div>
                            }
                        </div>
                        <Link
                            onClick={uploadData}
                            className="flex bg-info500 focus:ring focus:ring-blue-200 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 mt-14 rounded-lg w-32"
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