import { Head } from "@inertiajs/react";
import Sidebar from "./Sidebar";

export default function Dashboardlayout({ children, title }) {
    return (
        <>
            <Head title={title} />
            <div className="w-full h-screen flex bg-zinc-800">
                <Sidebar />
                <main className="flex-1 h-screen p-10 overflow-y-auto">
                    <h1 className="text-2xl font-bold text-white">{title}</h1>
                    {children}
                </main>
            </div>
        </>
    );
}
