import React, { useEffect, useState } from 'react';
import {Link, useParams} from "react-router-dom";
import { BASE_URL, RECIPES } from 'utils/url';
import { getToken } from 'utils/auth'
import axios from 'axios';

function LihatResep() {
    const { id } = useParams();
    const [apiData, setApiData] = useState([]);

    const [checkedKolesterol, setCheckedKolesterol] = useState(false);
    const [checkedDiabetes, setCheckedDiabetes] = useState(false);
    const [checkedHipertensi, setCheckedHipertensi] = useState(false);
    const [checkedAsamUrat, setCheckedAsamUrat] = useState(false);
    const [checkedAsamLambung, setCheckedAsamLambung] = useState(false);

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

                if(res.data[0].cholesterol === 1){
                    setCheckedKolesterol(false);
                } else {
                    setCheckedKolesterol(true);
                }

                if(res.data[0].diabetes === 1){
                    setCheckedDiabetes(false);
                } else {
                    setCheckedDiabetes(true);
                }

                if(res.data[0].hyper_tension === 1){
                    setCheckedHipertensi(false);
                } else {
                    setCheckedHipertensi(true);
                }

                if(res.data[0].uric_acid === 1){
                    setCheckedAsamUrat(false);
                } else {
                    setCheckedAsamUrat(true);
                }
                
                if(res.data[0].stomach_acid === 1){
                    setCheckedAsamLambung(false);
                } else {
                    setCheckedAsamLambung(true);
                }
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
                            <div className="flex flex-row">
                                <h3 className="text-2xl font-semibold">{recipes.name}</h3>
                                <h3 className="text-2xl font-light ml-2">{"by " + recipes.made_by}</h3>
                                {/* <sup className="text-2xl font-semibold">{recipes.name}</sup>
                                <p className="ml-1">{"by " + recipes.made_by}</p> */}
                            </div>
                            <hr className="mt-3 mb-6 min-w-full" />
                            <div className="ml-4 mb-4 w-64 h-40">
                                <img src={`${BASE_URL}/recipe-detail-images/${recipes.recipe_image}`} alt={recipes.name} className="w-64 h-40"/>
                            </div>
                            <div className="grid grid-cols-10 h-20">
                                <div className="col-start-1 col-end-6 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="kalori">Tanggal dibuat</label><br/>
                                    <input type="text" name="tanggal" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={recipes.publish_date} readOnly/>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 h-20">
                                <div className="col-start-1 col-end-6 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="kalori">Kalori Per Porsi</label><br/>
                                    <input type="text" name="kalori" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={recipes.total_calory + " kKal"} readOnly/>
                                </div>
                                <div className="col-start-6 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="porsi">Porsi</label><br/>
                                    <input type="text" name="porsi" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={recipes.total_eater} readOnly/>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 h-20">
                                <div className="col-start-1 col-end-6 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="waktu">Durasi Masak</label><br/>
                                    <input type="text" name="waktu" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={recipes.duration + " menit"} readOnly/>
                                </div>
                                <div className="col-start-6 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="sumber">Level Pembuatan</label><br/>
                                    <input type="text" name="kesulitan" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={recipes.level_of_difficult} readOnly/>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 h-48 mt-2">
                                <div className="col-start-1 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="komposisi">Komposisi</label><br/>
                                    <textarea className="resize-none mt-1 pl-4 border focus:outline-none focus:border-gray-500 rounded-md w-full h-36" name="komposisi" readOnly>
                                        {recipes.compositions}
                                    </textarea>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 h-60">
                                <div className="col-start-1 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="langkah">Langkah Pembuatan</label><br/>
                                    <textarea className="resize-none mt-1 pl-4 border focus:outline-none focus:border-gray-500 rounded-md w-full h-52" name="langkah" readOnly>
                                        {recipes.steps_of_make}
                                    </textarea>
                                </div>
                            </div>
                            <p className="text-lg font-medium mt-10 mb-4 ml-4">Bisa dikonsumsi untuk penderita</p> 
                                <div className="space-y-2">
                                    <div className="ml-6">
                                        <input type="checkbox" checked={checkedKolesterol} />
                                        <label className="text-secondary500 text-sm ml-2">Kolesterol</label>
                                    </div>
                                    <div className="ml-6">
                                        <input type="checkbox" checked={checkedDiabetes} />
                                        <label className="text-secondary500 text-sm ml-2">Diabetes</label>
                                    </div>
                                    <div className="ml-6">
                                        <input type="checkbox" checked={checkedHipertensi} />
                                        <label className="text-secondary500 text-sm ml-2">Hipertensi</label>
                                    </div>
                                    <div className="ml-6">
                                        <input type="checkbox" checked={checkedAsamUrat} />
                                        <label className="text-secondary500 text-sm ml-2">Asam Urat</label>
                                    </div>
                                    <div className="ml-6">
                                        <input type="checkbox" checked={checkedAsamLambung} />
                                        <label className="text-secondary500 text-sm ml-2">Asam Lambung</label>
                                    </div>
                                </div>
                            <div className="grid grid-cols-10 h-60 mt-9">
                                <div className="col-start-1 col-end-11 px-4 mb-2">
                                    <p className="text-lg font-medium mb-3">Deskripsi Resep</p> 
                                    <textarea className="resize-none mt-1 pl-4 border focus:outline-none focus:border-gray-500 rounded-md w-full h-40" name="description" readOnly>
                                        {recipes.short_description}
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
