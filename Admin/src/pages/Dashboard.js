import React from 'react';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import StatusCard from 'components/StatusCard';
import BerlanggananForm from 'components/BerlanggananForm';

export default function Dashboard() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <div className="bg-primary500 pt-8 pb-44 px-3 md:px-8 h-auto">
                    <div className="container mx-auto max-w-full">
                        <StatusCard />
                    </div>
                </div>

                <div className="px-3 md:px-8 h-auto -mt-24">
                    <div className="container mx-auto max-w-full">
                        <div className="grid grid-cols-1">
                            <BerlanggananForm />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
