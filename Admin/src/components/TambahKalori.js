import React from 'react';
import {Link} from 'react-router-dom';

function tambahKalori() {
    return (
        <>
            <div className="bg-white shadow-lg max-w-full mx-2 p-4 mt-4">
                <div className="flex">
                    <div className="w-full p-4 px-5 py-5">
                        <div className="flex flex-row">
                            <h2 className="text-lg font-semibold">Form Tambah Kalori Bahan Makanan</h2>
                        </div>
                        <hr className="mt-4 mb-6 min-w-full" />
                        <div className="grid grid-cols-10">
                                <div className="col-start-1 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="gambar">Gambar Makanan</label><br/>
                                    <input type="file" name="gambar"/>
                                </div>
                            </div>
                        <div className="grid grid-cols-10 h-24">
                            <div className="col-start-1 col-end-6 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="menu">Nama Bahan</label><br/>
                                <input type="text" name="menu" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" placeholder="Nama Bahan"/>
                            </div>
                            <div className="col-start-6 col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="jumlah">Tanggal Dibuat</label><br/>
                                <input type="text" name="jumlah" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" placeholder="Tanggal dibuat"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-10 h-20">
                            <div className="col-start-1 col-end-6 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="menu">Jumlah Bahan</label><br/>
                                <input type="text" name="menu" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" placeholder="Jumlah Bahan"/>
                            </div>
                            <div className="col-start-6 col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="jumlah">Penyajian</label><br/>
                                <input type="text" name="jumlah" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" placeholder="Cara Penyajian"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-10 h-20">
                            <div className="col-start-1 col-end-6 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="menu">Kalori</label><br/>
                                <input type="text" name="menu" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" placeholder="Jumlah Kalori"/>
                            </div>
                            <div className="col-start-6 col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="jumlah">Karbo</label><br/>
                                <input type="text" name="jumlah" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" placeholder="Jumlah Karbo"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-10 h-24">
                            <div className="col-start-1 col-end-6 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="menu">Lemak</label><br/>
                                <input type="text" name="menu" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" placeholder="Jumlah Lemak"/>
                            </div>
                            <div className="col-start-6 col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="jumlah">Protein</label><br/>
                                <input type="text" name="jumlah" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" placeholder="Jumlah Protein"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-10 h-60">
                            <div className="col-start-1 col-end-11 px-4 mb-2">
                                <label className="text-secondary500 text-sm" for="menu">Deskripsi</label><br/>
                                <textarea className="resize-none mt-1 px-4 border focus:outline-none focus:border-gray-500 rounded-md w-full h-52" name="langkah" placeholder="Deskripsi"></textarea>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-12 ml-4 mr-4"> 
                                <Link
                                    to="/kalori-makanan"
                                    className="flex bg-secondary500 focus:ring focus:ring-gray-200 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 rounded-lg w-32"
                                >
                                    Kembali
                                </Link>
                                <Link
                                    to="/kalori-makanan"
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

export default tambahKalori;
