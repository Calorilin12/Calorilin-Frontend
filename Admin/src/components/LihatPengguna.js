import React from 'react';
import {Link} from 'react-router-dom';
import Gambar from '../assets/img/team-1-800x800.jpg';

function LihatPengguna() {
    return (
        <>
        <div className="bg-white shadow-lg max-w-full mx-2 p-4 mt-4">
                <div className="flex">
                    <div className="w-full p-4 px-5 py-5">
                        <div className="flex flex-row">
                            <h2 className="text-lg font-semibold">Data Pengguna</h2>
                        </div>
                        <hr className="mt-4 mb-6 min-w-full" />
                        <div className="grid grid-cols-10 h-20">
                            <div className="bg-white w-36 h-32">
                                <img src={Gambar} alt="Foto Profil" className="float-left shadow rounded-full w-32 h-32 align-middle border-none"/>
                            </div>
                            <div className="col-start-3 col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="menu">Nama Pengguna</label><br/>
                                <input type="text" name="menu" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value="Stefanus Irgy Hananto" readonly />
                            </div>
                        </div>
                        <div className="grid grid-cols-10 h-20">
                            <div className="col-start-3 col-end-7 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="menu">Email Pengguna</label><br/>
                                <input type="text" name="menu" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value="stefanusirgy2202@gmail.com" readonly />
                            </div>
                            <div className="col-start-7 col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="jumlah">Tanggal Registrasi</label><br/>
                                <input type="text" name="jumlah" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value="04 / 04 / 2021" readonly/>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg max-w-full mx-2 p-4 mt-4">
                        <div className="flex">
                            <div className="w-full p-4 px-5 py-5">
                                <div className="flex flex-row">
                                    <h2 className="text-lg font-semibold">Penyakit Bawaan</h2>
                                </div>
                                <hr className="mt-4 mb-6 min-w-full" />
                                <div className="grid grid-cols-10 h-20">
                                    <div className="col-start-1 col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm" for="menu">Tekanan Darah</label><br/>
                                        <input type="text" name="menu" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value="-" readonly />
                                    </div>
                                    <div className="col-start-6 col-end-11 px-4 mb-2">
                                        <label className="text-secondary500 text-sm" for="jumlah">Gula</label><br/>
                                        <input type="text" name="jumlah" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value="-" readonly/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-10 h-20">
                                    <div className="col-start-1 col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm" for="kalori">Berat Badan</label><br/>
                                        <input type="text" name="kalori" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value="-" readonly />
                                    </div>
                                    <div className="col-start-6 col-end-11 px-4 mb-2">
                                        <label className="text-secondary500 text-sm" for="karbo">Tinggi Badan</label><br/>
                                        <input type="text" name="karbo" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value="-" readonly />
                                    </div>
                                </div>
                                <div className="grid grid-cols-10 h-20">
                                    <div className="col-start-1 col-end-11 px-4 mb-2">
                                        <label className="text-secondary500 text-sm" for="kalori">Kategori Penyakit</label><br/>
                                        <input type="text" name="kalori" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value="Kolesterol, Asam urat" readonly />
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

export default LihatPengguna;
