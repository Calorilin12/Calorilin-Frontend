import React, { useState } from 'react';
import {Link, useHistory} from "react-router-dom";
import { RECIPES } from 'utils/url';
import { getToken } from 'utils/auth';
import axios from 'axios';
import { ElementFlags } from 'typescript';

function TambahResep() {

    const history = useHistory();

    const config = {
        headers: { 'Authorization': `Bearer ${getToken()}`, 'content-type': `multipart/form-data` }
    };

    const [checkedKolesterol, setCheckedKolesterol] = useState(false);
    const [checkedDiabetes, setCheckedDiabetes] = useState(false);
    const [checkedHipertensi, setCheckedHipertensi] = useState(false);
    const [checkedAsamUrat, setCheckedAsamUrat] = useState(false);
    const [checkedAsamLambung, setCheckedAsamLambung] = useState(false);

    const handleKolesterol = () => {
        setCheckedKolesterol(!checkedKolesterol);
        if(!checkedKolesterol === true){
            console.log("audy")
            setKolesterol("0");
        } else {
            console.log("brenda")
            setKolesterol("1");
        }
    };
    const handleDiabetes = () => {
        setCheckedDiabetes(!checkedDiabetes);
        if(!checkedDiabetes === true){
            setDiabetes("0");
        } else {
            setDiabetes("1");
        }
    };
    const handleHipertensi = () => {
        setCheckedHipertensi(!checkedHipertensi);
        if(!checkedHipertensi === true){
            setHipertensi("0");
        } else {
            setHipertensi("1");
        }
    };
    const handleAsamUrat = () => {
        setCheckedAsamUrat(!checkedAsamUrat);
        if(!checkedAsamUrat === true){
            setAsamUrat("0");
        } else {
            setAsamUrat("1");
        }
    };
    const handleAsamLambung = () => {
        setCheckedAsamLambung(!checkedAsamLambung);
        if(!checkedAsamLambung === true){
            setAsamLambung("0");
        } else {
            setAsamLambung("1");
        }
    };

    const [saveImage, setSaveImage] = useState(null);
    const [publishDate, setPublishDate] = useState("");
    const [name, setName] = useState("");
    const [madeBy, setMadeBy] = useState("");
    const [category, setCategory] = useState("");
    const [calory, setCalory] = useState("");
    const [eater, setEater] = useState("");
    const [duration, setDuration] = useState("");
    const [level, setLevel] = useState("");
    const [compositions, setCompositions] = useState("");
    const [steps, setSteps] = useState("");
    const [description, setDescription] = useState("");
    const [kolesterol, setKolesterol] = useState("1");
    const [diabetes, setDiabetes] = useState("1");
    const [hipertensi, setHipertensi] = useState("1");
    const [asamUrat, setAsamUrat] = useState("1");
    const [asamLambung, setAsamLambung] = useState("1");
    console.log(checkedKolesterol)
    console.log(kolesterol)
    console.log(diabetes)
    console.log(hipertensi)
    console.log(asamUrat)
    console.log(asamLambung)

    function handleUploadChange(e){
        console.log(e.target.files[0]);
        let uploaded = e.target.files[0];
        setSaveImage(uploaded);
    }

    function uploadData(){
        if(!saveImage){
            alert('Upload Gambar Dulu!');
        } else if(!name || !madeBy || !category || !level || !publishDate || !duration || !eater || !calory || !compositions || !steps
                    || !description){
            alert('Semua Input Field Harus Terisi, Kecuali Informasi Resep Untuk Penderita Penyakit.');
        } else{
            let formData = new FormData();
            formData.append("recipe_image", saveImage);
            formData.append("name", name);
            formData.append("made_by", madeBy);
            formData.append("category", category);
            formData.append("level_of_difficult", level);
            formData.append("publish_date", publishDate);
            formData.append("duration", duration);
            formData.append("total_eater", eater);
            formData.append("total_calory", calory);
            formData.append("compositions", compositions);
            formData.append("steps_of_make", steps);
            formData.append("short_description", description);
            formData.append("cholesterol", kolesterol);
            formData.append("diabetes", diabetes);
            formData.append("hyper_tension", hipertensi);
            formData.append("uric_acid", asamUrat);
            formData.append("stomach_acid", asamLambung);
            axios
            .post(RECIPES, formData, config)
            .then((res) => {
                console.log("sukses");
                console.log(res.data);
                alert('Data Berhasil Ditambahkan.');
                history.replace('/resep-makanan');
            }).catch((err) => {
                console.log(err);
                alert('Coba Lagi, Data Gagal Ditambahkan.');
            });
        }
    }

    return (
        <>
            <div className="">
                <div className="bg-white shadow-lg rounded-lg max-w-full mx-2 p-4">
                    <div className="flex">
                        <div className="w-full p-4 px-5 py-5">
                            <div className="flex flex-row">
                                <h2 className="text-xl lg:text-2xl font-semibold">Form Tambah Resep Makanan</h2>
                            </div>
                            <hr className="mt-3 mb-6 min-w-full" />
                            <form action="#" className="mt-5" id="formDataResep">
                                <div className="grid grid-cols-10 h-20">
                                    <div className="col-start-1 col-end-11 px-4 mb-2 space-y-2">
                                        <label className="text-secondary500 text-sm" for="recipe_image">Gambar Makanan</label><br/>
                                        <input type="file" id="recipe_image" onChange={handleUploadChange}/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-10">
                                    <div className="col-start-1 col-end-11 lg:col-start-1 lg:col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Tanggal Terbit</label><br/>
                                        <input type="date" id="publish_date" className="p-3 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                value={publishDate} onChange={(e) => setPublishDate(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-start-1 col-end-11 lg:col-start-6 lg:col-end-11 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Sumber</label><br/>
                                        <input type="text" id="made_by" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                value={madeBy} onChange={(e) => setMadeBy(e.target.value)}
                                                placeholder="Sumber Resep" 
                                        />
                                    </div>
                                </div>         
                                <div className="grid grid-cols-10">
                                    <div className="col-start-1 col-end-11 lg:col-start-1 lg:col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Nama Makanan</label><br/>
                                        <input type="text" id="name" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                value={name} onChange={(e) => setName(e.target.value)}
                                                placeholder="Nama Makanan" 
                                        />
                                    </div>
                                    <div className="col-start-1 col-end-11 lg:col-start-6 lg:col-end-11 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Kategori Makanan</label><br/>
                                        <input type="text" id="category" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                value={category} onChange={(e) => setCategory(e.target.value)}
                                                placeholder="Kategori Makanan" 
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-10">
                                    <div className="col-start-1 col-end-11 lg:col-start-1 lg:col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Kalori Per Porsi</label><br/>
                                        <input type="text" id="total_calory" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                value={calory} onChange={(e) => setCalory(e.target.value)}
                                                placeholder="Total Kalori" 
                                        />
                                    </div>
                                    <div className="col-start-1 col-end-11 lg:col-start-6 lg:col-end-11 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Porsi</label><br/>
                                        <input type="text" name="total_eater" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                value={eater} onChange={(e) => setEater(e.target.value)}
                                                placeholder="Porsi"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-10">
                                    <div className="col-start-1 col-end-11 lg:col-start-1 lg:col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Durasi Masak</label><br/>
                                        <input type="text" id="duration" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                value={duration} onChange={(e) => setDuration(e.target.value)}
                                                placeholder="Lama Masak" 
                                        />
                                    </div>
                                    <div className="col-start-1 col-end-11 lg:col-start-6 lg:col-end-11 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Level Pembuatan</label><br/>
                                        <input type="text" id="level_of_difficult" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                value={level} onChange={(e) => setLevel(e.target.value)}
                                                placeholder="Kesulitan" 
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-10 h-48 mt-2">
                                    <div className="col-start-1 col-end-11 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Komposisi</label><br/>
                                        <textarea className="resize-none mt-1 pl-4 border focus:outline-none focus:border-gray-500 rounded-md w-full h-36" id="compositions" 
                                                value={compositions} onChange={(e) => setCompositions(e.target.value)}
                                                placeholder="Komposisi Makanan">
                                        </textarea>
                                    </div>
                                </div>
                                <div className="grid grid-cols-10 h-60">
                                    <div className="col-start-1 col-end-11 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Langkah Pembuatan</label><br/>
                                        <textarea className="resize-none mt-1 pl-4 border focus:outline-none focus:border-gray-500 rounded-md w-full h-52" id="steps_of_make" 
                                                value={steps} onChange={(e) => setSteps(e.target.value)}
                                                placeholder="Langkah Pembuatan">
                                        </textarea>
                                    </div>
                                </div>
                                <p className="text-lg font-medium mt-10 mb-4 ml-4">Bisa dikonsumsi untuk penderita :</p> 
                                <div className="space-y-2">
                                    <div className="ml-6">
                                        <input type="checkbox" checked={checkedKolesterol} onChange={handleKolesterol} />
                                        <label className="text-secondary500 text-sm ml-2">Kolesterol</label>
                                    </div>
                                    <div className="ml-6">
                                        <input type="checkbox" checked={checkedDiabetes} onChange={handleDiabetes} />
                                        <label className="text-secondary500 text-sm ml-2">Diabetes</label>
                                    </div>
                                    <div className="ml-6">
                                        <input type="checkbox" checked={checkedHipertensi} onChange={handleHipertensi} />
                                        <label className="text-secondary500 text-sm ml-2">Hipertensi</label>
                                    </div>
                                    <div className="ml-6">
                                        <input type="checkbox" checked={checkedAsamUrat} onChange={handleAsamUrat} />
                                        <label className="text-secondary500 text-sm ml-2">Asam Urat</label>
                                    </div>
                                    <div className="ml-6">
                                        <input type="checkbox" checked={checkedAsamLambung} onChange={handleAsamLambung} />
                                        <label className="text-secondary500 text-sm ml-2">Asam Lambung</label>
                                    </div>
                                </div>
                                <div className="grid grid-cols-10 h-60 mt-9">
                                    <div className="col-start-1 col-end-11 px-4 mb-2">
                                        <p className="text-lg font-medium mb-3">Deskripsi Resep</p> 
                                        <textarea className="resize-none mt-1 pl-4 border focus:outline-none focus:border-gray-500 rounded-md w-full h-40" name="description" 
                                                    value={description} onChange={(e) => setDescription(e.target.value)}
                                                    placeholder="Deskripsi Resep">
                                        </textarea>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-12 ml-4 mr-4"> 
                                    <Link
                                        to="/resep-makanan"
                                        className="flex bg-secondary500 focus:ring focus:ring-gray-200 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 rounded-lg w-32"
                                    >
                                        Batal
                                    </Link>
                                    <Link
                                        //to="/resep-makanan"
                                        onClick={uploadData}
                                        className="flex bg-info500 focus:ring focus:ring-blue-200 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 rounded-lg w-32"
                                    >
                                        Tambah
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