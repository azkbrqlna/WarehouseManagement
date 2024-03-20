import Navbar from "@/Layouts/Navbar";
import { Head } from "@inertiajs/react";
import React from "react";
import { useState } from "react";
import Headroom from "react-headroom";
import {
    Backpack,
    Check,
    ShoppingBag,
    ShoppingCart,
} from "@phosphor-icons/react";
import { CloseButton } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import {
    formatDateMonth,
    formatDateMonthYear,
} from "@/Components/Fragments/ListStyle";

export default function Riwayat({
    rental_count,
    return_count,
    initial,
    logs,
    auth,
}) {
    const [isBorder, setBorder] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("riwayat");
    const [selectedData, setSelectedData] = useState(null);
    const borderChange = () => {
        setBorder(window.scrollY > 110 ? true : false);
    };
    window.addEventListener("scroll", borderChange);
    const history = logs.filter(
        (log) =>
            auth.user.id === log.user.id && log.photo && log.actual_return_date
    );
    const process = logs.filter(
        (log) =>
            auth.user.id === log.user.id &&
            !log.photo &&
            !log.actual_return_date
    );
    const activeData = activeTab === "riwayat" ? history : process;

    const handleDetailClick = (data) => {
        setSelectedData(data);
        setOpen(true);
    };

    console.log(process);
    return (
        <>
            <Head title="Riwayat" />
            <div className="bg-azka min-h-screen min-w-full">
                <Headroom>
                    <div
                        className={`bg-azka z-10 ${
                            isBorder ? "border-b-2 border-border_azka" : ""
                        }`}
                    >
                        <Navbar
                            peminjaman={rental_count}
                            pengembalian={return_count}
                            initial={initial}
                        />
                    </div>
                </Headroom>
                <nav className="px-5 mb-4">
                    <ul className="flex flex-wrap text-sm font-medium text-center text-white mb-3">
                        <li className="me-2">
                            <button
                                className={`p-4 rounded-t-lg hover:text-gray-300 ${
                                    activeTab === "riwayat"
                                        ? "border-b-2 border-white"
                                        : ""
                                }`}
                                onClick={() => setActiveTab("riwayat")}
                            >
                                Riwayat
                            </button>
                        </li>
                        <li className="me-2">
                            <button
                                className={`p-4 rounded-t-lg hover:text-gray-300 ${
                                    activeTab === "dalamPeminjaman"
                                        ? "border-b-2 border-white"
                                        : ""
                                }`}
                                onClick={() => setActiveTab("dalamPeminjaman")}
                            >
                                Dalam Peminjaman
                            </button>
                        </li>
                    </ul>
                    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-10">
                        {activeData.map((data, index) => {
                            const currentDate = new Date();
                            const returnDate = new Date(
                                data.actual_return_date
                            );
                            const diffTime =
                                currentDate.getTime() - returnDate.getTime();
                            const diffDay = Math.ceil(
                                diffTime / (1000 * 3600 * 24)
                            );
                            if (data.actual_return_date && diffDay > 25) {
                                return null;
                            }
                            return (
                                <div className="text-white" key={index}>
                                    <div className="border-b p-2">
                                        <span
                                            className={`font-semibold ${
                                                !data.actual_return_date &&
                                                "hidden"
                                            }`}
                                            id="tanggal"
                                        >
                                            {formatDateMonth(
                                                data.actual_return_date
                                            )}
                                        </span>
                                        <div className="flex gap-2">
                                            <figure
                                                className={`w-24 overflow-hidden rounded-lg ${
                                                    !data.photo && "hidden"
                                                }`}
                                            >
                                                <img
                                                    className="w-full h-full object-cover"
                                                    src={`/storage/photos/${data.photo}`}
                                                />
                                            </figure>
                                            <div className="px-1 grow space-y-2">
                                                <h1
                                                    className="font-bold truncate"
                                                    id="nama"
                                                >
                                                    {data.item.name}
                                                </h1>
                                                {activeTab === "riwayat" ? (
                                                    <div className="flex gap-1 items-center">
                                                        <span className="rounded-full bg-green-500 text-white flex items-center justify-center p-1 text-xs">
                                                            <Check />
                                                        </span>
                                                        <p
                                                            className="text-sm font-medium"
                                                            id="status"
                                                        >
                                                            Peminjaman sudah
                                                            selesai
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <div className="flex gap-1 items-center">
                                                        <p>
                                                            Sedang dipinjam . .
                                                            .
                                                        </p>
                                                    </div>
                                                )}
                                                <button
                                                    className={`px-10 py-1 bg-blue-500 rounded-lg ${
                                                        !data.actual_return_date &&
                                                        "hidden"
                                                    }`}
                                                    onClick={() =>
                                                        handleDetailClick(data)
                                                    }
                                                >
                                                    Detail
                                                </button>
                                            </div>
                                            <div
                                                className={`px-2 grow ${
                                                    !data.actual_return_date &&
                                                    "text-right"
                                                }`}
                                                id="qty"
                                            >
                                                {data.actual_return_date ? (
                                                    <h1 className="text-4xl relative">
                                                        <span className="absolute right-3 rounded-full px-[6px] bg-border_azka text-white text-sm">
                                                            {data.amount_rental}
                                                        </span>
                                                        <ShoppingCart />
                                                    </h1>
                                                ) : (
                                                    <h1 className="text-xl">
                                                        {data.amount_rental}
                                                    </h1>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </nav>
            </div>
            <AnimatePresence>
                {isOpen && selectedData && (
                    <motion.div
                        className="fixed bottom-0 left-0 w-full h-5/6 bg-white z-50 overflow-y-auto rounded-t-2xl"
                        key="info"
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: 50,
                        }}
                    >
                        <header className="flex justify-between px-5 py-4">
                            <h1 className="font-bold text-2xl text-black">
                                Riwayat Peminjaman
                            </h1>
                            <CloseButton
                                size="lg"
                                onClick={() => setOpen(false)}
                            />
                        </header>
                        <main className="py-2 px-3">
                            <figure className="w-40 overflow-hidden rounded-lg border mx-auto mb-10">
                                <img
                                    className="w-full h-full object-cover"
                                    src={`/storage/photos/${selectedData.photo}`}
                                />
                            </figure>
                            <div className="flex justify-between text-xl border-b border-gray-400">
                                <h1 className="font-bold">
                                    {selectedData.item.name}
                                </h1>
                                {selectedData.photo &&
                                    selectedData.actual_return_date && (
                                        <h1 className="font-medium">
                                            {formatDateMonth(
                                                selectedData.actual_return_date
                                            )}
                                        </h1>
                                    )}
                            </div>
                            <div className="py-4 space-y-5 border-b border-gray-400">
                                <h1 className="text-xl font-bold">
                                    Detail Peminjaman
                                </h1>
                                <div className="flex">
                                    <div className="font-semibold space-y-3 w-[35%]">
                                        <h2>Peminjaman</h2>
                                        <h2>Pengembalian</h2>
                                        <h2>Alasan</h2>
                                    </div>
                                    <div className="space-y-3 w-[65%]">
                                        <h2>
                                            {formatDateMonthYear(
                                                selectedData.rent_date
                                            )}
                                        </h2>
                                        {selectedData.photo &&
                                            selectedData.actual_return_date && (
                                                <h2>
                                                    {formatDateMonthYear(
                                                        selectedData.actual_return_date
                                                    )}
                                                </h2>
                                            )}
                                        <h2 className="truncate">
                                            {selectedData.reason}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
