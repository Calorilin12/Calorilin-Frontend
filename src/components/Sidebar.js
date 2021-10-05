import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import Icon from '@material-tailwind/react/Icon';
import Logo from '../assets/img/logo-fix.png';

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-80');
    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div
                className={`h-screen fixed top-2 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden bg-white w-72 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <div className="flex">   
                        <img className="h-11 w-11" src={Logo} alt="Logo Calorilin"/>
                        <h1 className="p-2 text-center text-green text-2xl">Calorilin</h1>
                    </div>
                    <div className="flex flex-col mt-9">
                        <ul className="flex-col min-w-full flex list-none">
                        <h5 className="text-md">Dashboard</h5>
                            <li className="mt-4 rounded-lg">
                                <NavLink
                                    to="/dashboard"
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-2 rounded-lg"
                                    activeClassName="bg-primary100 shadow-md"
                                >
                                    <Icon name="home" size="2xl" />
                                    Dashboard
                                </NavLink>
                            </li>
                            <hr className="my-4 min-w-full" />
                            <h5 className="text-md">Pengguna</h5>
                            <li className="rounded-lg mt-4 mb-2">
                                <NavLink
                                    to="/data-pengguna"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-2 rounded-lg"
                                    activeClassName="bg-primary100 shadow-md"
                                >
                                    <Icon name="person" size="2xl" />
                                    Data Pengguna
                                </NavLink>
                            </li>
                            <li className="rounded-lg ">
                                <NavLink
                                    to="/jadwal-makan"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-2 rounded-lg"
                                    activeClassName="bg-primary100 shadow-md"
                                >
                                    <Icon name="schedule" size="2xl" />
                                    Jadwal Makan
                                </NavLink>
                            </li>
                            <hr className="my-4 min-w-full" />
                            <h5 className="text-md">Resep Makanan</h5>
                            <li className="rounded-lg mt-4 mb-2 text-gray-700">
                                <NavLink
                                    to="/resep-makanan"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-2 rounded-lg"
                                    activeClassName="bg-primary100 shadow-md"
                                >
                                    <Icon name="book" size="2xl" />
                                    Resep Makanan
                                </NavLink>
                            </li>
                            <li className="rounded-lg text-gray-700">
                                <NavLink
                                    to="/kalori-makanan"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-2 rounded-lg"
                                    activeClassName="bg-primary100 shadow-md"
                                >
                                    <Icon name="restaurant" size="2xl" />
                                    Kalori Makanan
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
