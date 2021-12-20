import React , {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import '../assets/styles/components.css';
import View from '../assets/img/view.png';
import Delete from '../assets/img/delete.png';
import Edit from '../assets/img/edit.png';
import Search from 'assets/img/search-grey.png';
import ModalDelete from './ModalKaloriDelete';
import { FOOD_MATERIALS } from 'utils/url';
import { getToken } from 'utils/auth'
import axios from 'axios';

export default function KaloriForm() {
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [deleteItem, setDeleteItem] = useState();
    const [nameItem, setNameItem] = useState();
    const [refreshData, setRefreshData] = useState(0);
    const [search, setSearch] = useState("");
    const [apiData, setApiData] = useState([]);
    const config = {
        headers: { Authorization: `Bearer ${getToken()}` }
    };
    useEffect(() => {
        axios
            .get(FOOD_MATERIALS, config)
            .then((res) => {
                console.log(res.data);
                setApiData(res.data);
            })
            .catch((err) => {
                console.log(err);
            }); 
    }, [refreshData]);

    const sortTerbaru = () => {
        const sorted = [...apiData].sort((a, b) => {
            return b.id - a.id;
        });
        setApiData(sorted);
    };
    const sortTerlama = () => {
        const sorted = [...apiData].sort((a, b) => {
            return a.id - b.id;
        });
        setApiData(sorted);
    };

    const sortAsc = () => {
        const sorted = [...apiData].sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        setApiData(sorted);
    }

    const sortDesc = () => {
        const sorted = [...apiData].sort((a, b) => {
            return b.name.localeCompare(a.name);
        });
        setApiData(sorted);
    }

    return (
        <>
        <Card>
            <CardHeader color="green" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Kalori Bahan Makanan</h2>
                </div>
            </CardHeader>
            <div className="mt-8 ml-4 mr-4">
                <div className="absolute ml-4 mt-3">
                    <img src={Search} alt="Icon Search" className="w-4 h-4"/>
                </div>
                <div> 
                    <input class="border-2 border-gray-300 bg-white h-10 w-32 pl-10 rounded-lg text-sm focus:outline-none sm:w-full"
                            type="search" name="search" placeholder="Search" onChange = {(e) => { setSearch(e.target.value); }}>
                    </input>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center">
                <div className="mt-8 mb-1 ml-4"> 
                    <Link
                        to="/tambah-kalori-makanan"
                        className="flex bg-info500 focus:ring focus:ring-blue-200 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 rounded-lg w-32"
                    >
                        Tambah Data
                    </Link>
                </div>
                <div className="flex flex-row justify-end mt-8 mr-4">
                    <select className="option bg-secondary500 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 rounded-lg w-full h-9">
                        <option onClick={sortTerlama}>Data Terlama</option>
                        <option onClick={sortTerbaru}>Data Terbaru</option>
                        <option onClick={sortAsc}>Nama Resep A-Z</option>
                        <option onClick={sortDesc}>Nama Resep Z-A</option>
                    </select>
                </div>
            </div>
            <CardBody>
                <div className="overflow-x-auto">
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
                        {apiData.filter(val => {
                                if(search === ''){
                                    return val;
                                } else if(val.name.toLowerCase().includes(search.toLowerCase())){
                                    return val;
                                }
                        }).map((materials, index) =>
                        <tbody className="">
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
                        </tbody>
                        )}

                    </table>
                </div>
            </CardBody>
        </Card>
        {showModalDelete && <ModalDelete closeModalDelete={setShowModalDelete} onSuccess={setRefreshData} deleteItem={deleteItem} nameItem={nameItem}/>}
        </>
    );
}