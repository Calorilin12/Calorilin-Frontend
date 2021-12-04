import React, {useState} from 'react';
import View from '../assets/img/view.png';
import Delete from '../assets/img/delete.png';
import Edit from '../assets/img/edit.png';
import { Link } from 'react-router-dom';
import ModalDelete from './ModalKaloriDelete';

export default function KaloriList({apiData, search, refreshData}) {
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [deleteItem, setDeleteItem] = useState();
    const [nameItem, setNameItem] = useState();
    // const [refreshData, setRefreshData] = useState(0);
    return (
        <>
            <div className="overflow-x-auto mb-6">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead className="bg-secondary100">
                            <tr>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-2 text-sm whitespace-nowrap font-light text-left">
                                    No
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-2 text-sm whitespace-nowrap font-light text-left">
                                    Nama Bahan Makanan
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-2 text-sm whitespace-nowrap font-light text-left">
                                    Jumlah Penyajian
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-2 text-sm whitespace-nowrap font-light text-left">
                                    Jumlah Kalori
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-2 text-sm whitespace-nowrap font-light text-left">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {apiData.filter(val => {
                                if(search === ''){
                                    return val;
                                } else if(val.name.toLowerCase().includes(search.toLowerCase())){
                                    return val;
                                }
                            }).map((materials, index) =>
                                <tr key={materials.id}>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                        {index+1}
                                    </th>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                        {materials.name}
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                        {materials.serve}
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                        {materials.calory}
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                        <div className="flex flex-col space-y-1 lg:space-x-4 lg:flex-row lg:items-end">
                                            <Link className="" to={`/lihat-kalori-makanan/${materials.id}`}><img src={View} alt="Tombol Lihat"/></Link>
                                            <Link className="" to={`/edit-kalori-makanan/${materials.id}`}><img src={Edit} alt="Tombol Edit"/></Link>
                                            <button className="" 
                                                onClick={() => {
                                                    setShowModalDelete(true);
                                                    setDeleteItem(materials.id);
                                                    setNameItem(materials.name);
                                                }}>
                                            <img src={Delete} alt="Tombol Hapus"/></button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
            </div>
            {showModalDelete && <ModalDelete closeModalDelete={setShowModalDelete} onSuccess={refreshData} deleteItem={deleteItem} nameItem={nameItem}/>}
        </>
    );
}
