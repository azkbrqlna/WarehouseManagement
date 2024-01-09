import OverviewCard from "@/Components/Fragments/OverviewCard";
import Dashboardlayout from "@/Layouts/DashboardLayout";
import { Link } from "@inertiajs/react";
import { ArrowCounterClockwise, Note } from "@phosphor-icons/react";

const RequestPage = () => {
    return (
        <>
            <Dashboardlayout title="Request">
                <section className="grid grid-flow-col gap-5 mt-10">
                    <Link href="/request/rental">
                        <OverviewCard
                            className={"text-2xl"}
                            title="Request Peminjaman"
                            value="1"
                            icon={Note}
                        />
                    </Link>
                    <Link href="/request/return">
                        <OverviewCard
                            className={"text-2xl"}
                            title="Request Pengembalian"
                            value="11"
                            icon={ArrowCounterClockwise}
                        />
                    </Link>
                </section>
                <section className="mt-10">
                    <div className="w-full h-[35rem] rounded-lg bg-white flex justify-center items-center">
                        <h1 className="text-6xl font-bold text-black">
                            INI LOGS
                        </h1>
                    </div>
                </section>
            </Dashboardlayout>
        </>
    );
};

export default RequestPage;
