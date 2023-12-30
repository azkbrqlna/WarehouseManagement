import SidebarButton from "@/Components/Fragments/SidebarButton";
import { Link, router } from "@inertiajs/react";
import { Archive, Gauge, SignOut, Users } from "@phosphor-icons/react";

const Sidebar = () => {
    const onLogOut = () => {
        router.visit("/logout");
    };
    return (
        <>
            <aside className="h-screen p-10 bg-white w-72 flex flex-col justify-between">
                <div className="space-y-5">
                    <SidebarButton value="Dashboard" icon={Gauge} href="/dashboard" />
                    <SidebarButton value="Request" icon={Archive} href="/request" />
                    <SidebarButton value="Users" icon={Users} href="/users" />
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
