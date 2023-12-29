import { Head, usePage } from "@inertiajs/react";
import { Users, ShoppingCart, Hourglass } from "@phosphor-icons/react";
import LogoDashboard from "../../asset/logo-smkn7-smg.png";
import Sidebar from "@/Layouts/Sidebar";

const UsersPage = () => {
    const { auth } = usePage().props;
    return (
        <>
            <Head title="Users" />
            <div className="w-full h-screen flex bg-zinc-800">
                <Sidebar />
                <main className="flex-1 h-screen p-10 overflow-y-auto">
                    <h1 className="text-2xl font-bold text-white">Users</h1>
                    <section className="relative flex items-center justify-between py-20 mt-10 space-y-5 shadow-sm px-36 bg-white rounded-xl">
                        <h1>Hello</h1>
                    </section>
                </main>
            </div>
        </>
    );
};

export default UsersPage;
