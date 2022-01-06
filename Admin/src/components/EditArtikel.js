import React, { useEffect, useState } from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import { ARTICLE } from 'utils/url';
import { getToken } from 'utils/auth';
import axios from 'axios';

function EditArtikel() {

    const history = useHistory();
    const { id } = useParams();
    const config = {
        headers: { Authorization: `Bearer ${getToken()}`, 'Content-Type': `multipart/form-data` }
    };

    const [saveImage, setSaveImage] = useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleUploadChange(e){
        console.log(e.target.files[0]);
        let uploaded = e.target.files[0];
        setSaveImage(uploaded);
    }

    useEffect(() => {
        axios
            .get(ARTICLE + id, config)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setTitle(res.data.title);
                setContent(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            }); 
    }, []);

    const updateData = () => {
        if (!title){
            alert('Field Judul Artikel Harus Terisi!');
        } else if(!content){
            alert('Field Content Harus Terisi!');
        } else {
            let formData = new FormData();
            formData.append("article_image", saveImage);
            formData.append("title", title);
            formData.append("content", content);
            axios
                .post(ARTICLE + id + '?_method=PUT', formData, config)
                .then((res) => {
                    console.log("sukses edit data");
                    console.log(res.data);                
                    alert('Data Berhasil Diubah');
                    history.replace('/artikel');
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
                            <h2 className="text-xl lg:text-2xl font-semibold">Form Edit Artikel</h2>
                        </div>
                        <hr className="mt-4 mb-6 min-w-full" />
                        <div className="grid grid-cols-10 h-16">
                            <div className="col-start-1 col-end-11 px-4 mb-2 space-y-1">
                                <label className="text-secondary500 text-sm" for="gambar">Gambar Artikel</label><br/>
                                <input type="file" name="gambar" onChange={handleUploadChange}/>
                            </div>
                        </div>
                        <div className="grid grid-cols-10">
                            <div className="col-start-1 col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="nama">Judul Artikel</label><br/>
                                <input type="text" name="title" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" 
                                        value={title} onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-10 h-60">
                            <div className="col-start-1 col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm">Content</label><br/>
                                    <textarea className="resize-none mt-1 pl-4 pt-2 text-sm border focus:outline-none focus:border-gray-500 rounded-md w-full h-52"
                                            value={content} onChange={(e) => setContent(e.target.value)}>
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
                                    onClick={updateData}
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

export default EditArtikel;
