import React, { useEffect, useState } from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import { FOOD_MATERIALS } from 'utils/url';
import { getToken } from 'utils/auth';
import axios from 'axios';

function EditKalori() {

    const history = useHistory();
    const { id } = useParams();
    const config = {
        headers: { Authorization: `Bearer ${getToken()}`, 'Content-Type': `multipart/form-data` }
    };

    const [saveImage, setSaveImage] = useState(null);
    const [serve, setServe] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [calory, setCalory] = useState("");
    const [carbo, setCarbo] = useState("");
    const [protein, setProtein] = useState("");
    const [fat, setFat] = useState("");

    function handleUploadChange(e){
        console.log(e.target.files[0]);
        let uploaded = e.target.files[0];
        setSaveImage(uploaded);
    }

    useEffect(() => {
        axios
            .get(FOOD_MATERIALS + id, config)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setName(res.data.name);
                setServe(res.data.serve);
                setType(res.data.type);
                setCalory(res.data.calory);
                setCarbo(res.data.carbo);
                setProtein(res.data.protein);
                setFat(res.data.fat);
            })
            .catch((err) => {
                console.log(err);
            }); 
    }, []);

    const updateData = () => {
        if (!serve){
            alert('Field Jumlah Penyajian Harus Terisi!');
        } else if(!name){
            alert('Field Nama Harus Terisi!');
        } else if (!calory){
            alert('Field Kalori Harus Terisi!');
        } else if(!carbo){
            alert('Field Karbo Harus Terisi!');
        } else if (!protein){
            alert('Field Protein Harus Terisi!');
        } else if(!fat){
            alert('Field Fat Harus Terisi!');
        } else {
            let formData = new FormData();
            formData.append("image", saveImage);
            formData.append("name", name);
            formData.append("serve", serve);
            formData.append("type", type);
            formData.append("calory", calory);
            formData.append("carbo", carbo);
            formData.append("protein", protein);
            formData.append("fat", fat);
            axios
                .post(FOOD_MATERIALS + id + '?_method=PUT', formData, config)
                .then((res) => {
                    console.log("sukses edit data");
                    console.log(res.data);                
                    alert('Data Berhasil Diubah');
                    history.replace('/kalori-makanan');
                }).catch((err) => {
                    console.log(err);
                    alert('Coba Lagi, Data Gagal Diubah');
                });
        }
    };

    return (
        <>
            <div className="bg-white shadow-lg max-w-full mx-2 p-4 mt-4">
                <div className="flex">
                    <div className="w-full p-4 px-5 py-5">
                        <div className="flex flex-row">
                            <h2 className="text-xl lg:text-2xl font-semibold">Form Edit Data Bahan Makanan</h2>
                        </div>
                        <hr className="mt-4 mb-6 min-w-full" />
                        <div className="grid grid-cols-10 h-16">
                            <div className="col-start-1 col-end-11 px-4 mb-2 space-y-1">
                                <label className="text-secondary500 text-sm" for="gambar">Gambar Bahan Makanan</label><br/>
                                <input type="file" name="gambar" onChange={handleUploadChange}/>
                            </div>
                        </div>
                        <div className="grid grid-cols-10 mt-1">
                            <div className="col-start-1 col-end-11 lg:col-start-1 lg:col-end-6 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="jumlah">Jumlah Penyajian</label><br/>
                                <input type="text" name="jumlah" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500"
                                        value={serve} onChange={(e) => setServe(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-10">
                            <div className="col-start-1 col-end-11 lg:col-start-1 lg:col-end-6 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="nama">Nama Bahan</label><br/>
                                <input type="text" name="nama" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                        value={name} onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="col-start-1 col-end-11 lg:col-start-6 lg:col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="jenis">Jenis Bahan</label><br/>
                                <input type="text" name="jenis" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                        value={type} onChange={(e) => setType(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-10">
                            <div className="col-start-1 col-end-11 lg:col-start-1 lg:col-end-6 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="kalori">Kalori</label><br/>
                                <input type="text" name="kalori" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                        value={calory} onChange={(e) => setCalory(e.target.value)}
                                />
                            </div>
                            <div className="col-start-1 col-end-11 lg:col-start-6 lg:col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="karbo">Karbo</label><br/>
                                <input type="text" name="karbo" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                        value={carbo} onChange={(e) => setCarbo(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-10">
                            <div className="col-start-1 col-end-11 lg:col-start-1 lg:col-end-6 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="lemak">Lemak</label><br/>
                                <input type="text" name="lemak" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500"
                                        value={fat} onChange={(e) => setFat(e.target.value)}
                                />
                            </div>
                            <div className="col-start-1 col-end-11 lg:col-start-6 lg:col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="protein">Protein</label><br/>
                                <input type="text" name="protein" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500"
                                        value={protein} onChange={(e) => setProtein(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-14 ml-4 mr-4"> 
                                <Link
                                    to="/kalori-makanan"
                                    className="flex bg-secondary500 focus:ring focus:ring-gray-200 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 rounded-lg w-32"
                                >
                                    Batal
                                </Link>
                                <Link
                                    onClick={updateData}
                                    //to="/kalori-makanan"
                                    className="flex bg-info500 focus:ring focus:ring-blue-200 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 rounded-lg w-32"
                                >
                                    Simpan
                                </Link>
                            </div>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default EditKalori;
