import React, { useEffect, useState } from 'react';
import {Link, useParams} from "react-router-dom";
import { BASE_URL, ARTICLE } from 'utils/url';
import { getToken } from 'utils/auth';
import '../assets/styles/components.css';
import axios from 'axios';

function LihatArtikel() {
    const { id } = useParams();
    const [apiData, setApiData] = useState([]);
    const config = {
        headers: { Authorization: `Bearer ${getToken()}` }
    };
    useEffect(() => {
        axios
            .get(ARTICLE + id, config)
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
                            <h2 className="text-xl lg:text-2xl font-semibold">Artikel</h2>
                        </div>
                        <hr className="mt-4 mb-6 min-w-full" />
                        <div className="flex justify-center mb-6">
                            <div>
                                <img src={`${BASE_URL}/article-images/${apiData.article_image}`} alt={apiData.title} className="imageArticle"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-10">
                            <div className="col-start-1 col-end-11 lg:col-start-1 lg:col-end-6 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="title">Judul Artikel</label><br/>
                                <input type="text" name="title" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={apiData.title} readOnly />
                            </div>
                            <div className="col-start-1 col-end-11 lg:col-start-6 lg:col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="jenis">Penulis</label><br/>
                                <input type="text" name="writer" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value={apiData.writer} readOnly />
                            </div>
                        </div>
                        <div className="grid grid-cols-10 h-60">
                            <div className="col-start-1 col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm">Content</label><br/>
                                    <textarea className="resize-none mt-1 pl-4 pt-2 text-sm border focus:outline-none focus:border-gray-500 rounded-md w-full h-52"
                                            value={apiData.content} readOnly></textarea>
                            </div>
                        </div>
                        <div className="flex justify-end items-center mt-14 ml-4 mr-4"> 
                            <Link
                                to="/artikel"
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

export default LihatArtikel;