import React from "react";
import Headroom from "react-headroom";
import HomeIllustrator from "../../asset/image-welcome.png";
import RulesImage from "../../asset/rules-image.png";
import { Rules, ListStyle, Misi } from "@/Components/Fragments/ListStyle";

export default function HomeLayout({ children }) {
    const handleClickScrollRules = () => {
        const element = document.getElementById("rules");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <Headroom>{children}</Headroom>
            <section className="relative h-screen bg-azka">
                <div className="flex flex-col px-5 md:px-20 xl:px-40 xl:flex-row gap-10">
                    <div className="flex flex-col gap-10 xl:w-3/4 text-white justify-center">
                        <h2 className="uppercase text-3xl text-center md:text-start font-bold">
                            Warehouse Management SMKN 7 Semarang
                        </h2>
                        <p className="text-lg">
                            Warehouse management adalah proses perencanaan,
                            pelaksanaan, dan pengendalian aktivitas penyimpanan
                            serta pergerakan barang di dalam gudang.
                        </p>
                        <button
                            onClick={handleClickScrollRules}
                            className="px-5 py-2 font-bold text-lg bg-cyan-600 w-40 rounded-lg hover:bg-cyan-500 transition-all duration-200 ease-in cursor-pointer shadow-lg"
                        >
                            Learn More
                        </button>
                    </div>
                    <div className="xl:w-1/3 flex justify-center">
                        <img src={HomeIllustrator} alt="Image Illustrator" />
                    </div>
                </div>
                <svg
                    className="hidden md:block absolute -bottom-[1px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                        fill="#fff"
                        fillOpacity="1"
                        d="M0,224L13.3,224C26.7,224,53,224,80,234.7C106.7,245,133,267,160,234.7C186.7,203,213,117,240,85.3C266.7,53,293,75,320,96C346.7,117,373,139,400,144C426.7,149,453,139,480,117.3C506.7,96,533,64,560,53.3C586.7,43,613,53,640,85.3C666.7,117,693,171,720,186.7C746.7,203,773,181,800,170.7C826.7,160,853,160,880,176C906.7,192,933,224,960,218.7C986.7,213,1013,171,1040,154.7C1066.7,139,1093,149,1120,133.3C1146.7,117,1173,75,1200,64C1226.7,53,1253,75,1280,112C1306.7,149,1333,203,1360,218.7C1386.7,235,1413,213,1427,202.7L1440,192L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"
                    ></path>
                </svg>
            </section>
            <section id="rules">
                <div className="flex flex-wrap h-screen justify-center relative overflow-hidden z-0">
                    <div className="hidden xl:flex w-full md:w-5/12 justify-center items-center py-2">
                        <img className="w-96 h-96" src={RulesImage} />
                    </div>
                    <div className="flex flex-col justify-center py-5 px-10 gap-8 md:w-7/12">
                        <h1 className="text-5xl text-azka font-bold">Rules</h1>
                        <ListStyle items={Rules} />
                    </div>
                    <svg
                        className="hidden md:block absolute md:-bottom-10 3xl:-bottom-[90px] -z-10"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#6A91A7"
                            fillOpacity="1"
                            d="M0,128L13.3,154.7C26.7,181,53,235,80,229.3C106.7,224,133,160,160,165.3C186.7,171,213,245,240,234.7C266.7,224,293,128,320,80C346.7,32,373,32,400,74.7C426.7,117,453,203,480,234.7C506.7,267,533,245,560,224C586.7,203,613,181,640,165.3C666.7,149,693,139,720,154.7C746.7,171,773,213,800,208C826.7,203,853,149,880,122.7C906.7,96,933,96,960,133.3C986.7,171,1013,245,1040,245.3C1066.7,245,1093,171,1120,144C1146.7,117,1173,139,1200,138.7C1226.7,139,1253,117,1280,138.7C1306.7,160,1333,224,1360,234.7C1386.7,245,1413,203,1427,181.3L1440,160L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"
                        ></path>
                    </svg>
                </div>
            </section>
            <section>
                <div className="w-full h-screen md:flex flex-col justify-center items-center bg-azka">
                    <div className="h-full flex justify-center w-full">
                        <div className="flex flex-col justify-center items-center gap-5 w-1/2 text-white">
                            <h1 className="text-3xl text-center font-bold">
                                Visi
                            </h1>
                            <p className="text-lg text-center">
                                Menjadikan platform yang menyediakan peminjaman
                                dan pengembalian barang secara efisien,
                                inovatif, dan dapat diandalkan sehingga
                                memudahkan siswa untuk melakukan proses
                                peminjaman barang secara online
                            </p>
                        </div>
                    </div>
                    <div
                        className="h-full flex justify-center bg-white w-full"
                        id="visimisi"
                    >
                        <div className="flex flex-col justify-center items-center gap-5 w-1/2 text-azka">
                            <h1 className="text-3xl font-bold">Misi</h1>
                            <ListStyle items={Misi} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
