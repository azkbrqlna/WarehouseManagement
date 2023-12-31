import { Users, ShoppingCart, Hourglass } from "@phosphor-icons/react";
import LogoDashboard from "../../../asset/logo-smkn7-smg.png";
import OverviewCard from "@/Components/Fragments/OverviewCard";
import Dashboardlayout from "@/Layouts/DashboardLayout";

const Dashboard = ({ auth, user_count, item_count }) => {
    return (
        <>
            <Dashboardlayout title="Dashboard">
                <section className="relative flex items-center justify-between py-20 mt-10 space-y-2 shadow-sm px-36 bg-white rounded-xl">
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
                    <div className="absolute bottom-10 right-40 w-40">
                        <img
                            src={LogoDashboard}
                            className="object-cover"
                            width={300}
                            alt="Painting Manage"
                        />
                    </div>
                </section>
                <section className="grid grid-flow-col gap-5 mt-10">
                    <OverviewCard
                        title="Total Barang"
                        value={item_count}
                        icon={ShoppingCart}
                    />
                    <OverviewCard
                        title="Total Request"
                        value="11"
                        icon={Hourglass}
                    />
                    <OverviewCard
                        title="Total Users"
                        value={user_count}
                        icon={Users}
                    />
                </section>
            </Dashboardlayout>
        </>
    );
};

export default Dashboard;
