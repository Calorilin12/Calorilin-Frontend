import React from 'react';
import Icon from '@material-tailwind/react/Icon';

export default function StatusCard() {
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
                                        Pengguna
                                    </h5>
                                    <span className="font-semibold text-2xl text-blueGray-700">
                                        2.356
                                    </span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 shadow-lg rounded-full bg-pink-500">
                                        <Icon name="groups" size="3xl"/>
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
                                        Data Kalori
                                    </h5>
                                    <span className="font-semibold text-2xl text-blueGray-700">
                                        1.100
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
                                        456
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
