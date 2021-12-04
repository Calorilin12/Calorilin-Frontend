import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { BASE_URL, FOOD_MATERIALS_FAVORITES } from 'utils/url';
import { getToken } from 'utils/auth';
import axios from 'axios';
import Gambar from '../assets/img/team-1-800x800.jpg';

function LihatJadwal() {
    const { id } = useParams();
    const [apiData, setApiData] = useState([]);
    const config = {
        headers: { Authorization: `Bearer ${getToken()}` }
    };
    useEffect(() => {
        axios
            .get(FOOD_MATERIALS_FAVORITES + id, config)
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
            <div className="bg-white shadow-lg rounded-lg max-w-full mx-2 p-4">
                <div className="flex">
                    <div className="w-full p-4 px-5 py-5">
                        <div className="flex flex-row">
                            <h2 className="text-2xl font-semibold">Jadwal Makan Pengguna</h2>
                        </div>
                        <hr className="mt-3 mb-8 min-w-full" />
                        <div className="flex flex-col justify-center items-center mb-6">
                            <h2 className="text-xl font-semibold">Menu Makan {apiData.time_show}</h2>
                            <h2 className="text-xl font-semibold">" Fabyan Kindarya "</h2>
                        </div>
                        <div className="grid grid-cols-10 h-20">
                            <div className="col-start-1 col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="menu">Menu</label><br/>
                                <input type="text" name="menu" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={apiData.name} readOnly />
                            </div>
                        </div>
                        <div className="grid grid-cols-10 h-20">
                            <div className="col-start-1 col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="jumlah">Jenis</label><br/>
                                <input type="text" name="jenis" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={apiData.type} readOnly/>
                            </div>
                        </div>
                        <div className="grid grid-cols-10 h-20">
                            <div className="col-start-1 col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="menu">Jumlah Penyajian</label><br/>
                                <input type="text" name="jumlah" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={apiData.serve} readOnly />
                            </div>
                        </div>
                        <div className="grid grid-cols-10 h-20">
                            <div className="col-start-1 col-end-6 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="kalori">Kalori</label><br/>
                                <input type="text" name="kalori" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={apiData.calory} readOnly />
                            </div>
                            <div className="col-start-6 col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="karbo">Karbo</label><br/>
                                <input type="text" name="karbo" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={apiData.carbo} readOnly />
                            </div>
                        </div>
                        <div className="grid grid-cols-10 h-20 mb-8">
                            <div className="col-start-1 col-end-6 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="lemak">Lemak</label><br/>
                                <input type="text" name="lemak" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={apiData.fat} readOnly />
                            </div>
                            <div className="col-start-6 col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="protein">Protein</label><br/>
                                <input type="text" name="protein" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={apiData.protein} readOnly />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LihatJadwal;
