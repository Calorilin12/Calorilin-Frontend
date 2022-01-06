import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { ARTICLE } from 'utils/url';
import { getToken } from 'utils/auth';
import axios from 'axios';

function TambahArtikel() {

    const history = useHistory();

    const config = {
        headers: { 'Authorization': `Bearer ${getToken()}`, 'content-type': `multipart/form-data` }
    };

    const [saveImage, setSaveImage] = useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleUploadChange(e){
        console.log(e.target.files[0]);
        let uploaded = e.target.files[0];
        setSaveImage(uploaded);
    }

    function uploadData(){
        if(!saveImage){
            alert('Upload Gambar Dulu!');
        } else if (!title){
            alert('Field Judul Artikel Harus Terisi!');
        } else if(!content){
            alert('Field Content Harus Terisi!');
        } else{
            let formData = new FormData();
            formData.append("article_image", saveImage);
            formData.append("title", title);
            // formData.append("writer", writer);
            formData.append("content", content);
            axios
            .post(ARTICLE, formData, config)
            .then((res) => {
                console.log("sukses input data artikel");
                alert('Data Berhasil Ditambahkan');
                history.replace('/artikel');
            }).catch((err) => {
                console.log(err);
                alert('Coba Lagi, Data Gagal Ditambahkan');
            });
        }
    }

    return (
        <>
            <div className="bg-white shadow-lg max-w-full mx-2 p-4 mt-4">
                <div className="flex">
                    <div className="w-full p-4 px-5 py-5">
                        <div className="flex flex-row">
                            <h2 className="text-xl lg:text-2xl font-semibold">Form Tambah Data Artikel</h2>
                        </div>
                        <hr className="mt-4 mb-6 min-w-full" />
                        <div className="grid grid-cols-10 h-20">
                            <div className="col-start-1 col-end-11 px-4 mb-2 space-y-2">
                                <label className="text-secondary500 text-sm" for="gambar">Gambar Artikel</label><br/>
                                <input type="file" name="gambar" onChange={handleUploadChange}/>
                            </div>
                        </div>
                        <div className="grid grid-cols-10">
                            <div className="col-start-1 col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="jumlah">Judul</label><br/>
                                <input type="text" name="judul" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" placeholder="Judul Artikel"
                                        value={title} onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-10 h-60">
                            <div className="col-start-1 col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm">Content</label><br/>
                                    <textarea className="resize-none mt-1 pl-4 pt-2 text-sm border focus:outline-none focus:border-gray-500 rounded-md w-full h-52"
                                            value={content} onChange={(e) => setContent(e.target.value)}
                                            placeholder="Content Artikel">
                                    </textarea>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-14 ml-4 mr-4"> 
                                <Link
                                    to="/artikel"
                                    className="flex bg-secondary500 focus:ring focus:ring-gray-200 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 rounded-lg w-32"
                                >
                                    Batal
                                </Link>
                                <Link
                                    onClick={uploadData}
                                    className="flex bg-info500 focus:ring focus:ring-blue-200 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 rounded-lg w-32"
                                >
                                    Tambah
                                </Link>
                            </div>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default TambahArtikel;
