import { Head } from "@inertiajs/react";
import HomeIllustrator from "../../../asset/image-welcome.png";
import RulesImage from "../../../asset/rules-image.png";
import WaveHomeTitle from "../../../asset/wave-home-title.svg";
import WaveHomeVisi from "../../../asset/wave-home-rules.svg";
import { Rules, ListStyle, Misi } from "@/Components/Fragments/ListStyle";
import Navbar from "@/Layouts/Navbar";

const HomePage = () => {
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
                <section className="relative bg-zinc-800 pb-60">
                    <div className="hidden md:block absolute bottom-0 right-0 left-0 pointer-events-none">
                        <img src={WaveHomeTitle} />
                    </div>
                    <Navbar />
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
                        <div className="h-full flex justify-center bg-zinc-400 w-full" id="visimisi">
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
