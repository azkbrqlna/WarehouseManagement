import { Head } from "@inertiajs/react";
import { useState } from "react";
import HomeLayout from "@/Layouts/HomeLayout";
import NavbarLanding from "@/Components/NavbarLanding/NavbarLanding";
import { Tutor, Rules, ListStyle } from "@/Components/Fragments/ListStyle";

const LandingPage = () => {
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
                navbar={<NavbarLanding isBorder={isBorder} />}
                handleClickScrollRules={handleClickScrollRules}
            >
                <section className="min-w-full min-h-screen py-6 px-2 space-y-14 3xl:space-y-40">
                    <div className="w-full flex py-5 px-4 justify-center">
                        <h1 className="text-2xl 3xl:text-3xl font-bold text-azka">
                            Cara Peminjaman
                        </h1>
                    </div>
                    <div className="space-y-14 md:space-y-0 md:grid md:px-20 grid-cols-3 grid-rows-2 gap-y-60 gap-x-10 place-content-end">
                        {Tutor.map((tutor, index) => (
                            <div
                                key={index}
                                className="flex md:flex-col md:items-center gap-2"
                            >
                                <div>
                                    <h1 className="bg-azka flex items-center justify-center w-10 h-10 3xl:w-14 3xl:h-14 rounded-full md:text-xl text-white">
                                        {index + 1 + "."}
                                    </h1>
                                </div>
                                <p className="text-lg 3xl:text-xl md:text-center">
                                    {tutor}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
                <section
                    className="min-w-full min-h-screen py-10 md:py-20 px-5 md:px-28 bg-azka flex flex-col items-center space-y-10"
                    id="rules"
                >
                    <h1 className="text-2xl md:text-3xl 3xl:text-4xl font-bold text-white">Rules</h1>
                    <div className="p-4 bg-white rounded-lg shadow-rules md:shadow-rules-md 3xl:shadow-rules-md flex flex-col text-lg 3xl:text-2xl 3xl:space-y-3">
                        {Rules.map((rule, index) => (
                            <div key={index} className="inline-flex gap-2">
                                <span>{index + 1}.</span>
                                <h1>{rule}</h1>
                            </div>
                        ))}
                    </div>
                </section>
            </HomeLayout>
        </>
    );
};

export default LandingPage;
