import { Box } from "@chakra-ui/react";
import { Link, usePage } from "@inertiajs/react";

const SidebarButton = ({ icon: Icon, value, href }) => {
    const { url } = usePage();
    return (
        <>
            <Link
                href={href}
                className={`flex group items-center gap-4 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-hover_secondary ${
                    url === href ? "bg-hover_secondary" : ""
                }
                }`}
            >
                <Box as={Icon} size={18} color="#fff" />
                <span className="text-white text-sm">{value}</span>
            </Link>
        </>
    );
};

export default SidebarButton;
