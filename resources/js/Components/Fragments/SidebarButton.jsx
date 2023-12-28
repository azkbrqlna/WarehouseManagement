import { Link } from "@inertiajs/react";

const SidebarButton = ({ icon: Icon, value }) => {
    return (
        <>
            <Link className="flex items-center gap-4 px-5 py-2 rounded-lg transition-all duration-300 hover:bg-zinc-200">
                <Icon size={24} />
                <span className="text-xl">{value}</span>
            </Link>
        </>
    );
};

export default SidebarButton;
