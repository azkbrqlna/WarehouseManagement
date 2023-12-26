import { useState, useRef } from "react";
import { Turn as Hamburger } from "hamburger-react";
import NavbarHamburger from "@/Components/Fragments/NavbarHamburger";
import Navbar from "@/Components/Fragments/Navbar";
import { Head, router } from "@inertiajs/react";
import LogoSMK from "../../asset/logo-smkn7-smg.png";
import LogoProfile from "../../asset/profile-image.png";
import HomeIllustrator from "../../asset/image-welcome.png";
import RulesImage from "../../asset/rules-image.png";
import WaveHomeTitle from "../../asset/wave-home-title.svg";
import WaveHomeVisi from "../../asset/wave-home-rules.svg";
import { ListStyle, Rules, Misi } from "../Components/Fragments/ListStyle";
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
        router.visit("/logout");
    };

    const handleClickScrollRules = () => {
        const element = document.getElementById("rules");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <Head title="Home" />
            <div className="w-full h-screen">
                <section className="h-screen relative bg-zinc-800">
                    <div className="hidden md:block absolute bottom-0 right-0 left-0 pointer-events-none">
                        <img src={WaveHomeTitle} />
                    </div>
                    <div className="w-full mb-10 py-5 px-5 md:px-12 flex justify-between">
                        <div className="hidden md:block w-1/3">
                            <a href="https://smkn7semarang.sch.id/">
                                <img className="w-14 md:w-20" src={LogoSMK} />
                            </a>
                        </div>
                        <div className="md:hidden relative flex w-full justify-between items-center">
                            <Hamburger color="#adb5bd" onToggle={toggle} />
                            <Stack>
                                <Avatar
                                    w="45px"
                                    h="45px"
                                    name="Admin"
                                    src={LogoProfile}
                                    onClick={onModalOpen}
                                    cursor="pointer"
                                />
                            </Stack>
                            <NavbarHamburger isOpen={Open} />
                        </div>
                        <div className="items-center gap-5 hidden md:flex">
                            <Navbar />
                            <Center height="30px">
                                <Divider orientation="vertical" />
                            </Center>
                            <Stack>
                                <Avatar
                                    w="40px"
                                    h="40px"
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
                        <div className="flex flex-col gap-10 md:w-3/4">
                            <h2 className="uppercase text-3xl text-center md:text-start font-bold text-zinc-400">
                                Warehouse Management SMKN N 7 Semarang
                            </h2>
                            <p className="text-lg text-zinc-400">
                                Warehouse management adalah proses perencanaan,
                                pelaksanaan, dan pengendalian aktivitas
                                penyimpanan serta pergerakan barang di dalam
                                gudang.
                            </p>
                            <button
                                onClick={handleClickScrollRules}
                                className="px-5 py-2 font-bold text-lg bg-zinc-500 w-40 rounded-lg hover:bg-zinc-400 cursor-pointer shadow-lg"
                            >
                                Learn More
                            </button>
                        </div>
                        <div className="md:w-1/3 flex justify-center">
                            <img
                                src={HomeIllustrator}
                                alt="Image Illustrator"
                            />
                        </div>
                    </div>
                </section>
                <section className="bg-zinc-400" id="rules">
                    <div className="flex flex-wrap h-screen justify-center relative">
                        <div className="flex w-full md:w-1/3 justify-center items-center">
                            <img className="w-96 h-96" src={RulesImage} />
                        </div>
                        <div className="flex flex-col justify-center p-5 gap-4 md:w-2/3">
                            <h1 className="text-5xl text-zinc-800 font-bold">
                                Rules
                            </h1>
                            <ListStyle items={Rules} />
                        </div>
                        <div className="hidden md:block absolute bottom-0 pointer-events-none h-0">
                            <img className="rotate-180" src={WaveHomeVisi} />
                        </div>
                    </div>
                </section>
                <section className="bg-zinc-800 pt-[310px]" id="visimisi">
                    <div className="w-full h-screen md:flex flex-col justify-center items-center">
                        <div className="h-full flex justify-center w-full">
                            <div className="flex flex-col justify-center items-center gap-5 w-1/2 text-zinc-400">
                                <h1 className=" text-3xl text-center font-bold">
                                    Visi
                                </h1>
                                <p className="text-lg text-center">
                                    Menjadikan platform yang menyediakan
                                    peminjaman dan pengembalian barang secara
                                    efisien, inovatif, dan dapat diandalkan
                                    sehingga memudahkan siswa untuk melakukan
                                    proses peminjaman barang secara online
                                </p>
                            </div>
                        </div>
                        <div className="h-full flex justify-center bg-zinc-400 w-full">
                            <div className="flex flex-col justify-center items-center gap-5 w-1/2 text-zinc-800">
                                <h1 className="text-3xl font-bold">Misi</h1>
                                <ListStyle items={Misi} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HomePage;
