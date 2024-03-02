import { Head } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
import { useState } from "react";
import HomeLayout from "@/Layouts/HomeLayout";
import RulesImage from "../../../asset/rules-image.png";
import { Rules, ListStyle, Misi } from "@/Components/Fragments/ListStyle";

const HomePage = ({ rental_count, return_count, initial }) => {
    const [isBorder, setBorder] = useState(false);
    const borderChange = () => {
        setBorder(window.scrollY > 110 ? true : false);
    };
    window.addEventListener("scroll", borderChange);

    const handleClickScrollRules = () => {
        const element = document.getElementById("rules");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
            <Head title="Home" />
            <HomeLayout
                navbar={
                    <div
                        className={`bg-azka z-10 ${
                            isBorder ? "shadow-lg border-b border-cyan-800" : ""
                        }`}
                    >
                        <Navbar
                            peminjaman={rental_count}
                            pengembalian={return_count}
                            initial={initial}
                        />
                    </div>
                }
                handleClickScrollRules={handleClickScrollRules}
            >
                <>
                    <section id="rules">
                        <div className="flex flex-wrap h-screen justify-center relative z-0">
                            <div className="hidden xl:flex w-full md:w-5/12 justify-center items-center py-2">
                                <img className="w-96 h-96" src={RulesImage} />
                            </div>
                            <div className="flex flex-col justify-center py-5 px-10 gap-8 md:w-7/12">
                                <h1 className="text-5xl text-azka font-bold">
                                    Rules
                                </h1>
                                <ListStyle items={Rules} />
                            </div>
                            <svg
                                className="hidden md:block absolute md:-bottom-1 lg:-bottom-5 3xl:-bottom-[29px] -z-10"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1440 320"
                            >
                                <path
                                    fill="#6A91A7"
                                    fillOpacity="1"
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
                                        Menjadikan platform yang menyediakan
                                        peminjaman dan pengembalian barang
                                        secara efisien, inovatif, dan dapat
                                        diandalkan sehingga memudahkan siswa
                                        untuk melakukan proses peminjaman barang
                                        secara online
                                    </p>
                                </div>
                            </div>
                            <div
                                className="h-full flex justify-center bg-white w-full"
                                id="visimisi"
                            >
                                <div className="flex flex-col justify-center items-center gap-5 w-3/4 md:w-1/2 text-azka">
                                    <h1 className="text-3xl font-bold">Misi</h1>
                                    <ListStyle items={Misi} />
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            </HomeLayout>
        </>
    );
};

export default HomePage;
