import { useState, useRef } from "react";
import { Turn as Hamburger } from "hamburger-react";
import NavbarHamburger from "@/Components/Fragments/NavbarHamburger";
import Navbar from "@/Components/Fragments/Navbar";
import { Head, router } from "@inertiajs/react";
import LogoSMK from "../../asset/logo-smkn7-smg.png";
import LogoProfile from "../../asset/profile-image.png";
import HomeIllustrator from "../../asset/image-welcome.png";
import {
    Stack,
    Avatar,
    Center,
    Divider,
    useDisclosure,
} from "@chakra-ui/react";
import ModalProfile from "../Components/Modal/ModalProfile";

const HomePage = () => {
    const [Open, setOpen] = useState(false);
    const cancelRef = useRef();

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

    const toggle = () => {
        setOpen(!Open);
    };

    const onLogOut = () => {
        router.visit("/");
    };

    return (
        <>
            <Head title="Home" />
            <div className="w-full min-h-screen bg-zinc-800">
                <div className="hidden md:block absolute bottom-0 left-0 right-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#a1a1aa"
                            fillOpacity="1"
                            d="M0,32L26.7,26.7C53.3,21,107,11,160,16C213.3,21,267,43,320,53.3C373.3,64,427,64,480,69.3C533.3,75,587,85,640,112C693.3,139,747,181,800,192C853.3,203,907,181,960,154.7C1013.3,128,1067,96,1120,112C1173.3,128,1227,192,1280,197.3C1333.3,203,1387,149,1413,122.7L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
                        ></path>
                    </svg>
                </div>
                <div className="w-full mb-10 py-5 px-12 flex justify-between">
                    <div className="w-3/4 md:w-1/3">
                        <a href="#">
                            <img className="w-14 md:w-20" src={LogoSMK} />
                        </a>
                    </div>
                    <div className="md:hidden relative flex w-full justify-end">
                        <Hamburger color="#adb5bd" onToggle={toggle} />
                        <NavbarHamburger isOpen={Open} />
                    </div>
                    <div className="items-center gap-20 hidden md:flex">
                        <Navbar />
                        <Center height="35px">
                            <Divider orientation="vertical" />
                        </Center>
                        <Stack>
                            <Avatar
                                name="Admin"
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
                        />
                    </div>
                </div>
                <div className="flex flex-col px-5 md:px-40 md:flex-row gap-10">
                    <div className="flex flex-col gap-10 md:w-1/2">
                        <h2 className="uppercase text-3xl text-center md:text-start font-bold text-zinc-400">
                            Warehouse Management SMKN N 7 Semarang
                        </h2>
                        <p className="text-lg text-zinc-400">
                            Warehouse management adalah proses perencanaan,
                            pelaksanaan, dan pengendalian aktivitas penyimpanan
                            serta pergerakan barang di dalam gudang.{" "}
                        </p>
                        <button className="px-5 py-2 font-bold text-lg bg-zinc-500 w-40 rounded-lg hover:bg-zinc-400">
                            Learn More
                        </button>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img src={HomeIllustrator} alt="Image Illustrator" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
