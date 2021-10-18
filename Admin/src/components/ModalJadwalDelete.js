import React from 'react';
import Cancel from '../assets/img/cancel.png';
import Button from "@material-tailwind/react/Button";

function ModalJadwalDelete({closeModalDelete}) {
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-center mt-10 rounded-t">
                            <img src={Cancel} alt="Gambar Cancel" className="w-28 h-28"/>
                        </div>
                        <div className="relative p-8 flex-auto">
                            <h3 className="text-lg font-semibold flex justify-center">
                                Apakah anda yakin ingin menghapus data?
                            </h3>
                            <p className="my-2 text-blueGray-500 text-md leading-relaxed flex justify-center">
                                Data akan dihapus dari sistem aplikasi
                            </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-center p-2 rounded-b space-x-5 mb-8">
                            <Button
                                color="blueGray"
                                buttonType="filled"
                                size="regular"
                                rounded={false}
                                block={false}
                                iconOnly={false}
                                ripple="light"
                                onClick={() => closeModalDelete(false)}
                            >
                                Batal
                            </Button>
                            <Button
                                color="red"
                                buttonType="filled"
                                size="regular"
                                rounded={false}
                                block={false}
                                iconOnly={false}
                                ripple="light"
                                onClick={() => closeModalDelete(false)}
                            >
                                Hapus
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}

export default ModalJadwalDelete;
