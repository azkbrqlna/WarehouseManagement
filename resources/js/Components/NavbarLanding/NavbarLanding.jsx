import React from "react";
import LogoSMK from "../../../asset/logo-smkn7-smg.png";
import { Link } from "@inertiajs/react";
import { NotePencil, SignIn } from "@phosphor-icons/react";
import { Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { AddIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons";

export default function NavbarLanding({ isBorder }) {
    return (
        <nav
            className={`bg-azka flex justify-between py-3 px-7 ${
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
            <div className="hidden md:flex items-center gap-5 text-white">
                <Link
                    href="/login"
                    className="flex items-center gap-2 hover:bg-white hover:text-azka w-min px-3 py-1 rounded-lg transition-all duration-200 ease-in"
                >
                    <SignIn size={20} />
                    <h1 className="text-base font-bold">Login</h1>
                </Link>
                <Link
                    href="/register"
                    className="flex items-center gap-2 hover:bg-white hover:text-azka w-min px-3 py-1 rounded-lg transition-all duration-200 ease-in"
                >
                    <NotePencil size={20} />
                    <h1 className="text-base font-bold">Register</h1>
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
    );
}
