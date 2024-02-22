import { Head } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
import { useState } from "react";
import HomeLayout from "@/Layouts/HomeLayout";

const HomePage = ({ rental_count, return_count }) => {
    const [isBorder, setBorder] = useState(false);
    const borderChange = () => {
        setBorder(window.scrollY > 110 ? true : false);
    };
    window.addEventListener("scroll", borderChange);
    console.log(rental_count)
    console.log(return_count)

    return (
        <>
            <Head title="Home" />
            <HomeLayout>
                <div
                    className={`bg-azka z-10 ${
                        isBorder ? "shadow-lg border-b border-cyan-400" : ""
                    }`}
                >
                    <Navbar
                        peminjaman={rental_count}
                        pengembalian={return_count}
                    />
                </div>
            </HomeLayout>
        </>
    );
};

export default HomePage;
