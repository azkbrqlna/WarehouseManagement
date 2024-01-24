import SidebarButton from "@/Components/Fragments/SidebarButton";
import { router, usePage } from "@inertiajs/react";
import {
    Archive,
    Gauge,
    ListDashes,
    SignOut,
    Users,
} from "@phosphor-icons/react";

const Sidebar = () => {
    const { url } = usePage();

    const tabs = [
        { label: "Dashboard", icon: Gauge, href: "/dashboard" },
        { label: "Request", icon: Archive, href: ["/requests", "/request/return", "/request/rental"] },
        { label: "Users", icon: Users, href: ["/users", "/user/create"] },
        { label: "Barang", icon: ListDashes, href: ["/items", "/item/create"] },
    ];
    const onLogOut = () => {
        router.visit("/logout");
    };

    return (
        <>
            <aside className="h-screen p-10 bg-white w-64 2xl:w-72 flex flex-col justify-between">
                <div className="space-y-5">
                    {tabs.map((tab, index) => (
                        <SidebarButton
                            key={index}
                            value={tab.label}
                            icon={tab.icon}
                            href={tab.href}
                            isActive={url.startsWith(Array.isArray(tab.href) ? tab.href[0] : tab.href)}
                        />
                    ))}
                </div>
                <div>
                    <button
                        onClick={onLogOut}
                        className="flex w-full items-center gap-5 px-5 py-2 rounded-lg transition-all duration-300 hover:bg-red-100 border text-red-500 border-red-500"
                    >
                        <SignOut size={24} />
                        <span className="text-xl">Logout</span>
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
