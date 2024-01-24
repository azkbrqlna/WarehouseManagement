import { Link } from "@inertiajs/react";

const SidebarButton = ({ icon: Icon, value, href, isActive }) => {
    const isCurrentPage = isActive || window.location.pathname.startsWith(href);
    return (
        <>
            <Link
                href={href}
                className={`flex items-center gap-4 px-5 py-2 rounded-lg transition-all duration-300 hover:bg-zinc-200 ${
                    isCurrentPage
                        ? "bg-zinc-200 scale-105 transition-transform duration-100 ease-in-out"
                        : ""
                }`}
            >
                <Icon size={24} />
                <span className="text-xl">{value}</span>
            </Link>
        </>
    );
};

export default SidebarButton;
