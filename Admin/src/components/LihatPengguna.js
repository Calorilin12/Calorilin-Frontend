import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Gambar from '../assets/img/team-1-800x800.jpg';
import { USERS } from 'utils/url';
import { getToken } from 'utils/auth'
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
                        <img src={Gambar} alt="Foto Profil" className="w-36 h-36 mx-auto rounded-full mt-4"/>
                        <div className="mt-6">
                            <p className="text-center font-semibold text-xl">{apiData.name}</p>
                            <p className="text-center mt-2 text-sm">{apiData.email}</p>
                            <p className="text-center mt-2 text-sm">{apiData.phone_number}</p>
                        </div>
                        <hr className="mt-7 mb-7 min-w-full"/>
                        <div className="grid grid-cols-12 space-x-2 h-20">
                            <div className="col-start-1 col-end-5 px-4 mb-2 text-center space-y-2">
                                <p className="text-sm">Berat Badan</p>
                                <p className="text-md">{apiData.weight}</p>
                            </div>
                            <div className="col-start-5 col-end-9 px-4 mb-2 text-center space-y-2">
                                <p className="text-sm">Tinggi Badan</p>
                                <p className="text-md">{apiData.height}</p>
                            </div>
                            <div className="col-start-9 col-end-13 px-4 mb-2 text-center space-y-2">
                                <p className="text-sm">Tensi</p>
                                <p className="text-md">{apiData.tension}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LihatPengguna;