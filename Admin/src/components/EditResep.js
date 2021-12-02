import React, { useEffect, useState } from 'react';
import {Link, useParams, useHistory} from "react-router-dom";
import { RECIPES } from 'utils/url';
import { getToken } from 'utils/auth';
import axios from 'axios';

function EditResep() {
    const history = useHistory();
    const { id } = useParams();
    const config = {
        headers: { Authorization: `Bearer ${getToken()}`, 'Content-Type': `multipart/form-data` }
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
    const [kolesterol, setKolesterol] = useState("");
    const [diabetes, setDiabetes] = useState("");
    const [hipertensi, setHipertensi] = useState("");
    const [asamUrat, setAsamUrat] = useState("");
    const [asamLambung, setAsamLambung] = useState("");

    const [checkedKolesterol, setCheckedKolesterol] = useState(false);
    const [checkedDiabetes, setCheckedDiabetes] = useState(false);
    const [checkedHipertensi, setCheckedHipertensi] = useState(false);
    const [checkedAsamUrat, setCheckedAsamUrat] = useState(false);
    const [checkedAsamLambung, setCheckedAsamLambung] = useState(false);

    const handleKolesterol = () => {
        setCheckedKolesterol(!checkedKolesterol);
        if(!checkedKolesterol === true){
            setKolesterol("0");
        } else {
            setKolesterol("1")
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

    useEffect(() => {
        axios
            .get(RECIPES + id, config)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                console.log(res.data[0].cholesterol);
                setPublishDate(res.data[0].publish_date);
                setName(res.data[0].name);
                setMadeBy(res.data[0].made_by);
                setCategory(res.data[0].category);
                setCalory(res.data[0].total_calory);
                setEater(res.data[0].total_eater);
                setDuration(res.data[0].duration);
                setLevel(res.data[0].level_of_difficult);
                setCompositions(res.data[0].compositions);
                setSteps(res.data[0].steps_of_make);
                setDescription(res.data[0].short_description);
                // setKolesterol(res.data[0].cholesterol);
                // setDiabetes(res.data[0].diabetes);
                // setHipertensi(res.data[0].hyper_tension);
                // setAsamUrat(res.data[0].uric_acid);
                // setAsamLambung(res.data[0].stomach_acid);

                if(res.data[0].cholesterol === 1){
                    setCheckedKolesterol(false);
                    setKolesterol("1");
                } else {
                    setCheckedKolesterol(true);
                    setKolesterol("0");
                }

                if(res.data[0].diabetes === 1){
                    setCheckedDiabetes(false);
                    setDiabetes("1");
                } else {
                    setCheckedDiabetes(true);
                    setDiabetes("0");
                }

                if(res.data[0].hyper_tension === 1){
                    setCheckedHipertensi(false);
                    setHipertensi("1");
                } else {
                    setCheckedHipertensi(true);
                    setHipertensi("0");
                }

                if(res.data[0].uric_acid === 1){
                    setCheckedAsamUrat(false);
                    setAsamUrat("1");
                } else {
                    setCheckedAsamUrat(true);
                    setAsamUrat("0");
                }
                
                if(res.data[0].stomach_acid === 1){
                    setCheckedAsamLambung(false);
                    setAsamLambung("1");
                } else {
                    setCheckedAsamLambung(true);
                    setAsamLambung("0");
                }
            })
            .catch((err) => {
                console.log(err);
            }); 
    }, []);

    console.log(kolesterol)
    console.log(diabetes)
    console.log(hipertensi)
    console.log(asamUrat)
    console.log(asamLambung)

    const updateData = () => {
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
            .post(RECIPES + id + '?_method=PUT', formData, config)
            .then((res) => {
                console.log("sukses edit data");
                console.log(res.data);
                history.replace('/resep-makanan');
            }).catch((err) => {
                console.log(err);
            });
    };

    function handleUploadChange(e){
        console.log(e.target.files[0]);
        let uploaded = e.target.files[0];
        setSaveImage(uploaded);
    }

    return (
        <>
            <div className="">
                <div className="bg-white shadow-lg rounded-lg max-w-full mx-2 p-4">
                    <div className="flex">
                        <div className="w-full p-4 px-5 py-5">
                            <div className="flex flex-row">
                                <h2 className="text-2xl font-semibold">Form Edit Resep Makanan</h2>
                            </div>
                            <hr className="mt-3 mb-6 min-w-full" />
                            <div className="grid grid-cols-10">
                                <div className="col-start-1 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="gambar">Gambar Makanan</label><br/>
                                    <input type="file" name="gambar" onChange={handleUploadChange}/>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 h-20">
                                <div className="col-start-1 col-end-6 px-4 mb-2">
                                    <label className="text-secondary500 text-sm">Tanggal Terbit</label><br/>
                                    <input type="date" id="publish_date" className="p-3 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                            value={publishDate} onChange={(e) => setPublishDate(e.target.value)}
                                    />
                                </div>
                                <div className="col-start-6 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="sumber">Sumber</label><br/>
                                    <input type="text" name="sumber" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={madeBy} onChange={(e) => setMadeBy(e.target.value)}/>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 h-20">
                                <div className="col-start-1 col-end-6 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="nama">Nama Makanan</label><br/>
                                    <input type="text" name="name" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="col-start-6 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="sumber">Kategori Makanan</label><br/>
                                    <input type="text" name="kategori" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={category} onChange={(e) => setCategory(e.target.value)}/>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 h-20">
                                <div className="col-start-1 col-end-6 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="kalori">Kalori</label><br/>
                                    <input type="text" name="kalori" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={calory} onChange={(e) => setCalory(e.target.value)}/>
                                </div>
                                <div className="col-start-6 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="porsi">Porsi</label><br/>
                                    <input type="text" name="porsi" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={eater} onChange={(e) => setEater(e.target.value)} />
                                </div>
                            </div>
                            <div className="grid grid-cols-10 h-20">
                                <div className="col-start-1 col-end-6 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="waktu">Lama Masak</label><br/>
                                    <input type="text" name="waktu" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={duration} onChange={(e) => setDuration(e.target.value)}/>
                                </div>
                                <div className="col-start-6 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="sumber">Kesulitan</label><br/>
                                    <input type="text" name="kesulitan" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={level} onChange={(e) => setLevel(e.target.value)}/>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 h-48 mt-2">
                                <div className="col-start-1 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="komposisi">Komposisi</label><br/>
                                    <textarea className="resize-none mt-1 pl-4 border focus:outline-none focus:border-gray-500 rounded-md w-full h-36" name="kategori"
                                                value={compositions} onChange={(e) => setCompositions(e.target.value)}
                                    >
                                    </textarea>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 h-60">
                                <div className="col-start-1 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="langkah">Langkah Pembuatan</label><br/>
                                    <textarea className="resize-none mt-1 pl-4 border focus:outline-none focus:border-gray-500 rounded-md w-full h-52" name="langkah" 
                                                value={steps} onChange={(e) => setSteps(e.target.value)}
                                    >
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
                            {/* <p className="text-lg font-medium mt-10 mb-4 ml-4">Bisa dikonsumsi untuk penderita :</p> 
                                <ul className="list-disc ml-7 mb-2" >
                                    <li className="text-secondary500 text-sm">Beri angka 1 jika TIDAK</li>  
                                    <li className="text-secondary500 text-sm">Beri angka 0 jika YA</li> 
                                </ul> 
                                <div className="grid grid-cols-10 h-20">
                                    <div className="col-start-1 col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Kolesterol</label><br/>
                                        <input type="text" id="cholesterol" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                value={kolesterol} onChange={(e) => setKolesterol(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-start-6 col-end-11 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Diabetes</label><br/>
                                        <input type="text" id="diabetes" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                value={diabetes} onChange={(e) => setDiabetes(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-10 h-20">
                                    <div className="col-start-1 col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Hipertensi</label><br/>
                                        <input type="text" id="hyper_tension" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                value={hipertensi} onChange={(e) => setHipertensi(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-start-6 col-end-11 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Asam Urat</label><br/>
                                        <input type="text" id="uric_acid" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                value={asamUrat} onChange={(e) => setAsamUrat(e.target.value)}
                                        />
                                    </div>
                                </div>     
                                <div className="grid grid-cols-10 h-20">
                                    <div className="col-start-1 col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm" for="waktu">Asam Lambung</label><br/>
                                        <input type="text" id="stomach_acid" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                value={asamLambung} onChange={(e) => setAsamLambung(e.target.value)}
                                        />
                                    </div>
                                </div> */}
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
                                    onClick={updateData}
                                    className="flex bg-info500 focus:ring focus:ring-blue-200 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 rounded-lg w-32"
                                >
                                    Simpan
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditResep;
