import React from "react";
import Dashboardlayout from "@/Layouts/DashboardLayout";
import { Link } from "@inertiajs/react";
import OverviewCard from "@/Components/Fragments/OverviewCard";
import { ArrowCounterClockwise, Cube, Note } from "@phosphor-icons/react";

export default function RequestLayout({
    children,
    rental_count,
    return_count,
}) {
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
                    <Link href="/request/log">
                        <OverviewCard
                            className={"text-2xl"}
                            title="Logs"
                            value={return_count}
                            icon={Note}
                        />
                    </Link>
                </section>
                {children}
            </Dashboardlayout>
        </>
    );
}
