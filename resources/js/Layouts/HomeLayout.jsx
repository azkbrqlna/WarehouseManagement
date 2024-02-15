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
            <section className="relative h-screen bg-azka 2xl:bottom-1">
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
                        className="hidden md:block absolute md:-bottom-7 3xl:-bottom-[90px] -z-10"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#6A91A7"
                            fill-opacity="1"
                            d="M0,96L11.4,117.3C22.9,139,46,181,69,218.7C91.4,256,114,288,137,261.3C160,235,183,149,206,138.7C228.6,128,251,192,274,234.7C297.1,277,320,299,343,298.7C365.7,299,389,277,411,256C434.3,235,457,213,480,170.7C502.9,128,526,64,549,80C571.4,96,594,192,617,208C640,224,663,160,686,154.7C708.6,149,731,203,754,202.7C777.1,203,800,149,823,138.7C845.7,128,869,160,891,176C914.3,192,937,192,960,197.3C982.9,203,1006,213,1029,224C1051.4,235,1074,245,1097,240C1120,235,1143,213,1166,181.3C1188.6,149,1211,107,1234,117.3C1257.1,128,1280,192,1303,208C1325.7,224,1349,192,1371,186.7C1394.3,181,1417,203,1429,213.3L1440,224L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"
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
