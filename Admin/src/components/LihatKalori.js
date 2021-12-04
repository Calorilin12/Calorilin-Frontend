import React, { useEffect, useState } from 'react';
import {Link, useParams} from "react-router-dom";
import { BASE_URL, FOOD_MATERIALS } from 'utils/url';
import { getToken } from 'utils/auth';
import axios from 'axios';

function LihatKalori() {
    const { id } = useParams();
    const [apiData, setApiData] = useState([]);
    const config = {
        headers: { Authorization: `Bearer ${getToken()}` }
    };
    useEffect(() => {
        axios
            .get(FOOD_MATERIALS + id, config)
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
        {/* {apiData.map(materials => */}
            <div className="bg-white shadow-lg max-w-full mx-2 p-4 mt-4">
                <div className="flex">
                    <div className="w-full p-4 px-5 py-5">
                        <div className="flex flex-row">
                            <h2 className="text-2xl font-semibold">Data Kalori Bahan Makanan</h2>
                        </div>
                        <hr className="mt-4 mb-6 min-w-full" />
                        <div className="flex justify-center mb-6">
                            <div className="w-80 h-72">
                                <img src={`${BASE_URL}/food-material-images/${apiData.image}`} alt={apiData.name} className="w-80 h-72"/>
                            </div>
                        </div>
                        {/* <div className="grid grid-cols-10 h-20">
                            <div className="col-start-1 col-end-6 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="tanggal">Tanggal dibuat</label><br/>
                                <input type="text" name="tanggal" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={apiData.created_at} readOnly/>
                            </div>
                        </div> */}
                        <div className="grid grid-cols-10 h-20">
                            <div className="col-start-1 col-end-6 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="jumlah">Jumlah Penyajian</label><br/>
                                <input type="text" name="jumlah" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={apiData.serve} readOnly/>
                            </div>
                        </div>
                        <div className="grid grid-cols-10 h-20">
                            <div className="col-start-1 col-end-6 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="nama">Nama Bahan</label><br/>
                                <input type="text" name="nama" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={apiData.name} readOnly />
                            </div>
                            <div className="col-start-6 col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="jenis">Jenis Bahan</label><br/>
                                <input type="text" name="jenis" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={apiData.type} readOnly />
                            </div>
                        </div>
                        <div className="grid grid-cols-10 h-20">
                            <div className="col-start-1 col-end-6 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="kalori">Kalori</label><br/>
                                <input type="text" name="kalori" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={apiData.calory} readOnly />
                            </div>
                            <div className="col-start-6 col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="karbo">Karbo</label><br/>
                                <input type="text" name="karbo" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={apiData.carbo} readOnly/>
                            </div>
                        </div>
                        <div className="grid grid-cols-10 h-24">
                            <div className="col-start-1 col-end-6 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="lemak">Lemak</label><br/>
                                <input type="text" name="lemal" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={apiData.fat} readOnly />
                            </div>
                            <div className="col-start-6 col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="protein">Protein</label><br/>
                                <input type="text" name="protein" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={apiData.protein} readOnly/>
                            </div>
                        </div>
                        <div className="flex justify-end items-center mt-12 ml-4 mr-4"> 
                            <Link
                                to="/kalori-makanan"
                                className="flex bg-secondary500 focus:ring focus:ring-gray-200 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 rounded-lg w-32"
                            >
                                Kembali
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        {/* )}  */}
        </>
    );
}

export default LihatKalori;