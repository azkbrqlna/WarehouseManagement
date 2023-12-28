import { Head, Link } from "@inertiajs/react";
import { Archive, Gauge, Users, SignOut, ShoppingCart, Hourglass } from "@phosphor-icons/react";
import LogoDashboard from "../../asset/logo-smkn7-smg.png";
import Sidebar from "@/Layouts/Sidebar";
import OverviewCard from "@/Components/Fragments/OverviewCard";

const Dashboard = () => {
    return (
        <>
            <Head title="Dashboard" />
            <div className="w-full h-screen flex bg-zinc-800">
                <Sidebar />
                <main className="flex-1 h-screen p-10 overflow-y-auto">
                    <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                    <section className="relative flex items-center justify-between py-20 mt-10 space-y-2 shadow-sm px-36 bg-white rounded-xl">
                        <div>
                            <h3 className="text-2xl ">
                                <span className="font-semibold">
                                    Selamat datang
                                </span>{" "}
                                <span className="font-bold">Admin</span> 👋
                            </h3>
                            <p>
                                Ayo mulai kelola setiap hal yang ada, dan jangan
                                lupa untuk selalu jaga kesehatan!
                            </p>
                        </div>
                        <div className="absolute bottom-10 right-40 w-40">
                            <img
                                src={LogoDashboard}
                                className="object-cover"
                                width={300}
                                alt="Painting Manage"
                            />
                        </div>
                    </section>
                    <section className="grid grid-flow-col gap-5 mt-10">
                        <OverviewCard title="Total Barang" value="34" icon={ShoppingCart} />
                        <OverviewCard title="Total Request" value="11" icon={Hourglass} />
                        <OverviewCard title="Total Users" value="101" icon={Users} />
                    </section>
                </main>
            </div>
        </>
    );
};

export default Dashboard;
