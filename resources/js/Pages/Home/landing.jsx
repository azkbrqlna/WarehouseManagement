import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import LogoSMK from "../../../asset/logo-smkn7-smg.png";
import { NotePencil, SignIn } from "@phosphor-icons/react";
import {
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import { AddIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons";
import HomeLayout from "@/Layouts/HomeLayout";

const LandingPage = () => {
    const [isBorder, setBorder] = useState(false);
    const borderChange = () => {
        setBorder(window.scrollY > 110 ? true : false);
    };
    window.addEventListener("scroll", borderChange);
    return (
        <>
            <Head title="Home" />
            <HomeLayout>
                <nav
                    className={`bg-azka z-[9999] flex justify-between py-3 px-7 ${
                        isBorder ? "shadow-lg border-b border-cyan-600" : ""
                    }`}
                >
                    <div className="flex items-center gap-3 text-white">
                        <a href="https://smkn7semarang.sch.id/">
                            <img className="w-14 md:w-20" src={LogoSMK} />
                        </a>
                        <h1 className="font-semibold text-lg hidden xl:block">
                            SMK N 7 Semarang
                        </h1>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-white">
                        <Link
                            href="/login"
                            className="text-lg flex items-center gap-1 border rounded-md px-2 py-1 hover:bg-cyan-500 transition-all duration-200 ease-in"
                        >
                            <SignIn size={20} />
                            <span>Login</span>
                        </Link>
                        <Link
                            href="/register"
                            className="text-lg flex items-center gap-1 border rounded-md px-2 py-1 hover:bg-cyan-500 transition-all duration-200 ease-in"
                        >
                            <NotePencil size={20} />
                            <span>Register</span>
                        </Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label="Options"
                                icon={
                                    <HamburgerIcon
                                        color="#fff"
                                        _hover={{ color: "#6A91A7" }}
                                    />
                                }
                                variant="outline"
                            />
                            <MenuList minW="min-content">
                                <MenuItem
                                    icon={<EditIcon />}
                                    _hover={{
                                        background: "#6A91A7",
                                        color: "#fff",
                                    }}
                                    as={Link}
                                    href="/login"
                                >
                                    Login
                                </MenuItem>
                                <MenuItem
                                    icon={<AddIcon />}
                                    _hover={{
                                        background: "#6A91A7",
                                        color: "#fff",
                                    }}
                                    as={Link}
                                    href="/register"
                                >
                                    Register
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                </nav>
            </HomeLayout>
        </>
    );
};

export default LandingPage;
