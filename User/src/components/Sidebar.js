import React from 'react';
import { useState } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import { getID, logout } from "utils/auth";
import Icon from '@material-tailwind/react/Icon';
import Logo from '../assets/img/logo-fix.png'

export default function Sidebar() {
    const history = useHistory();
    const _onLogout = () => {
        logout();
        history.replace("/");
    };
    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div
                className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <div className="flex ml-2">
                        <img className="h-11 w-11" src={Logo} alt="Logo Calorilin"/>
                        <h1 className="p-2 text-center text-netral500 text-2xl">Calorilin</h1>
                    </div>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full mb-4" />

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/dashboard"
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-primary500 text-white shadow-md"
                                >
                                    <Icon name="home" size="2xl" />
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 ">
                                <NavLink
                                    to={`/jadwal-makan/${getID()}`}
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-primary500 text-white shadow-md"
                                >
                                    <Icon name="toc" size="2xl" />
                                    Jadwal Makan
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/resep-makanan"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-primary500 text-white shadow-md"
                                >
                                    <Icon name="map" size="2xl" />
                                    Resep Makanan
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/kalori-makanan"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-primary500 text-white shadow-md"
                                >
                                    <Icon name="restaurant" size="2xl" />
                                    Kalori Bahan
                                </NavLink>
                            </li>
                        </ul>

                        <ul className="flex-col min-w-full flex list-none absolute bottom-0">
                            <li className="rounded-lg text-white">
                                <Link
                                    onClick={_onLogout}
                                    className="flex bg-warning500 focus:ring focus:ring-red-200 items-center gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                                >
                                    <Icon name="logout" size="2xl" />
                                    Keluar
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
