import React from 'react';
import Button from "@material-tailwind/react/Button";

function ModalKaloriView({closeModalView}) {
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*body*/}
                        <div className="relative p-9 flex-auto">
                            <div className="container mx-auto max-w-full">
                                <div className="grid grid-cols-5 h-20">
                                    <div className="col-start-1 col-end-4 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Nama</label><br/>
                                        <input type="text" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-greyLight" value="Telur" readonly/>    
                                    </div>
                                    <div className="col-start-4 col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Tanggal dibuat</label><br/>
                                        <input type="text" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-greyLight" value="03/02/2021" readonly/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-5 xl:h-20">
                                        <div className="col-start-1 col-end-4 px-4 mb-8">
                                            <label className="text-secondary500 text-sm">Penyajian</label><br/>
                                            <input type="text" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-greyLight" value="Ceplok" readonly/>    
                                        </div>
                                        <div className="col-start-4 col-end-5 px-4 mb-8">
                                            <label className="text-secondary500 text-sm">Kalori</label><br/>
                                            <input type="text" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-greyLight" value="128 kal" readonly/>    
                                        </div>
                                        <div className="col-start-5 col-end-6 px-4 mb-8">
                                            <label className="text-secondary500 text-sm">Karbo</label><br/>
                                            <input type="text" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-greyLight" value="28.5 g" readonly/>    
                                        </div>
                                </div>
                                <div className="grid grid-cols-5 h-20">
                                        <div className="col-start-1 col-end-4 px-4 mb-8">
                                            <label className="text-secondary500 text-sm">Jumlah Bahan</label><br/>
                                            <input type="text" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-greyLight" value="1 Butir" readonly/>    
                                        </div>
                                        <div className="col-start-4 col-end-5 px-4 mb-8">
                                            <label className="text-secondary500 text-sm">Lemak</label><br/>
                                            <input type="text" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-greyLight" value="128 kal" readonly/>    
                                        </div>
                                        <div className="col-start-5 col-end-6 px-4 mb-8">
                                            <label className="text-secondary500 text-sm">Protein</label><br/>
                                            <input type="text" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-greyLight" value="28.5 g" readonly/>    
                                        </div>
                                </div>
                                <div className="grid grid-cols-5 h-20">
                                    <div className="col-start-1 col-end-3 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Lari</label><br/>
                                        <input type="text" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-greyLight" value="30 Menit" readonly/>    
                                    </div>
                                    <div className="col-start-3 col-end-5 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Bersepeda</label><br/>
                                        <input type="text" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-greyLight" value="30 Menit" readonly/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-5">
                                    <div className="col-start-1 col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Deskripsi</label><br/>
                                        <textarea className="w-full px-3 py-2 text-gray-700 border border-greyLight rounded-lg focus:outline-none" rows="4" readonly>
                                            Telur adalah salah satu bahan makanan hewani yang dikonsumsi selain daging, ikan, dan susu.
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end mr-4">
                                <Button
                                    color="blueGray"
                                    buttonType="filled"
                                    size="regular"
                                    rounded={false}
                                    block={false}
                                    iconOnly={false}
                                    ripple="light"
                                    onClick={() => closeModalView(false)}
                                >
                                    Tutup
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

export default ModalKaloriView;
