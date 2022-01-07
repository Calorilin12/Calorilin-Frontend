import React, { useEffect, useState } from 'react';
import { DASHBOARD, FOOD_MATERIALS_FAVORITES } from 'utils/url';
import { getToken, getID } from 'utils/auth';
import axios from 'axios';
import Icon from '@material-tailwind/react/Icon';

export default function StatusCard() {
    const [apiData, setApiData] = useState([]);
    const [data, setData] = useState([]);
    const config = {
        headers: { Authorization: `Bearer ${getToken()}` }
    };
    useEffect(() => {
        axios
            .get(DASHBOARD, config)
            .then((res) => {
                setApiData(res.data.dashboard);
            })
            .catch((err) => {
                console.log(err);
            }); 
        axios
            .get(FOOD_MATERIALS_FAVORITES + `${getID()}`, config)
            .then((res) => {
                console.log("masuk bro");
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            }); 
    }, []);
    return (
        <>
            {/* Card stats */}
            <div className="flex flex-wrap">
                <div className="w-full xl:w-4/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-6">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1 mt-2 ml-2">
                                    <h5 className="text-blueGray-400 uppercase text-xs mb-1">
                                        Kalori Harian Anda
                                    </h5>
                                    <span className="font-semibold text-2xl text-blueGray-700">
                                        {data.reduce((total, currentValue) => total = total + currentValue.calory,0)+"  Cal"}
                                    </span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 shadow-lg rounded-full bg-pink-500">
                                        <Icon name="restaurant" size="3xl"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-4/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-6">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1 mt-2 ml-2">
                                    <h5 className="text-blueGray-400 uppercase text-xs mb-1">
                                        Data Bahan Makanan
                                    </h5>
                                    <span className="font-semibold text-2xl text-blueGray-700">
                                        {apiData.food_materials}
                                    </span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 shadow-lg rounded-full bg-orange-500">
                                        <Icon name="folder" size="3xl"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-4/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-6">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1 mt-2 ml-2">
                                    <h5 className="text-blueGray-400 uppercase text-xs mb-1">
                                        Data Resep
                                    </h5>
                                    <span className="font-semibold text-2xl text-blueGray-700">
                                        {apiData.recipes}
                                    </span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 shadow-lg rounded-full bg-blue-500">
                                        <Icon name="book" size="3xl"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
