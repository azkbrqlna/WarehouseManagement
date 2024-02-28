import { useRef, useState } from "react";
import NavbarHamburger from "@/Components/Fragments/NavbarHamburger";
import NavbarGeneral from "../Components/Fragments/NavbarGeneral";
import ModalProfile from "@/Components/Modal/ModalProfile";
import LogoSMK from "../../asset/logo-smkn7-smg.png";
import LogoProfile from "../../asset/profile-image.png";
import {
    Avatar,
    Center,
    Divider,
    Stack,
    useDisclosure,
} from "@chakra-ui/react";
import { router, usePage } from "@inertiajs/react";
import { Turn as Hamburger } from "hamburger-react";

const Navbar = ({ peminjaman, pengembalian, initial }) => {
    const { auth } = usePage().props;
    const btnRef = useRef();
    const cancelRef = useRef();
    const [isHamburgerOpen, setHamburgerOpen] = useState(false);

    const {
        isOpen: isModalOpen,
        onOpen: onModalOpen,
        onClose: onModalClose,
    } = useDisclosure();

    const {
        isOpen: isAlertDialogOpen,
        onOpen: onAlertDialogOpen,
        onClose: onAlertDialogClose,
    } = useDisclosure();

    const {
        isOpen: isDrawerOpen,
        onOpen: onDrawerOpen,
        onClose: onDrawerClose,
    } = useDisclosure();

    const onToggle = () => {
        setHamburgerOpen(!isHamburgerOpen);
        onDrawerOpen() ? onDrawerClose() : onDrawerOpen();
    };

    const onLogOut = () => {
        router.visit("/logout");
    };

    return (
        <>
            <nav className="w-full py-5 px-5 md:px-12 flex justify-between transition-all duration-300">
                <div className="hidden md:flex items-center gap-4">
                    <a href="https://smkn7semarang.sch.id/">
                        <img className="w-14 md:w-20" src={LogoSMK} />
                    </a>
                    <h1 className="font-semibold text-lg hidden xl:block text-white">
                        SMK N 7 Semarang
                    </h1>
                </div>
                <div className="md:hidden relative flex w-full justify-between items-center">
                    <Hamburger
                        color="#fff"
                        toggled={isHamburgerOpen}
                        toggle={onToggle}
                    />
                    <Stack>
                        <Avatar
                            w="45px"
                            h="45px"
                            src={LogoProfile}
                            onClick={onModalOpen}
                            cursor="pointer"
                        />
                    </Stack>
                    <NavbarHamburger
                        isOpen={isDrawerOpen}
                        onClose={onDrawerClose}
                        onOpen={onDrawerOpen}
                        btnRef={btnRef}
                        onToggle={onToggle}
                    />
                </div>
                <div className="items-center gap-5 hidden md:flex">
                    <NavbarGeneral />
                    <Center height="30px">
                        <Divider orientation="vertical" />
                    </Center>
                    <div
                        className="w-12 h-12 rounded-full self-center flex justify-center items-center border-2 border-gray-300 bg-white cursor-pointer"
                        onClick={onModalOpen}
                    >
                        <span className="font-bold text-base text-azka">
                            {initial}
                        </span>
                    </div>
                    <ModalProfile
                        isModalOpen={isModalOpen}
                        onModalClose={onModalClose}
                        LogoProfile={LogoProfile}
                        onAlertDialogOpen={onAlertDialogOpen}
                        cancelRef={cancelRef}
                        isAlertDialogOpen={isAlertDialogOpen}
                        onAlertDialogClose={onAlertDialogClose}
                        onLogOut={onLogOut}
                        user={auth.user.username}
                        kelas={auth.user.kelas}
                        peminjaman={peminjaman}
                        pengembalian={pengembalian}
                        initial={initial}
                    />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
