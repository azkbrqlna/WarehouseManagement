import { Head } from "@inertiajs/react";
import Sidebar from "./Sidebar";

export default function Dashboardlayout({ children, title }) {
    return (
        <>
            <Head title={title} />
            <div className="w-full h-screen flex bg-main">
                <Sidebar />
                <main className="w-full min-h-full bg-main px-8 py-6 overflow-y-auto">
                    <h1 className="font-bold text-2xl">{title}</h1>
                    {children}
                </main>
            </div>
        </>
    );
}
