import { Link } from "@inertiajs/react";

const SidebarButton = ({ icon: Icon, value, href, isActive }) => {
    const isPage = window.location.pathname;
    const isCurrentPage =
        isActive ||
        (Array.isArray(href) &&
            href.some(
                (path) => isPage === path || isPage.startsWith(`${path}/`)
            ));
    return (
        <>
            <Link
                    href={Array.isArray(href) ? href[0] : href}
                    className={`flex items-center gap-4 px-5 py-2 rounded-lg transition-all duration-300 hover:bg-indigo-400 ${
                        isCurrentPage
                            ? "bg-secondary scale-105 transition-all duration-200 ease-in-out"
                            : ""
                    }`}
                >
                    <Icon size={24} color={isCurrentPage ? '#fff' : ''} />
                    <span className={`text-xl ${isCurrentPage ? 'text-white' : ''}`}>{value}</span>
                </Link>
        </>
    );
};

export default SidebarButton;
