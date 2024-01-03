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

const Navbar = () => {
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
            <nav className="w-full mb-10 py-5 px-5 md:px-12 flex justify-between">
                <div className="hidden md:block">
                    <a href="https://smkn7semarang.sch.id/">
                        <img className="w-14 md:w-20" src={LogoSMK} />
                    </a>
                </div>
                <div className="md:hidden relative flex w-full justify-between items-center">
                    <Hamburger
                        color="#adb5bd"
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
                    <Stack>
                        <Avatar
                            w="40px"
                            h="40px"
                            src={LogoProfile}
                            onClick={onModalOpen}
                            cursor="pointer"
                        />
                    </Stack>
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
                    />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
