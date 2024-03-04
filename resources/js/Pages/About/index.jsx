import Navbar from "@/Layouts/Navbar";
import { Head } from "@inertiajs/react";
import React from "react";
import { useState } from "react";
import Headroom from "react-headroom";
import Ilustrator from "../../../asset/image-ilustrator.png";
import Marquee from "react-fast-marquee";
import SIJA from "../../../asset/citranet.png";
import TMPO from "../../../asset/toyota.jpg";
import TME from "../../../asset/omron.png";
import KGSP from "../../../asset/waskita.png";
import KJIJ from "../../../asset/tiga roda.jpg";
import TTL from "../../../asset/pln.png";
import TEDK from "../../../asset/samsung.png";
import { EnvelopeSimple, Phone, User } from "@phosphor-icons/react";
import CardSponsor from "@/Components/Fragments/CardSponsor";

export default function About({ rental_count, return_count, initial }) {
    const [isBorder, setBorder] = useState(false);
    const borderChange = () => {
        setBorder(window.scrollY > 110 ? true : false);
    };

    const handleClickScrollRules = () => {
        const element = document.getElementById("sponsor");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    window.addEventListener("scroll", borderChange);
    return (
        <>
            <Head title="About" />
            <div className="bg-azka min-h-screen min-w-full">
                <Headroom>
                    <div
                        className={`bg-azka z-10 ${
                            isBorder ? "border-b-2 border-border_azka" : ""
                        }`}
                    >
                        <Navbar
                            peminjaman={rental_count}
                            pengembalian={return_count}
                            initial={initial}
                        />
                    </div>
                </Headroom>
                <header className="relative min-h-full md:min-h-screen bg-white 2xl:bottom-1">
                    <div className="flex flex-col px-5 md:px-20 xl:px-40 xl:flex-row gap-10">
                        <div className="flex flex-col gap-5 xl:w-3/4 text-azka justify-center pt-20">
                            <h2 className="uppercase text-3xl text-center md:text-start font-bold">
                                About Us
                            </h2>
                            <p className="text-lg">
                                Dengan Warehouse Management kami, Anda dapat
                                dengan mudah mengontrol dan melacak persediaan,
                                memproses pesanan dengan cepat dan akurat, serta
                                mengoptimalkan produktivitas gudang secara
                                keseluruhan.
                            </p>
                            <button
                                onClick={handleClickScrollRules}
                                className="px-5 py-2 font-bold text-white text-lg bg-azka w-40 rounded-lg hover:bg-border_azka transition-all duration-200 ease-in cursor-pointer shadow-lg"
                            >
                                Learn More
                            </button>
                        </div>
                        <div className="xl:w-1/2 flex justify-center">
                            <img src={Ilustrator} alt="Image Illustrator" />
                        </div>
                    </div>
                    <svg
                        className="hidden md:block absolute -bottom-[1px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#6A91A7"
                            fillOpacity="1"
                            d="M0,224L13.3,224C26.7,224,53,224,80,234.7C106.7,245,133,267,160,234.7C186.7,203,213,117,240,85.3C266.7,53,293,75,320,96C346.7,117,373,139,400,144C426.7,149,453,139,480,117.3C506.7,96,533,64,560,53.3C586.7,43,613,53,640,85.3C666.7,117,693,171,720,186.7C746.7,203,773,181,800,170.7C826.7,160,853,160,880,176C906.7,192,933,224,960,218.7C986.7,213,1013,171,1040,154.7C1066.7,139,1093,149,1120,133.3C1146.7,117,1173,75,1200,64C1226.7,53,1253,75,1280,112C1306.7,149,1333,203,1360,218.7C1386.7,235,1413,213,1427,202.7L1440,192L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"
                        ></path>
                    </svg>
                </header>
                <main className="min-h-screen w-full px-10 md:px-20 md:py-10 space-y-20">
                    <section id="sponsor" className="mt-10 space-y-10">
                        <h1 className="text-4xl font-bold text-center text-white">
                            Our Sponsor
                        </h1>
                        <Marquee className="z-0">
                            <div className="flex gap-[4.3px] md:gap-1 lg:gap-4">
                                <CardSponsor
                                    link="https://citra.net.id/"
                                    src={SIJA}
                                    sponsor="CitraNet"
                                    date="2015"
                                />
                                <CardSponsor
                                    link="https://www.samsung.com/id/"
                                    src={TEDK}
                                    sponsor="Samsung"
                                    date="2015"
                                />
                                <CardSponsor
                                    link="https://www.omron.co.id/"
                                    src={TME}
                                    sponsor="Omron"
                                    date="2015"
                                />
                                <CardSponsor
                                    link="https://transformation.waskita.co.id/"
                                    src={KGSP}
                                    sponsor="Waskita"
                                    date="2015"
                                />
                                <CardSponsor
                                    link="https://sementigaroda.com/"
                                    src={KJIJ}
                                    sponsor="Tiga Roda"
                                    date="2015"
                                />
                                <CardSponsor
                                    link="https://www.toyota.astra.co.id/home"
                                    src={TMPO}
                                    sponsor="Toyota"
                                    date="2015"
                                />
                                <CardSponsor
                                    link="https://www.pln.co.id/"
                                    src={TTL}
                                    sponsor="PLN"
                                    date="2015"
                                />
                            </div>
                        </Marquee>
                    </section>
                    <div
                        className="text-white text-center lg:px-60"
                        id="latar_belakang"
                    >
                        <h1 className="text-4xl font-bold">Latar Belakang</h1>
                        <p className="text-lg">
                            Selamat datang di Warehouse Management, solusi
                            terdepan dalam mengoptimalkan operasi gudang Anda.
                            Didirikan pada tahun 2024, kami memulai perjalanan
                            kami dengan visi untuk menjadi mitra terpercaya
                            dalam pengelolaan gudang yang memberikan solusi
                            inovatif dan terdepan untuk kebutuhan manajemen
                            persediaan perusahaan.
                        </p>
                    </div>
                </main>
                <main className="min-h-0 lg:min-h-screen w-full px-10 md:px-20 py-10 space-y-10 bg-white">
                    <div id="benefit" className="text-white space-y-3">
                        <h1 className="text-4xl font-bold text-center text-azka">
                            Benefit
                        </h1>
                        <div className="flex flex-wrap lg:flex-nowrap gap-2">
                            <div className="flex-grow p-6 bg-azka rounded-lg shadow">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                                    Peminjaman
                                </h5>
                                <p className="font-normal text-gray-200">
                                    Mempermudah proses peminjaman barang dengan
                                    melakukan persetujuan dengan cara online dan
                                    cepat
                                </p>
                            </div>
                            <div className="flex-grow p-6 bg-azka rounded-lg shadow">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                                    Pengembalian
                                </h5>
                                <p className="font-normal text-gray-200">
                                    Mempermudah proses pengembalian barang
                                    dengan melakukan persetujuan dengan cara
                                    online dan cepat
                                </p>
                            </div>
                            <div className="flex-grow p-6 bg-azka rounded-lg shadow">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                                    Logs
                                </h5>
                                <p className="font-normal text-gray-200">
                                    Memantau dan menganalisis aktivitas customer
                                    dalam melakukan proses peminjaman dan
                                    pengembalian barang
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3 pb-10">
                        <h1 className="text-center text-4xl text-azka font-bold">
                            Contact
                        </h1>
                        <div className="flex flex-wrap gap-2">
                            <div className="p-6 md:w-60 grow bg-azka rounded-lg shadow">
                                <h5 className="mb-2 text-xl md:text-3xl text-white">
                                    <User />
                                </h5>
                                <p className="text-md text-gray-100">
                                    Drs. Lionel Azka Bariqlana, S.Kom{"(edi)"}
                                </p>
                            </div>
                            <div className="p-6 md:w-60 grow bg-azka rounded-lg shadow">
                                <h5 className="mb-2 text-xl md:text-3xl text-white">
                                    <Phone />
                                </h5>
                                <p className="text-md text-gray-100">
                                    +62 895 4155 30486
                                </p>
                            </div>
                            <div className="p-6 md:w-60 grow bg-azka rounded-lg shadow">
                                <h5 className="mb-2 text-xl md:text-3xl text-white">
                                    <EnvelopeSimple />
                                </h5>
                                <p className="text-md text-gray-100">
                                    @warehouse.smkn7.smg
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
