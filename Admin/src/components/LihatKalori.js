import React from 'react';
import {Link} from 'react-router-dom';
import Gambar from '../assets/img/team-1-800x800.jpg';

function LihatKalori() {
    return (
        <>
        <div className="bg-white shadow-lg max-w-full mx-2 p-4 mt-4">
                <div className="flex">
                    <div className="w-full p-4 px-5 py-5">
                        <div className="flex flex-row">
                            <h2 className="text-lg font-semibold">Kalori Bahan Makanan</h2>
                        </div>
                        <hr className="mt-4 mb-6 min-w-full" />
                        <div className="grid grid-cols-10 h-20">
                            <div className="bg-white w-36 h-32">
                                <img src={Gambar} alt="Foto Profil" className="float-left shadow rounded-full w-32 h-32 align-middle border-none"/>
                            </div>
                            <div className="col-start-3 col-end-7 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="menu">Nama Bahan</label><br/>
                                <input type="text" name="menu" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value="Telur" readonly />
                            </div>
                            <div className="col-start-7 col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="jumlah">Tanggal Dibuat</label><br/>
                                <input type="text" name="jumlah" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value="04 / 04 / 2021" readonly/>
                            </div>
                        </div>
                        <div className="grid grid-cols-10 h-60">
                            <div className="col-start-3 col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="menu">Deskripsi</label><br/>
                                <textarea className="resize-none mt-1 px-4 border focus:outline-none focus:border-gray-500 rounded-md w-full h-52" name="langkah" readonly>
                                Telur adalah salah satu bahan makanan hewani yang dikonsumsi selain daging, ikan dan susu. Umumnya telur yang dikonsumsi berasal dari jenis-jenis burung, 
seperti ayam, bebek, dan angsa, akan tetapi teluryang lebih kecil seperti telur ikan kadang juga digunakan sebagai campuran dalam hidangan.
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default LihatKalori;
