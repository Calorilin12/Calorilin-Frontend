import React , {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import View from '../assets/img/view.png';
import Delete from '../assets/img/delete.png';
import ModalDelete from './ModalJadwalDelete';
import { FOOD_MATERIALS_FAVORITES } from 'utils/url';
import { getToken } from 'utils/auth'
import axios from 'axios';

export default function JadwalForm() {
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [apiData, setApiData] = useState([]);
    const config = {
        headers: { Authorization: `Bearer ${getToken()}` }
    };
    useEffect(() => {
        axios
            .get(FOOD_MATERIALS_FAVORITES, config)
            .then((res) => {
                console.log(res.data);
                setApiData(res.data);
            })
            .catch((err) => {
                console.log(err);
            }); 
    }, []);
    return (
    <>
        <Card>
            <CardHeader color="green" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Jadwal Makan Pengguna</h2>
                </div>
            </CardHeader>
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
                            {apiData.map(jadwal =>
                                <tr>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                        {jadwal.id}
                                    </th>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                        {jadwal.name}
                                    </td>
                                    {/* <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                        <ul>
                                            <li>Roti</li>
                                            <li>Susu</li>
                                            <li>Telur</li>
                                        </ul> 
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                        1530 Kcal
                                    </td> */}
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                        <div className="flex flex-col space-y-2 lg:space-x-4 lg:flex-row lg:items-end">
                                            <Link className="" to="/lihat-jadwal"><img src={View} alt="Tombol Lihat"/></Link>
                                            <button className="" onClick={() => setShowModalDelete(true)}><img src={Delete} alt="Tombol Hapus"/></button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
        {showModalDelete && <ModalDelete closeModalDelete={setShowModalDelete}/>}
    </>
    );
}