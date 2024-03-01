import React from "react";
import Headroom from "react-headroom";
import HomeIllustrator from "../../asset/image-welcome.png";

export default function HomeLayout({ children, navbar, handleClickScrollRules }) {
    return (
        <>
            <Headroom>{navbar}</Headroom>
            <section className="relative min-h-full md:min-h-screen bg-azka 2xl:bottom-1">
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
            {children}
        </>
    );
}
