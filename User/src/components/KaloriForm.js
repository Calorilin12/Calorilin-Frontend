import React , {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import '../assets/styles/components.css';
import Search from 'assets/img/search-grey.png';
import { BASE_URL, FOOD_MATERIALS } from 'utils/url';
import { getToken } from 'utils/auth'
import axios from 'axios';

export default function KaloriForm() {
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
    }, []);

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
        <Card className="bg-gray-100">
            <CardHeader color="green" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Kalori Bahan Makanan</h2>
                </div>
            </CardHeader>
                <div className="flex flex-row items-center justify-between">
                    <div className="ml-11">
                        <div className="absolute ml-4 mt-11">
                            <img src={Search} alt="Icon Search" className="w-4 h-4"/>
                        </div>
                        <div className="items-end mt-8 mb-1 mr-14"> 
                            <input class="border-2 border-gray-300 bg-white h-10 pl-10 w-56 rounded-lg text-sm focus:outline-none"
                                    type="search" name="search" placeholder="Cari Bahan Makanan" onChange = {(e) => { setSearch(e.target.value); }}>
                            </input>
                        </div>
                    </div>
                    <div className="mt-8 mr-11">
                        <select className="option bg-secondary500 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 rounded-lg w-full h-9">
                            <option onClick={sortTerlama}>Data Terlama</option>
                            <option onClick={sortTerbaru}>Data Terbaru</option>
                            <option onClick={sortAsc}>Nama Bahan A-Z</option>
                            <option onClick={sortDesc}>Nama Bahan Z-A</option>
                        </select>
                    </div>
                </div>
            <CardBody>
                <div className="relative flex flex-wrap justify-center bg-gray-100">
                    {apiData.filter(val => {
                        if(search === ''){
                            return val;
                        } else if(val.name.toLowerCase().includes(search.toLowerCase())){
                            return val;
                        }
                        }).map(materials =>
                        <Link key={materials.id} class="cards w-72 bg-white shadow-md rounded-xl p-2 mx-3 my-5"  to={`/lihat-kalori-makanan/${materials.id}`}>
                            <div className="overflow-x-hidden rounded-xl relative">
                                <img src={`${BASE_URL}/food-material-images/${materials.image}`} alt={materials.name} className="h-40 rounded-xl w-full object-cover"/>
                            </div>
                            <div className="mt-4 pl-3 pr-3 mb-2">
                                <p className="text-lg font-semibold text-gray-900 mb-0">{materials.name}</p>
                                <div className="flex justify-between">
                                    <p className="text-md text-gray-800 mt-0">{materials.serve}</p>
                                    <p className="text-md text-gray-800 mt-0">{materials.calory} kkal</p>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </CardBody>
        </Card>
        </>
    );
}