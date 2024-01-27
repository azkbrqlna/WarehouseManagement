import { Head, Link } from "@inertiajs/react";
import HomeIllustrator from "../../../asset/image-welcome.png";
import RulesImage from "../../../asset/rules-image.png";
import WaveHomeTitle from "../../../asset/wave-home-title.svg";
import WaveHomeVisi from "../../../asset/wave-home-rules.svg";
import { Rules, ListStyle, Misi } from "@/Components/Fragments/ListStyle";
import Headroom from "react-headroom";
import { useState } from "react";
import LogoSMK from "../../../asset/logo-smkn7-smg.png";
import { NotePencil, SignIn } from "@phosphor-icons/react";

const LandingPage = () => {
    const handleClickScrollRules = () => {
        const element = document.getElementById("rules");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const [isBorder, setBorder] = useState(false);
    const borderChange = () => {
        setBorder(window.scrollY > 110 ? true : false);
    };
    window.addEventListener("scroll", borderChange);

    return (
        <>
            <Head title="Home" />
            <div className="w-full h-screen">
                <section className="relative bg-azka pb-60">
                    <div className="hidden md:block absolute bottom-0 right-0 left-0 pointer-events-none">
                        <img src={WaveHomeTitle} />
                    </div>
                    <Headroom>
                        <nav className={`bg-azka z-10 flex justify-between py-3 px-7 ${isBorder ? "shadow-lg border-b border-blue-300" : ""}`}>
                            <div className="flex items-center gap-3 text-white">
                                <img className="w-14 md:w-20" src={LogoSMK} />
                                <h1 className="font-semibold text-lg">SMK N 7 Semarang</h1>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <Link className="text-lg flex items-center hover:text-neutral-300">
                                    <SignIn size={20} />
                                    Login</Link>
                                <Link className="text-lg flex items-center">
                                <NotePencil size={20} />
                                Register</Link>
                            </div>
                        </nav>
                    </Headroom>
                    <div className="flex flex-col px-5 md:px-40 md:flex-row gap-10">
                        <div className="flex flex-col gap-10 md:w-3/4 text-white">
                            <h2 className="uppercase text-3xl text-center md:text-start font-bold">
                                Warehouse Management SMKN 7 Semarang
                            </h2>
                            <p className="text-lg">
                                Warehouse management adalah proses perencanaan,
                                pelaksanaan, dan pengendalian aktivitas
                                penyimpanan serta pergerakan barang di dalam
                                gudang.
                            </p>
                            <button
                                onClick={handleClickScrollRules}
                                className="px-5 py-2 font-bold text-lg bg-sky-500 w-40 rounded-lg hover:bg-sky-400 cursor-pointer shadow-lg"
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
                <section className="bg-zinc-400 py-40" id="rules">
                    <div className="flex flex-wrap h-screen justify-center relative">
                        <div className="flex w-full md:w-5/12 justify-center items-center">
                            <img className="w-96 h-96" src={RulesImage} />
                        </div>
                        <div className="flex flex-col justify-center p-5 gap-8 md:w-7/12">
                            <h1 className="text-7xl text-zinc-800 font-bold">
                                Rules
                            </h1>
                            <ListStyle items={Rules} />
                        </div>
                        <div className="hidden bg-sky-400 md:block absolute -bottom-40 pointer-events-none h-0">
                            <img className="rotate-180" src={WaveHomeVisi} />
                        </div>
                    </div>
                </section>
                <section className="bg-zinc-800 md:pt-[310px]">
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
                        <div
                            className="h-full flex justify-center bg-zinc-400 w-full"
                            id="visimisi"
                        >
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

export default LandingPage;
