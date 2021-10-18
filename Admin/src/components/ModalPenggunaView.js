import React from 'react';
import Button from "@material-tailwind/react/Button";

function ModalPenggunaView({closeModalView}) {
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
                                <div className="grid grid-cols-1 xl:grid-cols-5 xl:h-20">
                                    <div className="xl:col-start-1 xl:col-end-4 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Nama</label><br/>
                                        <input type="text" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-greyLight" value="Stefanus Irgy" readonly/>    
                                    </div>
                                    <div className="xl:col-start-4 xl:col-end-6 px-4 mb-2">
                                        <label className="text-secondary500 text-sm">Tanggal Registrasi</label><br/>
                                        <input type="text" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-greyLight" value="03/02/2021" readonly/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 xl:grid-cols-5 xl:h-20">
                                    <div className="xl:col-start-1 xl:col-end-4 px-4 mb-8">
                                        <label className="text-secondary500 text-sm">Email</label><br/>
                                        <input type="text" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-greyLight" value="stefanusirgy2202@gmail.com" readonly/>    
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end mt-2 mr-4">
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

export default ModalPenggunaView;
