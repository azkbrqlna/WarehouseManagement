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
        { label: "Request", icon: Archive, href: "/requests" },
        { label: "Users", icon: Users, href: "/users" },
        { label: "Barang", icon: ListDashes, href: "/items" },
    ];
    const onLogOut = () => {
        router.visit("/logout");
    };

    return (
        <>
            <aside className="h-screen p-10 bg-white w-64 2xl:w-72 flex flex-col justify-between">
                <div className="space-y-5">
                    {tabs.map((tab) => (
                        <SidebarButton
                            key={tab.href}
                            value={tab.label}
                            icon={tab.icon}
                            href={tab.href}
                            isActive={url === tab.href}
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
