import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { RECIPES } from 'utils/url';
import { getToken } from 'utils/auth';
import axios from 'axios';

function TambahResep() {
    //const [data, setData] = useState();
    //const [namaMakanan, setNama] = useState('');
    //const [sumber, setSumber] = useState('');
    //const [kesulitan, setKesulitan] = useState('');
    const [data, setData] = useState({
        recipe_image: "",
        name: "",
        made_by: "",
        total_calory: "",
        level_of_difficult: "",
        publish_date: "",
        duration: "",
        compositions: "",
        steps_of_make: "",
        cholesterol: "",
        diabetes: "",
        hyper_tension: "",
        uric_acid: "",
        stomach_acid: "",
    })

    const config = {
        headers: { 'Authorization': `Bearer ${getToken()}` }
    };

    const _onSubmit = () => {
        axios
        .post(RECIPES, data, config)
        .then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    };

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    function handleImage(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.files[0]
        setData(newdata)
        console.log(newdata)
    }

    /**const _onSubmit = () => {
        console.log(namaMakanan);
        console.log(sumber);
        console.log(kesulitan);
        axios
        .post(RECIPES, config, {
            namaMakanan,
            sumber,
            kesulitan,
        })
        .then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    };
    */
    return (
        <>
            <div className="">
                <div className="bg-white shadow-lg rounded-lg max-w-full mx-2 p-4">
                    <div className="flex">
                        <div className="w-full p-4 px-5 py-5">
                            <div className="flex flex-row">
                                <h2 className="text-2xl font-semibold">Form Tambah Resep Makanan</h2>
                            </div>
                            <hr className="mt-3 mb-6 min-w-full" />
                            <form action="#" className="mt-5" enctype="multipart/form-data">
                                <div className="grid grid-cols-10">
                                    <div className="col-start-1 col-end-11 px-4 mb-2">
                                        <label className="text-secondary500 text-sm" for="recipe_image">Gambar Makanan</label><br/>
                                        <input type="file" id="recipe_image" onChange={(e) => handleImage(e)} value={data.recipe_image}/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-10 h-20">
                                    <div className="col-start-1 col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Tanggal Terbit</label><br/>
                                        <input type="date" id="publish_date" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                onChange={(e) => handle(e)}
                                                value={data.publish_date}
                                                placeholder="Tanggal Terbit" 
                                        />
                                    </div>
                                </div>         
                                <div className="grid grid-cols-10 h-20">
                                    <div className="col-start-1 col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Nama Makanan</label><br/>
                                        <input type="text" id="name" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                onChange={(e) => handle(e)}
                                                value={data.name}
                                                placeholder="Nama Makanan" 
                                        />
                                    </div>
                                    <div className="col-start-6 col-end-11 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Sumber</label><br/>
                                        <input type="text" id="made_by" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                onChange={(e) => handle(e)}
                                                value={data.made_by}
                                                placeholder="Sumber Resep" 
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-10 h-20">
                                    <div className="col-start-1 col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Kalori</label><br/>
                                        <input type="text" id="total_calory" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                onChange={(e) => handle(e)}
                                                value={data.total_calory}
                                                placeholder="Total Kalori" 
                                        />
                                    </div>
                                    <div className="col-start-6 col-end-11 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Porsi</label><br/>
                                        <input type="text" name="total_eater" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                onChange={(e) => handle(e)}
                                                value={data.total_eater}
                                                placeholder="Porsi"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-10 h-20">
                                    <div className="col-start-1 col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Lama Masak</label><br/>
                                        <input type="text" id="duration" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                onChange={(e) => handle(e)}
                                                value={data.duration}
                                                placeholder="Lama Masak" 
                                        />
                                    </div>
                                    <div className="col-start-6 col-end-11 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Kesulitan</label><br/>
                                        <input type="text" id="level_of_difficult" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                onChange={(e) => handle(e)}
                                                value={data.level_of_difficult}
                                                placeholder="Kesulitan" 
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-10 h-48 mt-2">
                                    <div className="col-start-1 col-end-11 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Komposisi</label><br/>
                                        <textarea className="resize-none mt-1 pl-4 border focus:outline-none focus:border-gray-500 rounded-md w-full h-36" id="compositions" 
                                                onChange={(e) => handle(e)}
                                                value={data.compositions}
                                                placeholder="Komposisi Makanan">
                                        </textarea>
                                    </div>
                                </div>
                                <div className="grid grid-cols-10 h-60">
                                    <div className="col-start-1 col-end-11 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Langkah Pembuatan</label><br/>
                                        <textarea className="resize-none mt-1 pl-4 border focus:outline-none focus:border-gray-500 rounded-md w-full h-52" id="steps_of_make" 
                                                onChange={(e) => handle(e)}
                                                value={data.steps_of_make}
                                                placeholder="Langkah Pembuatan">
                                        </textarea>
                                    </div>
                                </div>
                                <p className="text-lg font-medium mt-10 mb-4 ml-4">Rekomendasi Untuk Penyakit</p>   
                                <div className="grid grid-cols-10 h-20">
                                    <div className="col-start-1 col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Kolesterol</label><br/>
                                        <input type="text" id="cholesterol" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                onChange={(e) => handle(e)}
                                                value={data.cholesterol}
                                                placeholder="Kolesterol" 
                                        />
                                    </div>
                                    <div className="col-start-6 col-end-11 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Diabetes</label><br/>
                                        <input type="text" id="diabetes" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                onChange={(e) => handle(e)}
                                                value={data.diabetes}
                                                placeholder="Diabetes" 
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-10 h-20">
                                    <div className="col-start-1 col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Hipertensi</label><br/>
                                        <input type="text" id="hyper_tension" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                onChange={(e) => handle(e)}
                                                value={data.hyper_tension}
                                                placeholder="Hipertensi" 
                                        />
                                    </div>
                                    <div className="col-start-6 col-end-11 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Asam Urat</label><br/>
                                        <input type="text" id="uric_acid" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                onChange={(e) => handle(e)}
                                                value={data.uric_acid}
                                                placeholder="Asam Urat" 
                                        />
                                    </div>
                                </div>     
                                <div className="grid grid-cols-10 h-20">
                                    <div className="col-start-1 col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm" for="waktu">Asam Lambung</label><br/>
                                        <input type="text" id="stomach_acid" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                onChange={(e) => handle(e)}
                                                value={data.stomach_acid}
                                                placeholder="Lama Masak" 
                                        />
                                    </div>
                                </div>     
                                <div className="flex justify-between items-center mt-12 ml-4 mr-4"> 
                                    <Link
                                        to="/resep-makanan"
                                        className="flex bg-secondary500 focus:ring focus:ring-gray-200 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 rounded-lg w-32"
                                    >
                                        Kembali
                                    </Link>
                                    <Link
                                        to="/resep-makanan"
                                        onClick={() => _onSubmit()}
                                        className="flex bg-info500 focus:ring focus:ring-blue-200 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 rounded-lg w-32"
                                    >
                                        Simpan
                                    </Link>
                                </div>            
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    }
export default TambahResep;
