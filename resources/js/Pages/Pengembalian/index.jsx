import Navbar from "@/Layouts/Navbar";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import Headroom from "react-headroom";

const Pengembalian = () => {
    const [isBorder, setBorder] = useState(false);
    const borderChange = () => {
        setBorder(window.scrollY > 110 ? true : false);
    };
    window.addEventListener("scroll", borderChange);
    return (
        <>
            <Head title="Pengembalian" />
            <div className="flex justify-center items-center h-screen bg-zinc-800">
                <Headroom>
                    <div
                        className={`bg-zinc-800 z-10 ${
                            isBorder ? "border-b-2 border-zinc-500" : ""
                        }`}
                    >
                        <Navbar />
                    </div>
                </Headroom>
                <h1 className="font-bold text-4xl text-zinc-400">
                    INI PENGEMBALIAN
                </h1>
            </div>
        </>
    );
};

export default Pengembalian;
