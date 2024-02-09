import {
    Users,
    NotePencil,
    ClockCounterClockwise,
    Package,
} from "@phosphor-icons/react";
import LogoDashboard from "../../../asset/background-dashboard.png";
import OverviewCard from "@/Components/Fragments/OverviewCard";
import Dashboardlayout from "@/Layouts/DashboardLayout";

const Dashboard = ({ auth, user_count, item_count }) => {
    return (
        <>
            <Dashboardlayout title="Dashboard">
                <section className="relative flex items-center justify-between py-16 mt-10 space-y-2 shadow-sm px-20 2xl:px-36 bg-white rounded-xl z-10">
                    <div>
                        <h3 className="text-2xl ">
                            <span className="font-semibold">
                                Selamat datang
                            </span>{" "}
                            <span className="font-bold">
                                {auth.user.username}
                            </span>{" "}
                            👋
                        </h3>
                        <p>
                            Ayo mulai kelola setiap hal yang ada, dan jangan
                            lupa untuk selalu jaga kesehatan!
                        </p>
                    </div>
                    <div className="absolute bottom-10 right-20 2xl:right-40 w-40">
                        <img
                            src={LogoDashboard}
                            className="object-cover w-full"
                        />
                    </div>
                </section>
                <section className="grid grid-cols-4 gap-5 mt-10">
                    <OverviewCard
                        title="Total Barang"
                        value={item_count}
                        icon={Package}
                    />
                    <OverviewCard
                        title="Total Request"
                        value="11"
                        icon={NotePencil}
                    />
                    <OverviewCard
                        title="Total Users"
                        value={user_count}
                        icon={Users}
                    />
                    <OverviewCard
                        title="Total Logs"
                        value={user_count}
                        icon={ClockCounterClockwise}
                    />
                </section>
                <svg
                    className="absolute w-[1175px] 2xl:w-[1252px] 3xl:w-[1637px] right-0 bottom-0"
                    viewBox="0 0 1441 547"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_d_78_162)">
                        <path
                            d="M450.937 133.012C255.133 121.554 5 359.005 5 359.005V547H1441V3.01517C1441 -36.9837 1152.57 533 872.328 423.003C592.083 313.006 651.82 144.766 450.937 133.012Z"
                            fill="url(#paint0_linear_78_162)"
                            shapeRendering="crispEdges"
                        />
                        <path
                            d="M450.937 133.012C255.133 121.554 5 359.005 5 359.005V547H1441V3.01517C1441 -36.9837 1152.57 533 872.328 423.003C592.083 313.006 651.82 144.766 450.937 133.012Z"
                            shapeRendering="crispEdges"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_d_78_162"
                            x="0"
                            y="-0.000116348"
                            width="1446"
                            height="556"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_78_162"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_78_162"
                                result="shape"
                            />
                        </filter>
                        <linearGradient
                            id="paint0_linear_78_162"
                            x1="723"
                            y1="1"
                            x2="723"
                            y2="847"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#7371E2" />
                            <stop
                                offset="1"
                                stopColor="#7371E2"
                                stopOpacity="0"
                            />
                        </linearGradient>
                    </defs>
                </svg>
            </Dashboardlayout>
        </>
    );
};

export default Dashboard;
