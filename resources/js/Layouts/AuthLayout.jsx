import { Box } from "@chakra-ui/react";
import { Head, Link } from "@inertiajs/react";
import { ArrowLeft } from "@phosphor-icons/react";
import BackgroundAuth from "../../asset/bg-auth.jpg";
import React from "react";

export default function AuthLayout({ endpoint, children }) {
    return (
        <>
            <Head title={`${endpoint}`} />
            <div className="w-full h-screen relative">
                <div className="absolute w-full h-screen flex items-center justify-center xl:items-start xl:justify-normal">
                    <div className="xl:w-3/5 min-h-full relative">
                        <img
                            src={BackgroundAuth}
                            className="object-cover w-full h-screen"
                        />
                        <div className="absolute top-0 w-full h-screen">
                            <div className="flex flex-col justify-between text-white h-full xl:bg-gradient-to-t from-azka px-5 xl:px-10 py-8 3xl:pb-20 pr-[10%]">
                                <Box
                                    as={Link}
                                    href="/"
                                    className="flex items-center gap-2 hover:bg-white hover:text-azka w-min p-2 rounded-lg transition-all duration-200 ease-in"
                                >
                                    <ArrowLeft size={30} />
                                    <h1 className="text-xl font-bold">Back</h1>
                                </Box>
                                <div className="hidden xl:flex flex-col gap-10 3xl:gap-20 wfull">
                                    <h1 className="font-bold text-4xl 3xl:text-6xl">
                                        Warehouse Management SMKN 7 Semarang
                                    </h1>
                                    <p className="3xl:text-xl">
                                        Selamat datang di Warehouse Management
                                        SMKN 7 Semarang, solusi terdepan untuk
                                        kebutuhan penyimpanan. Kami menyediakan
                                        layanan gudang modern yang efisien,
                                        aman, dan terkelola dengan baik.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute mt-14 md:mt-0 max-w-[20rem] md:max-w-xl xl:max-w-3xl xl:static xl:w-2/5 xl:min-h-full xl:px-7 rounded-lg backdrop-blur-md xl:backdrop-blur-0 shadow-azka shadow-xl flex items-center">
                        <div className="w-full p-5 text-white xl:text-black flex items-center flex-col">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
