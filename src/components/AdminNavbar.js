import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import Image from '@material-tailwind/react/Image';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import ProfilePicture from 'assets/img/team-1-800x800.jpg';
import Setting from '../assets/img/settings.png';
import {Link} from "react-router-dom";

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
    const location = useLocation().pathname;

    return (
        <nav className="bg-white md:ml-80 py-6 px-3">
            <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
                <div className="md:hidden">
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        iconOnly
                        rounded
                        ripple="light"
                        onClick={() => setShowSidebar('left-0')}
                    >
                        <Icon name="menu" size="2xl" color="black" />
                    </Button>
                    <div
                        className={`absolute top-2 md:hidden ${
                            showSidebar === 'left-0' ? 'left-64' : '-left-64'
                        } z-50 transition-all duration-300`}
                    >
                        <Button
                            color="transparent"
                            buttonType="link"
                            size="lg"
                            iconOnly
                            rounded
                            ripple="light"
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            <Icon name="close" size="2xl" color="white" />
                        </Button>
                    </div>
                </div>

                <div className=" w-full flex">
                        <input type="text" className="w-44 rounded-md py-3 px-6 h-10 pl-5 focus:outline-none border lg:w-3/6" placeholder="Search..." />
                        <div className="rounded-full bg-blue ml-16 lg:ml-80 w-28">
                        <Dropdown
                                color="lightGreen"
                                buttonType="outline"
                                buttonText={
                                    <div className="flex space-x-3">
                                        <Image src={ProfilePicture} rounded className="ml-2 w-8"/>
                                        <Image src={Setting} rounded className="w-8"/>
                                    </div>
                                }
                                rounded
                                style={{
                                    padding: 3,
                                }}
                            >
                                <DropdownItem color="gray" ripple="light">
                                    <Link className="logout w-full" to="/">Logout</Link>
                                </DropdownItem>
                            </Dropdown>                               
                        </div>
                </div>
            </div>
        </nav>
    );
}
