import { Box } from "@chakra-ui/react";
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
                className={`flex group items-center gap-4 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-hover_secondary ${
                    isCurrentPage
                        ? "bg-hover_secondary"
                        : ""
                }`}
            >
                <Box
                    as={Icon}
                    size={24}
                    color='#fff'
                />
                <span
                    className="text-white text-lg"
                >
                    {value}
                </span>
            </Link>
        </>
    );
};

export default SidebarButton;
