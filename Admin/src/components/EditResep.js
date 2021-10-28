import React from 'react';
import {Link} from "react-router-dom";

function EditResep() {
    return (
        <>
            <div className="">
                <div className="bg-white shadow-lg rounded-lg max-w-full mx-2 p-4">
                    <div className="flex">
                        <div className="w-full p-4 px-5 py-5">
                            <div className="flex flex-row">
                                <h2 className="text-2xl font-semibold">Form Edit Resep Makanan</h2>
                            </div>
                            <hr className="mt-3 mb-6 min-w-full" />
                            <div className="grid grid-cols-10">
                                <div className="col-start-1 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="gambar">Gambar Makanan</label><br/>
                                    <input type="file" name="gambar"/>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 h-20">
                                <div className="col-start-1 col-end-6 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="nama">Nama Makanan</label><br/>
                                    <input type="text" name="nama" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value="Nasi Ayam Panggang"/>
                                </div>
                                <div className="col-start-6 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="sumber">Sumber</label><br/>
                                    <input type="text" name="sumber" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value="Pura Kitchen"/>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 h-20">
                                <div className="col-start-1 col-end-6 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="kalori">Kalori</label><br/>
                                    <input type="text" name="kalori" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value="82 Kalori"/>
                                </div>
                                <div className="col-start-6 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="porsi">Porsi</label><br/>
                                    <input type="text" name="porsi" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value="2 Orang" />
                                </div>
                            </div>
                            <div className="grid grid-cols-10 h-20">
                                <div className="col-start-1 col-end-6 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="waktu">Lama Masak</label><br/>
                                    <input type="text" name="waktu" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value="30 Menit"/>
                                </div>
                                <div className="col-start-6 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="sumber">Kesulitan</label><br/>
                                    <input type="text" name="kesulitan" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value="Mudah"/>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 h-20">
                                <div className="col-start-1 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="kategori">Kategori</label><br/>
                                    <input type="text" name="kategori" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border focus:outline-none focus:border-gray-500" value="Makanan Utama, Nasi, Ayam"/>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 h-48 mt-2">
                                <div className="col-start-1 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="komposisi">Komposisi</label><br/>
                                    <textarea className="resize-none mt-1 pl-4 border focus:outline-none focus:border-gray-500 rounded-md w-full h-36" name="kategori">
                                        5 potong paha ayam,
                                        3 sdm Bango Kecap Manis,
                                        100 ml air,
                                        1 sdm minyak
                                    </textarea>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 h-60">
                                <div className="col-start-1 col-end-11 px-4 mb-2">
                                    <label className="text-secondary500 text-sm" for="langkah">Langkah Pembuatan</label><br/>
                                    <textarea className="resize-none mt-1 pl-4 border focus:outline-none focus:border-gray-500 rounded-md w-full h-52" name="langkah" >
                                        1. Panaskan minyak di atas wajan. Tumis bumbu halus. Setelah bumbu halus tercium baunya, masukkan paha ayam. Aduk rata.
                                        2. Tuangkan Bango Kecap Manis dan air, aduk rata.
                                        3. Aduk hingga rata, lalu masak hingga air surut dan bumbu meresap.
                                        4. Panaskan wajan, masukkan ayam ke atas wajan satu persatu. Panggang seperti di atas pembakaran.
                                        5. Setelah muncul char marks atau efek hitam pembakaran, angkat. Sajikan selagi hangat.
                                    </textarea>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center mt-12 ml-4 mr-4"> 
                                <Link
                                    to="/resep-makanan"
                                    className="flex bg-secondary500 focus:ring focus:ring-gray-200 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 rounded-lg w-32"
                                >
                                    Kembali
                                </Link>
                                <Link
                                    to="/resep-makanan"
                                    className="flex bg-info500 focus:ring focus:ring-blue-200 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 rounded-lg w-32"
                                >
                                    Simpan
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditResep;
