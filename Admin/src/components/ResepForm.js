import React , {useState} from 'react';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import View from '../assets/img/view.png';
import Delete from '../assets/img/delete.png';
import Edit from '../assets/img/edit.png';
import ModalDelete from './ModalResepDelete';
import { Link } from 'react-router-dom';

export default function ResepForm() {
    const [showModalDelete, setShowModalDelete] = useState(false);
    return (
    <>
        <Card>
            <CardHeader color="green" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Resep Makanan</h2>
                </div>
            </CardHeader>
            <div className="mt-7 ml-4">
                <Link
                    to="/tambah-resep-makanan"
                    className="flex bg-info500 focus:ring focus:ring-blue-200 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 rounded-lg w-32"
                >
                    Tambah Resep
                </Link>
            </div>
            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead className="bg-secondary100">
                            <tr>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-2 text-sm whitespace-nowrap font-light text-left">
                                    ID
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-2 text-sm whitespace-nowrap font-light text-left">
                                    Nama Makanan
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-2 text-sm whitespace-nowrap font-light text-left">
                                    Kategori
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-2 text-sm whitespace-nowrap font-light text-left">
                                    Tanggal dibuat
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-2 text-sm whitespace-nowrap font-light text-left">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    001
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    Nasi Ayam Panggang
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    <ul>
                                        <li>Nasi</li>
                                        <li>Ayam</li>
                                        <li>Makanan Utama</li>
                                    </ul> 
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    22/2/2021
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    <div className="flex flex-col space-y-1 lg:space-x-4 lg:flex-row lg:items-end">
                                        <Link className="" to="/lihat-resep-makanan"><img src={View} alt="Tombol Lihat"/></Link>
                                        <Link className="" to="/edit-resep-makanan"><img src={Edit} alt="Tombol Edit"/></Link>
                                        <button className="" onClick={() => setShowModalDelete(true)}><img src={Delete} alt="Tombol Hapus"/></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    001
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    Nasi Ayam Panggang
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    <ul>
                                        <li>Nasi</li>
                                        <li>Ayam</li>
                                        <li>Makanan Utama</li>
                                    </ul> 
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    22/2/2021
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    <div className="flex flex-col space-y-1 lg:space-x-4 lg:flex-row lg:items-end">
                                        <Link className="" to="/lihat-resep-makanan"><img src={View} alt="Tombol Lihat"/></Link>
                                        <Link className="" to="/edit-resep-makanan"><img src={Edit} alt="Tombol Edit"/></Link>
                                        <button className="" onClick={() => setShowModalDelete(true)}><img src={Delete} alt="Tombol Hapus"/></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    001
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    Nasi Ayam Panggang
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    <ul>
                                        <li>Nasi</li>
                                        <li>Ayam</li>
                                        <li>Makanan Utama</li>
                                    </ul> 
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    22/2/2021
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    <div className="flex flex-col space-y-1 lg:space-x-4 lg:flex-row lg:items-end">
                                        <Link className="" to="/lihat-resep-makanan"><img src={View} alt="Tombol Lihat"/></Link>
                                        <Link className="" to="/edit-resep-makanan"><img src={Edit} alt="Tombol Edit"/></Link>
                                        <button className="" onClick={() => setShowModalDelete(true)}><img src={Delete} alt="Tombol Hapus"/></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    001
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    Nasi Ayam Panggang
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    <ul>
                                        <li>Nasi</li>
                                        <li>Ayam</li>
                                        <li>Makanan Utama</li>
                                    </ul> 
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    22/2/2021
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    <div className="flex flex-col space-y-1 lg:space-x-4 lg:flex-row lg:items-end">
                                        <Link className="" to="/lihat-resep-makanan"><img src={View} alt="Tombol Lihat"/></Link>
                                        <Link className="" to="/edit-resep-makanan"><img src={Edit} alt="Tombol Edit"/></Link>
                                        <button className="" onClick={() => setShowModalDelete(true)}><img src={Delete} alt="Tombol Hapus"/></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    001
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    Nasi Ayam Panggang
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    <ul>
                                        <li>Nasi</li>
                                        <li>Ayam</li>
                                        <li>Makanan Utama</li>
                                    </ul> 
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    22/2/2021
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                    <div className="flex flex-col space-y-1 lg:space-x-4 lg:flex-row lg:items-end">
                                        <Link className="" to="/lihat-resep-makanan"><img src={View} alt="Tombol Lihat"/></Link>
                                        <Link className="" to="/edit-resep-makanan"><img src={Edit} alt="Tombol Edit"/></Link>
                                        <button className="" onClick={() => setShowModalDelete(true)}><img src={Delete} alt="Tombol Hapus"/></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
        {showModalDelete && <ModalDelete closeModalDelete={setShowModalDelete}/>}
    </>
    ); 
}