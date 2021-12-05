import React , {useEffect, useState} from 'react';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import View from '../assets/img/view.png';
import Delete from '../assets/img/delete.png';
import Edit from '../assets/img/edit.png';
import Search from 'assets/img/search-grey.png';
import ModalDelete from './ModalResepDelete';
import { Link } from 'react-router-dom';
import { RECIPES } from 'utils/url';
import { getToken } from 'utils/auth';
import axios from 'axios';

export default function ResepForm() {
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
            .get(RECIPES, config)
            .then((res) => {
                console.log(res.data);
                setApiData(res.data);
            })
            .catch((err) => {
                console.log(err);
            }); 
    }, [refreshData]);
    return (
    <>
        <Card>
            <CardHeader color="green" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Resep Makanan</h2>
                </div>
            </CardHeader>
            <div className="flex flex-row justify-between items-center">
                <div className="mt-8 mb-1 ml-4"> 
                    <Link
                        to="/tambah-resep-makanan"
                        className="flex bg-info500 focus:ring focus:ring-blue-200 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 rounded-lg w-32"
                    >
                        Tambah Resep
                    </Link>
                </div>
                <div className="flex flex-row justify-end">
                    <div className="absolute mr-36 mt-11 sm:mr-52">
                        <img src={Search} alt="Icon Search" className="w-4 h-4"/>
                    </div>
                    <div className="items-end mt-8 mb-1 mr-4"> 
                        <input class="border-2 border-gray-300 bg-white h-10 w-40 pl-10 rounded-lg text-sm focus:outline-none sm:w-56 sm:pl-10"
                                type="search" name="search" placeholder="Search" onChange = {(e) => { setSearch(e.target.value); }}>
                        </input>
                    </div>
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
                                    Nama Makanan
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-2 text-sm whitespace-nowrap font-light text-left">
                                    Sumber Resep
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-2 text-sm whitespace-nowrap font-light text-left">
                                    Level Pembuatan
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-2 text-sm whitespace-nowrap font-light text-left">
                                    Tanggal Dibuat
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
                            }).map((recipes, index) =>
                                <tr key={recipes.id}>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                        {index+1}
                                    </th>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                        {recipes.name}
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                        {recipes.made_by}
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                        {recipes.level_of_difficult}
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                        {recipes.created_at}
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                        <div className="flex flex-col space-y-1 lg:space-x-4 lg:flex-row lg:items-end">
                                            <Link className="" to={`/lihat-resep-makanan/${recipes.id}`}><img src={View} alt="Tombol Lihat"/></Link>
                                            <Link className="" to={`/edit-resep-makanan/${recipes.id}`}><img src={Edit} alt="Tombol Edit"/></Link>
                                            {/* <button className="" onClick={() => handleClick(recipes.id)}><img src={Delete} alt="Tombol Hapus"/></button> */}
                                            <button className="" 
                                                onClick={() => {
                                                    setShowModalDelete(true);
                                                    setDeleteItem(recipes.id);
                                                    setNameItem(recipes.name);
                                                }}>
                                            <img src={Delete} alt="Tombol Hapus"/></button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
        {showModalDelete && <ModalDelete closeModalDelete={setShowModalDelete} onSuccess={setRefreshData} deleteItem={deleteItem} nameItem={nameItem}/>}
    </>
    ); 
}