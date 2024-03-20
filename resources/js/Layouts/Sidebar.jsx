import SidebarButton from "@/Components/Fragments/SidebarButton";
import { Link, router, usePage } from "@inertiajs/react";
import { House, NotePencil, Package, SignOut, Users } from "@phosphor-icons/react";
import Logo from "../../asset/profile-image.png";
import { useState, useEffect } from "react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { url } = usePage();
    const onLogOut = () => {
        router.visit("/logout");
    };

    useEffect(() => {
        if (url === "/request/rental" || url === "/request/return" || url === "/request/pickup") {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [url]);

    return (
        <>
            <aside className="h-screen p-5 pb-20 bg-secondary w-56 2xl:w-72 flex flex-col justify-between">
                <div className="space-y-5">
                    <div className="flex items-center gap-3 px-3 py-2">
                        <div className="w-7 overflow-hidden rounded-full">
                            <img src={Logo} alt="logo" />
                        </div>
                        <h1 className="text-lg font-bold text-white">Admin</h1>
                    </div>
                    <div className="space-y-3">
                        <SidebarButton
                            value="Dashboard"
                            icon={House}
                            href="/dashboard"
                        />
                        <div>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`flex flex-col min-w-full group gap-5 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-hover_secondary ${
                                    isOpen && "bg-hover_secondary"
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <NotePencil size={20} color="#fff" />
                                    <div className="flex items-center text-white justify-between w-full">
                                        <span className="text-white text-sm">
                                            Requests
                                        </span>
                                        <svg
                                            className={`w-4 h-4 transition-all duration-100 ease-in ${
                                                isOpen
                                                    ? "transform rotate-180"
                                                    : ""
                                            }`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                {isOpen && (
                                    <div className="rounded-lg transition-all duration-200 ease-in-out">
                                        <Link
                                            href="/request/rental"
                                            className={`text-white px-3 py-2 flex text-xs rounded-lg hover:bg-secondary transition-all duration-200 ease-in-out ${
                                                url === "/request/rental"
                                                    ? "bg-secondary"
                                                    : ""
                                            }`}
                                        >
                                            <span>Borrow</span>
                                        </Link>
                                        <Link
                                            href="/request/pickup"
                                            className={`text-white px-3 py-2 flex text-xs rounded-lg hover:bg-secondary transition-all duration-200 ease-in-out ${
                                                url === "/request/pickup"
                                                    ? "bg-secondary"
                                                    : ""
                                            }`}
                                        >
                                            <span>Pick Up</span>
                                        </Link>
                                        <Link
                                            href="/request/return"
                                            className={`text-white px-3 py-2 flex text-xs rounded-lg hover:bg-secondary transition-all duration-200 ease-in-out ${
                                                url === "/request/return"
                                                    ? "bg-secondary"
                                                    : ""
                                            }`}
                                        >
                                            <span>Return</span>
                                        </Link>
                                    </div>
                                )}
                            </button>
                        </div>
                        <SidebarButton
                            value="Users"
                            icon={Users}
                            href="/users"
                        />
                        <SidebarButton
                            value="Items"
                            icon={Package}
                            href="/items"
                        />
                    </div>
                </div>
                <div>
                    <button
                        onClick={onLogOut}
                        className="flex w-full justify-center items-center gap-2 px-5 py-2 rounded-lg transition-all duration-300 hover:bg-red-100 border text-red-500 border-red-500"
                    >
                        <SignOut size={18} />
                        <span className="text-base">Logout</span>
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
