import React from 'react';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import ResepForm from 'components/ResepForm';

export default function resepMakanan() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <div className="bg-primary500 px-3 md:px-8 h-40" />
                <div className="px-3 md:px-8 -mt-24">
                    <div className="container mx-auto max-w-full">
                        <div className="grid grid-cols-1">
                            <ResepForm />
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}
