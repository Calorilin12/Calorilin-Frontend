import React from 'react';
import Sidebar from 'components/Sidebar';
import Icon from '@material-tailwind/react/Icon';

function Dashboard() {
    return (
        <>
            <Sidebar />
            <div className="content p-5 bg-secondary100 rounded-xl shadow-xl ml-5 mr-5 md:ml-80 mr-7 bg-olive">
                    <div className="div1 p-7 bg-netral100 rounded-xl shadow-xl">
                        <div className="divContent space-y-1">
                            <Icon name="groups" size="3xl"/>
                            <h6 className="text-3xl text-primary500">2.500</h6>
                            <h6 className="text-sm text-secondary500">Total Pengguna Aplikasi</h6>
                        </div>
                    </div>
                    <div className="div2 p-7 bg-primary100 rounded-xl shadow-xl">
                        <div className="divContent space-y-1">
                            <Icon name="paid" size="3xl"/>
                            <h6 className="text-3xl text-sm text-primary500">$600.0000</h6>
                            <h6 className="text-sm text-secondary500">Total Pengguna Aplikasi</h6>
                        </div>
                    </div>
                    <div className="div3 bg-success300 rounded-xl shadow-xl">
                        <div className="flex space-x-2">
                            <div className="ikon">
                                <Icon name="storage" size="2xl"/>
                            </div>
                            <div className="mt-4">
                                <h6 className="text-md text-netral500">12.000</h6>
                                <h6 className="text-sm text-secondary500">Database Kalori</h6>
                            </div>
                        </div>
                    </div>
                    <div className="div4 bg-white rounded-xl shadow-xl">
                        <div className="flex space-x-2">
                            <div className="ikon">
                                <Icon name="restaurant" size="2xl"/>
                            </div>
                            <div className="mt-4">
                                <h6 className="text-md text-netral500">12.000</h6>
                                <h6 className="text-sm text-secondary500">Resep Makanan</h6>
                            </div>
                        </div>
                    </div>
                    <div className="div5 p-6 bg-netral100 rounded-xl shadow-xl">
                        <h6 className="text-xl text-netral500 mb-3">Transaksi Berlangganan</h6>
                        <div className="tabel">
                            <table className="items-center w-full bg-transparent border-collapse">
                                <thead className="bg-secondary100">
                                    <tr>
                                        <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-2 text-sm whitespace-nowrap font-light text-left">
                                            No
                                        </th>
                                        <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-2 text-sm whitespace-nowrap font-light text-left">
                                            ID
                                        </th>
                                        <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-2 text-sm whitespace-nowrap font-light text-left">
                                            Nama Pengguna
                                        </th>
                                        <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-2 text-sm whitespace-nowrap font-light text-left">
                                            Tanggal
                                        </th>
                                        <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-2 text-sm whitespace-nowrap font-light text-left">
                                            Verifikasi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr>
                                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            001
                                        </th>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            001
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            Stefanus Irgy
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            22/2/2021
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            -
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            001
                                        </th>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            001
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            Stefanus Irgy
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            22/2/2021
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            -
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            001
                                        </th>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            001
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            Stefanus Irgy
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            22/2/2021
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            -
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            001
                                        </th>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            001
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            Stefanus Irgy
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            22/2/2021
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            -
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            001
                                        </th>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            001
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            Stefanus Irgy
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            22/2/2021
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                            -
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default Dashboard;