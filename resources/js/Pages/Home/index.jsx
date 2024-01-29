import { Head } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
import { useState } from "react";
import HomeLayout from "@/Layouts/HomeLayout";

const HomePage = () => {
    const [isBorder, setBorder] = useState(false);
    const borderChange = () => {
        setBorder(window.scrollY > 110 ? true : false);
    };
    window.addEventListener("scroll", borderChange);

    return (
        <>
            <Head title="Home" />
            <HomeLayout>
                <div
                    className={`bg-azka z-10 ${
                        isBorder ? "shadow-lg border-b border-cyan-400" : ""
                    }`}
                >
                    <Navbar />
                </div>
            </HomeLayout>
        </>
    );
};

export default HomePage;
