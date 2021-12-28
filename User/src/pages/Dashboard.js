import React from 'react';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import StatusCard from 'components/StatusCard';

export default function Dashboard() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <div className="bg-primary500 pt-8 pb-20 px-3 md:px-8 h-auto">
                    <div className="container mx-auto max-w-full">
                        <StatusCard />
                    </div>
                </div>
            </div>
        </>
    );
}
