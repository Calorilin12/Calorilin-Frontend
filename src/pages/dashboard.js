import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import StatusCard from 'components/StatusCard';
import BerlanggananForm from 'components/BerlanggananForm';

export default function Dashboard() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <div className="bg-primary500 pt-14 pb-28 px-3 md:px-8 h-auto">
                    <div className="container mx-auto max-w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                                <StatusCard
                                    color="pink"
                                    icon="trending_up"
                                    title="Pengguna"
                                    amount="2.350"
                                    percentage="15"
                                    percentageIcon="arrow_upward"
                                    percentageColor="green"
                                    date="Hari ini"
                                />
                                <StatusCard
                                    color="orange"
                                    icon="groups"
                                    title="Pendapatan"
                                    amount="$600.000"
                                    percentage="250.000"
                                    percentageIcon="arrow_upward"
                                    percentageColor="green"
                                    date="Hari ini"
                                />
                                <StatusCard
                                    color="purple"
                                    icon="paid"
                                    title="Data Kalori"
                                    amount="1.100"
                                    percentage="35"
                                    percentageIcon="arrow_upward"
                                    percentageColor="green"
                                    date="Hari ini"
                                />
                                <StatusCard
                                    color="blue"
                                    icon="poll"
                                    title="Data Resep"
                                    amount="456"
                                    percentage="3"
                                    percentageIcon="arrow_downward"
                                    percentageColor="red"
                                    date="Hari ini"
                                />
                        </div>
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
