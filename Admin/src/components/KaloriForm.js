import React , {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import KaloriList from './KaloriList';
import KaloriPagination from './KaloriPagination';
import Search from 'assets/img/search-grey.png';
import { FOOD_MATERIALS } from 'utils/url';
import { getToken } from 'utils/auth'
import axios from 'axios';

export default function KaloriForm() {
    const [refreshData, setRefreshData] = useState(0);
    const [search, setSearch] = useState("");
    const [apiData, setApiData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

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

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = apiData.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
        <Card>
            <CardHeader color="green" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Kalori Bahan Makanan</h2>
                </div>
            </CardHeader>
            <div className="flex flex-row justify-between items-center">
                <div className="mt-8 mb-1 ml-4"> 
                    <Link
                        to="/tambah-kalori-makanan"
                        className="flex bg-info500 focus:ring focus:ring-blue-200 items-center justify-center gap-4 text-sm text-white font-light px-4 py-2 rounded-lg w-32"
                    >
                        Tambah Data
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
                <KaloriList apiData={currentPosts} search={search} refreshData={setRefreshData} />
            </CardBody>
            <KaloriPagination
                postsPerPage={postsPerPage}
                totalPosts={apiData.length}
                paginate={paginate}
            />
        </Card>
        </>
    );
}