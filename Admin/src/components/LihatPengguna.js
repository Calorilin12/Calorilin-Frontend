import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import { BASE_URL, USERS } from 'utils/url';
import { getToken } from 'utils/auth';
import Height from 'assets/img/height.png';
import Weight from 'assets/img/weight.png';
import Tension from 'assets/img/heart-rate.png';
import Back from 'assets/img/previous.png';
import axios from 'axios';

const LihatPengguna = () => {
    const { id } = useParams();
    const [apiData, setApiData] = useState([]);
    const config = {
        headers: { Authorization: `Bearer ${getToken()}` }
    };
    useEffect(() => {
        axios
            .get(USERS + id, config)
            .then((res) => {
                console.log(res);
                console.log(res.data)
                setApiData(res.data);
            })
            .catch((err) => {
                console.log(err);
            }); 
    }, []);
    return (
        <>
            <div className="bg-white shadow-lg max-w-full mx-2 p-4 mt-4">
                <div className="flex">
                    <div className="w-full p-4 px-5 py-5">
                        <div className="flex justify-start items-center mt-3 ml-4 mr-4 mb-6"> 
                            <Link className="" to={"/data-pengguna"}><img src={Back} alt="Icon Back" className="w-8 h-8"/></Link>
                        </div>
                        {/* <img src={`${BASE_URL}/user-detail-images/${apiData.image}`} alt="Foto Profil Pengguna" className="w-48 h-52 mx-auto rounded-full mt-3"/> */}
                        <div className="mt-6">
                            <p className="text-center font-semibold text-xl">{apiData.name}</p>
                            <p className="text-center mt-2 text-sm">{apiData.email}</p>
                            <p className="text-center mt-2 text-sm">{apiData.phone_number}</p>
                        </div>
                        <hr className="mt-10 mb-10 min-w-full"/>
                        <div className="grid grid-cols-12 space-x-2 h-16 mb-12 lg:mb-2">
                            <div className="flex flex-col justify-center items-center col-start-1 col-end-5 space-y-2 lg:mb-2 lg:flex-row lg:space-x-4">
                                <img src={Weight} alt="Icon Berat Badan" className="w-12 h-12"/>
                                <div className="text-center space-y-1">
                                    <p className="text-sm">Berat Badan</p>
                                    <p className="text-md font-medium">{apiData.weight}</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center col-start-5 col-end-9 space-y-2 lg:mb-2 lg:flex-row lg:space-x-4">
                                <img src={Height} alt="Icon Tinggi Badan" className="w-12 h-12"/> 
                                <div className="text-center space-y-1">
                                    <p className="text-sm">Tinggi Badan</p>
                                    <p className="text-md font-medium">{apiData.height}</p>
                                </div>   
                            </div>
                            <div className="flex flex-col justify-center items-center col-start-9 col-end-13 space-y-2 lg:flex-row lg:mb-2 lg:space-x-4">
                                <img src={Tension} alt="Icon Tensi" className="w-12 h-12"/> 
                                <div className="text-center space-y-1">
                                    <p className="text-sm">Tensi</p>
                                    <p className="text-md font-medium">{apiData.tension}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LihatPengguna;