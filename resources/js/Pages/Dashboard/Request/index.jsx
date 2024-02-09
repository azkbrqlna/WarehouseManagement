import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import {
    ArrowCounterClockwise,
    Cube,
    Minus,
    Note,
} from "@phosphor-icons/react";
import Pagination from "@/Components/Fragments/Pagination";
import RequestLayout from "@/Pages/Dashboard/Request";
import Dashboardlayout from "@/Layouts/DashboardLayout";
import { Link } from "@inertiajs/react";
import OverviewCard from "@/Components/Fragments/OverviewCard";

const RequestsPage = ({ rental_count, return_count }) => {
    return (
        <>
            <Dashboardlayout title="Requests">
                <section className="grid grid-flow-col gap-5 mt-5">
                    <Link href="/request/rental">
                        <OverviewCard
                            className={"text-2xl"}
                            title="Borrow"
                            value={rental_count}
                            icon={Cube}
                        />
                    </Link>
                    <Link href="/request/return">
                        <OverviewCard
                            className={"text-2xl"}
                            title="Return"
                            value={return_count}
                            icon={ArrowCounterClockwise}
                        />
                    </Link>
                </section>
                <div className="w-full p-4 rounded-md mt-4 bg-white grid place-content-center h-3/5">
                    <h1 className="font-bold text-9xl text-cyan-500">Ucup Sarucup</h1>
                </div>
            </Dashboardlayout>
        </>
    );
};

export default RequestsPage;
