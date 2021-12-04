import React , {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import View from '../assets/img/view.png';
import Delete from '../assets/img/delete.png';
import ModalDelete from './ModalPenggunaDelete';
import { USERS } from 'utils/url';
import { getToken } from 'utils/auth';
import Search from 'assets/img/search-grey.png';
import axios from 'axios';

export default function PenggunaForm() {
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
            .get(USERS, config)
            .then((res) => {
                console.log(res.data);
                setApiData(res.data);
                console.log(apiData)
            })
            .catch((err) => {
                console.log(err);
            }); 
    },  [refreshData]);
    return (
        <> 
            <Card>
                <CardHeader color="green" contentPosition="none">
                    <div className="w-full flex items-center justify-between">
                        <h2 className="text-white text-2xl">Data Pengguna Aplikasi</h2>
                    </div>
                </CardHeader>
                <div className="flex flex-row justify-end">
                    <div className="absolute mr-52 mt-11">
                        <img src={Search} alt="Icon Search" className="w-4 h-4"/>
                    </div>
                    <div className="items-end mt-8 mb-1 mr-4"> 
                        <input class="border-2 border-gray-300 bg-white h-10 pl-10 w-56 rounded-lg text-sm focus:outline-none"
                                type="search" name="search" placeholder="Search" onChange = {(e) => { setSearch(e.target.value); }}>
                        </input>
                    </div>
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
                                        Nama
                                    </th>
                                    <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-2 text-sm whitespace-nowrap font-light text-left">
                                        Email
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
                                }).map(user =>
                                    <tr key={user.id}>
                                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            {user.id}
                                        </th>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            {user.name}
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            {user.email}
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            <div className="flex flex-col space-y-2 lg:space-x-4 lg:flex-row lg:items-end">
                                                <Link className="" to={`/lihat-pengguna/${user.id}`}><img src={View} alt="Tombol Lihat"/></Link>
                                                {/* <button className="" onClick={() => setShowModalDelete(true)}><img src={Delete} alt="Tombol Hapus"/></button> */}
                                                <button className="" 
                                                    onClick={() => {
                                                        setShowModalDelete(true);
                                                        setDeleteItem(user.id);
                                                        setNameItem(user.name);
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