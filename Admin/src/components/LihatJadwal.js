import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import { FOOD_MATERIALS_FAVORITES } from 'utils/url';
import { getToken } from 'utils/auth';
import axios from 'axios';

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
            {apiData.map(jadwal =>
                <div className="bg-white shadow-lg rounded-lg max-w-full mx-2 p-4">
                    <div className="flex">
                        <div className="w-full p-4 px-5 py-5">
                            <div className="flex flex-row">
                                <h2 className="text-2xl font-semibold">Jadwal Makan Pengguna</h2>
                            </div>
                            <hr className="mt-3 mb-8 min-w-full" />
                            <div className="flex flex-col justify-center items-center mb-6">
                                <h2 className="text-xl font-semibold">Menu Makan {jadwal.time_show}</h2>
                                <h2 className="text-xl font-semibold">" {jadwal.username} "</h2>
                            </div>
                            <div className="grid grid-cols-10 h-20">
                                <div className="col-start-1 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="menu">Menu</label><br/>
                                    <input type="text" name="menu" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={jadwal.name} readOnly />
                                </div>
                            </div>
                            <div className="grid grid-cols-10 h-20">
                                <div className="col-start-1 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="jumlah">Jenis Menu</label><br/>
                                    <input type="text" name="jenis" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={jadwal.type} readOnly/>
                                </div>
                            </div>
                            <div className="grid grid-cols-10">
                                <div className="col-start-1 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="menu">Jumlah Penyajian</label><br/>
                                    <input type="text" name="jumlah" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={jadwal.serve} readOnly />
                                </div>
                            </div>
                            <div className="grid grid-cols-10">
                                <div className="col-start-1 col-end-11 lg:col-start-1 lg:col-end-6 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="kalori">Kalori</label><br/>
                                    <input type="text" name="kalori" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={jadwal.calory} readOnly />
                                </div>
                                <div className="col-start-1 col-end-11 lg:col-start-6 lg:col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="karbo">Karbo</label><br/>
                                    <input type="text" name="karbo" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={jadwal.carbo} readOnly />
                                </div>
                            </div>
                            <div className="grid grid-cols-10">
                                <div className="col-start-1 col-end-11 lg:col-start-1 lg:col-end-6 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="lemak">Lemak</label><br/>
                                    <input type="text" name="lemak" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={jadwal.fat} readOnly />
                                </div>
                                <div className="col-start-1 col-end-11 lg:col-start-6 lg:col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="protein">Protein</label><br/>
                                    <input type="text" name="protein" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={jadwal.protein} readOnly />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-4 mr-10 mb-10"> 
                        <Link
                            to="/jadwal-makan"
                            className="flex bg-secondary500 focus:ring focus:ring-gray-200 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 rounded-lg w-32"
                        >
                            Kembali
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default LihatJadwal;
