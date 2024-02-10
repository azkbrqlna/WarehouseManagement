import SidebarButton from "@/Components/Fragments/SidebarButton";
import { router, usePage } from "@inertiajs/react";
import {
    ClockCounterClockwise,
    House,
    NotePencil,
    Package,
    SignOut,
    Users,
} from "@phosphor-icons/react";
import Logo from "../../asset/profile-image.png";

const Sidebar = () => {
    const { url } = usePage();

    const tabs = [
        { label: "Dashboard", icon: House, href: "/dashboard" },
        {
            label: "Request",
            icon: NotePencil,
            href: ["/requests", "/request/return", "/request/rental"],
        },
        { label: "Users", icon: Users, href: ["/users", "/user/create"] },
        { label: "Barang", icon: Package, href: ["/items", "/item/create"] },
    ];
    const onLogOut = () => {
        router.visit("/logout");
    };

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
                        {tabs.map((tab, index) => (
                            <SidebarButton
                                key={index}
                                value={tab.label}
                                icon={tab.icon}
                                href={tab.href}
                                isActive={url.startsWith(
                                    Array.isArray(tab.href)
                                        ? tab.href[0]
                                        : tab.href
                                )}
                            />
                        ))}
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
