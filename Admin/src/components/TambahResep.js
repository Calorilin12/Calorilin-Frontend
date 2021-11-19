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

    // const [data, setData] = useState({
    //     recipe_image: "",
    //     name: "",
    //     made_by: "",
    //     total_calory: "",
    //     level_of_difficult: "",
    //     publish_date: "",
    //     duration: "",
    //     compositions: "",
    //     steps_of_make: "",
    //     cholesterol: "",
    //     diabetes: "",
    //     hyper_tension: "",
    //     uric_acid: "",
    //     stomach_acid: "",
    // })

    const [saveImage, setSaveImage] = useState(null);
    const [publishDate, setPublishDate] = useState("");
    const [name, setName] = useState("");
    const [madeBy, setMadeBy] = useState("");
    const [calory, setCalory] = useState("");
    const [eater, setEater] = useState("");
    const [duration, setDuration] = useState("");
    const [level, setLevel] = useState("");
    const [compositions, setCompositions] = useState("");
    const [steps, setSteps] = useState("");
    const [kolesterol, setKolesterol] = useState("");
    const [diabetes, setDiabetes] = useState("");
    const [hipertensi, setHipertensi] = useState("");
    const [asamUrat, setAsamUrat] = useState("");
    const [asamLambung, setAsamLambung] = useState("");

    function handleUploadChange(e){
        console.log(e.target.files[0]);
        let uploaded = e.target.files[0];
        setSaveImage(uploaded);
    }

    function uploadData(){
        if(!saveImage){
            alert('Upload Gambar Dulu!');
        } else{
            let formData = new FormData();
            formData.append("recipe_image", saveImage);
            formData.append("name", name);
            formData.append("made_by", madeBy);
            formData.append("level_of_difficult", level);
            formData.append("publish_date", publishDate);
            formData.append("duration", duration);
            formData.append("total_eater", eater);
            formData.append("total_calory", calory);
            formData.append("compositions", compositions);
            formData.append("steps_of_make", steps);
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
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    const config = {
        headers: { 'Authorization': `Bearer ${getToken()}`, 'content-type': `multipart/form-data` }
    };

    // const _onSubmit = () => {
    //     axios
    //     .post(RECIPES, data, config)
    //     .then((res) => {
    //         console.log(res.data);
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // };

    // function handle(e){
    //     const newdata={...data}
    //     newdata[e.target.id] = e.target.value
    //     setData(newdata)
    //     console.log(newdata)
    // }

    // function handleImage(e){
    //     const newdata={...data}
    //     newdata[e.target.id] = e.target.files[0]
    //     setData(newdata)
    //     console.log(newdata)
    // }

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
                            <form action="#" className="mt-5" id="formDataResep">
                                <div className="grid grid-cols-10">
                                    <div className="col-start-1 col-end-11 px-4 mb-2">
                                        <label className="text-secondary500 text-sm" for="recipe_image">Gambar Makanan</label><br/>
                                        <input type="file" id="recipe_image" onChange={handleUploadChange}/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-10 h-20">
                                    <div className="col-start-1 col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Tanggal Terbit</label><br/>
                                        <input type="date" id="publish_date" className="p-3 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                value={publishDate} onChange={(e) => setPublishDate(e.target.value)}
                                        />
                                    </div>
                                </div>         
                                <div className="grid grid-cols-10 h-20">
                                    <div className="col-start-1 col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Nama Makanan</label><br/>
                                        <input type="text" id="name" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                value={name} onChange={(e) => setName(e.target.value)}
                                                placeholder="Nama Makanan" 
                                        />
                                    </div>
                                    <div className="col-start-6 col-end-11 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Sumber</label><br/>
                                        <input type="text" id="made_by" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                value={madeBy} onChange={(e) => setMadeBy(e.target.value)}
                                                placeholder="Sumber Resep" 
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-10 h-20">
                                    <div className="col-start-1 col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Kalori Per Porsi</label><br/>
                                        <input type="text" id="total_calory" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                value={calory} onChange={(e) => setCalory(e.target.value)}
                                                placeholder="Total Kalori" 
                                        />
                                    </div>
                                    <div className="col-start-6 col-end-11 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Porsi</label><br/>
                                        <input type="text" name="total_eater" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                value={eater} onChange={(e) => setEater(e.target.value)}
                                                placeholder="Porsi"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-10 h-20">
                                    <div className="col-start-1 col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Durasi Masak</label><br/>
                                        <input type="text" id="duration" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                                value={duration} onChange={(e) => setDuration(e.target.value)}
                                                placeholder="Lama Masak" 
                                        />
                                    </div>
                                    <div className="col-start-6 col-end-11 px-4 mb-2">
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
                                        onClick={uploadData}
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