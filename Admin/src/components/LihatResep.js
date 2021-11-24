import React, { useEffect, useState } from 'react';
import {Link, useParams} from "react-router-dom";
import { BASE_URL, RECIPES } from 'utils/url';
import { getToken } from 'utils/auth'
import axios from 'axios';

function LihatResep() {
    const { id } = useParams();
    const [apiData, setApiData] = useState([]);
    const config = {
        headers: { Authorization: `Bearer ${getToken()}` }
    };
    useEffect(() => {
        axios
            .get(RECIPES + id, config)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setApiData(res.data);
            })
            .catch((err) => {
                console.log(err);
            }); 
    }, []);
    return (
        <>
        {apiData.map(recipes =>
            <div className="">
                <div className="bg-white shadow-lg rounded-lg max-w-full mx-2 p-4">
                    <div className="flex">
                        <div className="w-full p-4 px-5 py-5">
                            <div className="flex flex-row mt-2">
                                <sup className="text-2xl font-semibold">{recipes.name}</sup>
                                <p className="ml-1">{"by " + recipes.made_by}</p>
                            </div>
                            <hr className="mt-3 mb-6 min-w-full" />
                            <div className="ml-4 mb-4 w-64 h-40">
                                <img src={`${BASE_URL}/recipe-detail-images/${recipes.recipe_image}`} alt={recipes.name} className="w-64 h-40"/>
                            </div>
                            <div className="grid grid-cols-10 h-20">
                                <div className="col-start-1 col-end-6 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="kalori">Kalori Per Porsi</label><br/>
                                    <input type="text" name="kalori" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={recipes.total_calory + " kKal"} />
                                </div>
                                <div className="col-start-6 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="porsi">Porsi</label><br/>
                                    <input type="text" name="porsi" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={recipes.total_eater} />
                                </div>
                            </div>
                            <div className="grid grid-cols-10 h-20">
                                <div className="col-start-1 col-end-6 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="waktu">Durasi Masak</label><br/>
                                    <input type="text" name="waktu" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={recipes.duration + " menit"} />
                                </div>
                                <div className="col-start-6 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="sumber">Level Pembuatan</label><br/>
                                    <input type="text" name="kesulitan" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={recipes.level_of_difficult} />
                                </div>
                            </div>
                            <div className="grid grid-cols-10 h-48 mt-2">
                                <div className="col-start-1 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="komposisi">Komposisi</label><br/>
                                    <textarea className="resize-none mt-1 pl-4 border focus:outline-none focus:border-gray-500 rounded-md w-full h-36" name="komposisi">
                                        {recipes.compositions}
                                    </textarea>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 h-60">
                                <div className="col-start-1 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="langkah">Langkah Pembuatan</label><br/>
                                    <textarea className="resize-none mt-1 pl-4 border focus:outline-none focus:border-gray-500 rounded-md w-full h-52" name="langkah">
                                        {recipes.steps_of_make}
                                    </textarea>
                                </div>
                            </div>
                            
                            <div className="flex justify-end items-center mt-12 ml-4 mr-4"> 
                                <Link
                                    to="/resep-makanan"
                                    className="flex bg-secondary500 focus:ring focus:ring-gray-200 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 rounded-lg w-32"
                                >
                                    Kembali
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}

export default LihatResep;
