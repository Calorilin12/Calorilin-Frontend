import React from 'react';
import Button from "@material-tailwind/react/Button";
import Gambar from '../assets/img/ayam.jpg';

function ModalResepTambah({closeModalTambah}) {
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl max-h-full">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*body*/}
                        <div className="relative p-9 flex-auto">
                            <div className="container mx-auto max-w-full">
                                <img src={Gambar} alt="Gambar Makanan" className="ml-4 mb-2 w-36 h-24"/>
                                <div className="grid grid-cols-5 h-20">
                                    <div className="col-start-1 col-end-3 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Tanggal dibuat</label><br/>
                                        <input type="text" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-greyLight" value="03/02/2021" />
                                    </div>
                                    <div className="col-start-3 col-end-5 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Sumber</label><br/>
                                        <input type="text" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-greyLight" value="Pura Kitchen" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-5 h-20">
                                    <div className="col-start-1 col-end-3 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Nama</label><br/>
                                        <input type="text" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-greyLight" value="Nasi Ayam Panggang" />    
                                    </div>
                                    <div className="col-start-3 col-end-5 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Porsi</label><br/>
                                        <input type="text" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-greyLight" value="2 Orang" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-5 h-20">
                                    <div className="col-start-1 col-end-3 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Lama Memasak</label><br/>
                                        <input type="text" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-greyLight" value="30 Menit" />    
                                    </div>
                                    <div className="col-start-3 col-end-5 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Kesulitan</label><br/>
                                        <input type="text" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-greyLight" value="Mudah" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-5 h-20">
                                    <div className="col-start-1 col-end-3 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Kalori</label><br/>
                                        <input type="text" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-greyLight" value="82 Kalori" />    
                                    </div>
                                    <div className="col-start-3 col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Kategori</label><br/>
                                        <input type="text" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-greyLight" value="Makanan Utama, Nasi, Ayam" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-5">
                                    <div className="col-start-1 col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Komposisi</label><br/>
                                        <textarea className="w-full px-3 py-2 mt-1 text-gray-700 border border-greyLight rounded-lg focus:outline-none" rows="2" >                                           
                                            5 potong paha ayam,
                                            3 sdm Bango Kecap Manis,
                                            100 ml air,
                                            1 sdm minyak
                                        </textarea>
                                    </div>
                                </div>
                                <div className="grid grid-cols-5">
                                    <div className="col-start-1 col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Langkah Pembuatan</label><br/>
                                        <textarea className="w-full px-3 py-2 mt-1 text-gray-700 border border-greyLight rounded-lg focus:outline-none" rows="3" >
                                            1. Panaskan minyak di atas wajan. Tumis bumbu halus. Setelah bumbu halus tercium baunya, masukkan paha ayam. Aduk rata.
                                            2. Tuangkan Bango Kecap Manis dan air, aduk rata.
                                            3. Aduk hingga rata, lalu masak hingga air surut dan bumbu meresap.
                                            4. Panaskan wajan, masukkan ayam ke atas wajan satu persatu. Panggang seperti di atas pembakaran.
                                            5. Setelah muncul char marks atau efek hitam pembakaran, angkat. Sajikan selagi hangat.
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end mt-2 mr-4 space-x-4">
                                <Button
                                    color="blueGray"
                                    buttonType="filled"
                                    size="regular"
                                    rounded={false}
                                    block={false}
                                    iconOnly={false}
                                    ripple="light"
                                    onClick={() => closeModalTambah(false)}
                                >
                                    Batal
                                </Button>
                                <Button
                                    color="green"
                                    buttonType="filled"
                                    size="regular"
                                    rounded={false}
                                    block={false}
                                    iconOnly={false}
                                    ripple="light"
                                    onClick={() => closeModalTambah(false)}
                                >
                                    Tambah
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}

export default ModalResepTambah;
