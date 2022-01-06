import React, { useEffect, useState } from 'react';
import { BASE_URL, ARTICLE } from 'utils/url';
import { getToken } from 'utils/auth';
import { Link } from 'react-router-dom';
import Image from '@material-tailwind/react/Image';
import Profile from '../assets/img/person-icon.jpg';
import axios from 'axios';

export default function ArticleCard() {
    const [apiData, setApiData] = useState([]);
    const config = {
        headers: { Authorization: `Bearer ${getToken()}` }
    };
    useEffect(() => {
        axios
            .get(ARTICLE, config)
            .then((res) => {
                setApiData(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            }); 
    }, []);
    return (
        <>
            <div className="relative flex flex-wrap bg-gray-100">
                {apiData.map(article =>
                    <Link key={article.id} className="cards cardsArticle bg-white shadow-md rounded-xl mx-4 my-5"  to={`/lihat-artikel/${article.id}`}>
                        <div className="overflow-x-hidden rounded-t-xl relative">
                            <img src={`${BASE_URL}/article-images/${article.article_image}`} alt={article.title} className="h-64 w-full object-cover"/>
                        </div>
                        <div className="mt-4 pl-3 pr-3 mb-2">
                            <p className="text-lg font-semibold text-gray-900 mb-0 ml-2 mr-2">{article.title}</p>
                            <div className="flex flex-row mt-8 ml-2 items-center">
                                <Image src={Profile} className="w-6 h-6" rounded />
                                <p className="text-md text-gray-800 ml-2">{article.writer}</p>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </>
    );
}
