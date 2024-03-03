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
                <header className="w-full md:px-10 h-[80vh] md:h-[90vh] lg:h-[70vh] md:py-14">
                    <div className="flex flex-wrap min-h-full">
                        <div className="w-full md:h-min lg:w-1/2 p-5 md:px-20 md:pt-10 text-white space-y-4">
                            <h1 className="text-4xl md:text-5xl font-bold text-left md:text-center lg:text-left">About Us</h1>
                            <p className="text-lg md:text-2xl font-medium">
                                Dengan Warehouse Management kami, Anda dapat
                                dengan mudah mengontrol dan melacak persediaan,
                                memproses pesanan dengan cepat dan akurat, serta
                                mengoptimalkan produktivitas gudang secara
                                keseluruhan.
                            </p>
                            <button
                                onClick={() => {
                                    window.location.href = "#sponsor";
                                }}
                                className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                            >
                                Learn More
                            </button>
                        </div>
                        <div className="w-full lg:w-1/2 md:-translate-y-20 lg:translate-y-0">
                            <img
                                className="w-full md:w-[600px] lg:w-full mx-auto"
                                src={Ilustrator}
                            />
                        </div>
                    </div>
                </header>
                <main className="min-h-0 lg:min-h-screen w-full px-10 md:px-20 py-10 space-y-20">
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
                <main className="min-h-0 lg:min-h-screen w-full px-10 md:px-20 space-y-10">
                    <div id="benefit" className="text-white space-y-3">
                        <h1 className="text-4xl font-bold text-center text-white">
                            Benefit
                        </h1>
                        <div className="flex flex-wrap lg:flex-nowrap gap-2">
                            <div className="flex-grow p-6 bg-white rounded-lg shadow">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                    Peminjaman
                                </h5>
                                <p className="font-normal text-gray-600">
                                    Mempermudah proses peminjaman barang dengan melakukan persetujuan dengan cara online dan cepat
                                </p>
                            </div>
                            <div className="flex-grow p-6 bg-white rounded-lg shadow">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                    Pengembalian
                                </h5>
                                <p className="font-normal text-gray-600">
                                    Mempermudah proses pengembalian barang dengan melakukan persetujuan dengan cara online dan cepat
                                </p>
                            </div>
                            <div className="flex-grow p-6 bg-white rounded-lg shadow">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                    Logs
                                </h5>
                                <p className="font-normal text-gray-600">
                                    Memantau dan menganalisis aktivitas customer dalam melakukan proses peminjaman dan pengembalian barang
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3 pb-10">
                        <h1 className="text-center text-4xl text-white font-bold">
                            Contact
                        </h1>
                        <div className="flex flex-wrap gap-2">
                            <div className="p-6 md:w-60 grow bg-white rounded-lg shadow">
                                <h5 className="mb-2 text-xl md:text-3xl text-gray-900">
                                    <User />
                                </h5>
                                <p className="text-md text-gray-600">
                                    Drs. Lionel Azka Bariqlana, S.Kom{"(edi)"}
                                </p>
                            </div>
                            <div className="p-6 md:w-60 grow bg-white rounded-lg shadow">
                                <h5 className="mb-2 text-xl md:text-3xl text-gray-900">
                                    <Phone />
                                </h5>
                                <p className="text-md text-gray-600">
                                    +62 895 4155 30486
                                </p>
                            </div>
                            <div className="p-6 md:w-60 grow bg-white rounded-lg shadow">
                                <h5 className="mb-2 text-xl md:text-3xl text-gray-900">
                                    <EnvelopeSimple />
                                </h5>
                                <p className="text-md text-gray-600">
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
