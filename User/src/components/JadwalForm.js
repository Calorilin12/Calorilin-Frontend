import React , {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import View from '../assets/img/view.png';
import Delete from '../assets/img/delete.png';
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

    const { id } = useParams();
    useEffect(() => {
        axios
            .get(FOOD_MATERIALS_FAVORITES + id, config)
            .then((res) => {
                console.log("masuk bro");
                console.log(res.data);
                setApiData(res.data);
            })
            .catch((err) => {
                console.log(err);
            }); 
    }, [refreshData]);

    return (
    <>
        <Card className="">
            <CardHeader color="green" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Jadwal Makan Anda</h2>
                </div>
            </CardHeader>
            <CardBody>
                <div className="bg-secondary500 w-48 h-8 rounded-2xl text-white font-semibold text-sm flex justify-center items-center">Total Kalori Hari Ini : {apiData.reduce((total, currentValue) => total = total + currentValue.calory,0)}</div><br/>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead className="bg-secondary100">
                            <tr>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-2 text-sm whitespace-nowrap font-light text-left">
                                    No
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-2 text-sm whitespace-nowrap font-light text-left">
                                    Waktu Makan
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
                                } else if(val.time_show.toLowerCase().includes(search.toLowerCase())){
                                    return val;
                                }
                            }).map((jadwal, index) =>
                                <tr key={jadwal.id}>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                        {index+1}
                                    </th>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                        {jadwal.time_show}
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
                                                setNameItem(jadwal.time_show);
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