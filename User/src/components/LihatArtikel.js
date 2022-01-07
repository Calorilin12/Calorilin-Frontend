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
            <div className="bg-white shadow-lg max-w-full mx-2 p-4 mt-4">
                    <div className="w-full p-4 px-5 py-5">
                        <div className="coverArticle flex items-center justify-center mt-4 md:mt-10">
                            <img src={`${BASE_URL}/article-images/${apiData.article_image}`} alt={apiData.title} className='imageArticle'/>
                            <div className="tittleCover bg-white font-serif mx-4 p-4 text-center md:p-8">
                                <h1 className="text-2xl font-semibold uppercase">
                                    {apiData.title}
                                </h1>
                                <p className="text-md">
                                    {apiData.writer}
                                </p>
                            </div>
                        </div>
                        <div className="w-full mt-3 md:mt-1 md:p-12">
                            <p className="text-justify mb-4 text-md">{apiData.content}</p>
                        </div>
                        <div className="flex justify-end items-center mt-14 ml-4 mr-4"> 
                            <Link
                                to="/dashboard"
                                className="flex bg-secondary500 focus:ring focus:ring-gray-200 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 rounded-lg w-32"
                            >
                                Kembali
                            </Link>
                        </div>
                    </div>
            </div>
        {/* )}  */}
        </>
    );
}

export default LihatArtikel;