import React , {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import View from '../assets/img/view.png';
import Delete from '../assets/img/delete.png';
import Search from 'assets/img/search-grey.png';
import ModalDelete from './ModalJadwalDelete';
import { FOOD_MATERIALS_FAVORITES } from 'utils/url';
import { getToken } from 'utils/auth';
import axios from 'axios';

export default function JadwalForm() {
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [deleteItem, setDeleteItem] = useState();
    const [nameItem, setNameItem] = useState();
    const [nameFood, setNameFood] = useState();
    const [apiData, setApiData] = useState([]);
    const [search, setSearch] = useState("");
    const [refreshData, setRefreshData] = useState(0);
    const config = {
        headers: { Authorization: `Bearer ${getToken()}` }
    };
    useEffect(() => {
        axios
            .get(FOOD_MATERIALS_FAVORITES, config)
            .then((res) => {
                console.log("masuk bro");
                console.log(res.data.data);
                setApiData(res.data.data);
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
            return a.username.localeCompare(b.username);
        });
        setApiData(sorted);
    }

    const sortDesc = () => {
        const sorted = [...apiData].sort((a, b) => {
            return b.username.localeCompare(a.username);
        });
        setApiData(sorted);
    }
    return (
    <>
        <Card>
            <CardHeader color="green" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Jadwal Makan Pengguna</h2>
                </div>
            </CardHeader>
            <div className="flex flex-row items-center justify-between">
                <div className="ml-4">
                    <div className="absolute ml-4 mt-11">
                        <img src={Search} alt="Icon Search" className="w-4 h-4"/>
                    </div>
                    <div className="items-end mt-8 mb-1 mr-4"> 
                        <input class="border-2 border-gray-300 bg-white h-10 pl-10 w-56 rounded-lg text-sm focus:outline-none"
                                type="search" name="search" placeholder="Search" onChange = {(e) => { setSearch(e.target.value); }}>
                        </input>
                    </div>
                </div>
                <div className="mt-8 mr-4">
                    <select className="option bg-secondary500 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 rounded-lg w-full h-9">
                        <option onClick={sortTerlama}>Data Terlama</option>
                        <option onClick={sortTerbaru}>Data Terbaru</option>
                        <option onClick={sortAsc}>Nama Pengguna A-Z</option>
                        <option onClick={sortDesc}>Nama Pengguna Z-A</option>
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
                                    Nama
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-2 text-sm whitespace-nowrap font-light text-left">
                                    Menu Pilihan
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-2 text-sm whitespace-nowrap font-light text-left">
                                    Total Kalori
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
                                } else if(val.username.toLowerCase().includes(search.toLowerCase())){
                                    return val;
                                }
                            }).map((jadwal, index) =>
                                <tr key={jadwal.id}>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                        {index+1}
                                    </th>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                        {jadwal.username}
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                        {jadwal.name}
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                        {jadwal.calory}
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                        <div className="flex flex-col space-y-2 lg:space-x-4 lg:flex-row lg:items-end">
                                            <Link className="" to={`/lihat-jadwal/${jadwal.id}`}><img src={View} alt="Tombol Lihat"/></Link>
                                            <button className="" 
                                            onClick={() => {
                                                setShowModalDelete(true);
                                                setDeleteItem(jadwal.id);
                                                setNameItem(jadwal.username);
                                                setNameFood(jadwal.name);
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
        {showModalDelete && <ModalDelete closeModalDelete={setShowModalDelete} onSuccess={setRefreshData} deleteItem={deleteItem} nameItem={nameItem} nameFood={nameFood}/>}
    </>
    );
}