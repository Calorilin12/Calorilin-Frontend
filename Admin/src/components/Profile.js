import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { BASE_URL } from 'utils/url';
import { USERS } from 'utils/url';
import { getToken } from 'utils/auth'
import axios from 'axios';

const Profile = () => {
    const { id } = useParams();
    const [apiData, setApiData] = useState([]);
    const config = {
        headers: { Authorization: `Bearer ${getToken()}` }
    };
    useEffect(() => {
        axios
            .get(USERS + id, config)
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
                <div className="flex">
                    <div className="w-full p-4 px-5 py-5">
                        <h3 className="text-center text-2xl font-semibold mb-8">INFORMASI ADMIN</h3>
                        <img src={`${BASE_URL}/user-detail-images/${apiData.image}`} alt="Foto Profil Admin" alt="Foto Profil" className="w-48 h-48 mx-auto rounded-full mt-4"/>
                        <div className="mt-6">
                            <p className="text-center font-semibold text-xl">{apiData.name}</p>
                            <p className="text-center mt-2 text-sm">{apiData.email}</p>
                            <p className="text-center mt-2 text-sm">{apiData.phone_number}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;