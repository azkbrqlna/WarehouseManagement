import OverviewCard from "@/Components/Fragments/OverviewCard";
import Dashboardlayout from "@/Layouts/DashboardLayout";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import { ArrowCounterClockwise, Minus, Note } from "@phosphor-icons/react";
import Pagination from "@/Components/Fragments/Pagination";

const RequestPage = ({ rental_count, return_count, logs }) => {
    return (
        <>
            <Dashboardlayout title="Request">
                <section className="grid grid-flow-col gap-5 mt-5">
                    <Link href="/request/rental">
                        <OverviewCard
                            className={"text-2xl"}
                            title="Request Peminjaman"
                            value={rental_count}
                            icon={Note}
                        />
                    </Link>
                    <Link href="/request/return">
                        <OverviewCard
                            className={"text-2xl"}
                            title="Request Pengembalian"
                            value={return_count}
                            icon={ArrowCounterClockwise}
                        />
                    </Link>
                </section>
                <section className="mt-5">
                    <div className="w-full 3xl:h-[40rem] rounded-lg bg-white">
                        <div className="p-2 flex flex-col justify-between min-h-full">
                            <Table>
                                <Thead>
                                    <Tr>
                                        <Th textAlign="center" w="10px">
                                            Nomer
                                        </Th>
                                        <Th textAlign="center" w="300px">
                                            Username
                                        </Th>
                                        <Th textAlign="center" w="100px">
                                            Pengembalian
                                        </Th>
                                        <Th textAlign="center" w="800px">
                                            Peminjaman
                                        </Th>
                                        <Th textAlign="center">
                                            Waktu Peminjaman
                                        </Th>
                                        <Th textAlign="center">
                                            Waktu Pengembalian
                                        </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {logs?.data.map((log, index) => {
                                        const actualDate =
                                            log.actual_return_date
                                                ? new Date(
                                                      log.actual_return_date
                                                  )
                                                : null;
                                        const returnDate = new Date(
                                            log.return_date
                                        );
                                        let statusClass = "";

                                        if (
                                            actualDate &&
                                            actualDate > returnDate
                                        ) {
                                            statusClass = "#E53E3E";
                                        } else if (
                                            actualDate &&
                                            actualDate < returnDate
                                        ) {
                                            statusClass = "#48BB78";
                                        } else {
                                            statusClass =
                                                "rgba(255, 255, 255, 0.48)";
                                        }
                                        return (
                                            <Tr
                                                key={log.id}
                                                bg={
                                                    actualDate
                                                        ? statusClass
                                                        : ""
                                                }
                                            >
                                                <Td textAlign="center">
                                                    {index + logs.from}
                                                </Td>
                                                <Td textAlign="center">
                                                    {log.user.username}
                                                </Td>
                                                <Td
                                                    display="flex"
                                                    justifyContent="center"
                                                >
                                                    <div className="w-[70px] h-[70px] overflow-hidden">
                                                        {log.photo ? (
                                                            <img
                                                                className="w-full h-full object-cover"
                                                                src={`/storage/photos/${log.photo}`}
                                                            />
                                                        ) : (
                                                            <div className="h-full flex items-center justify-center">
                                                                <Minus />
                                                            </div>
                                                        )}
                                                    </div>
                                                </Td>
                                                <Td>
                                                    <h1 className="text-lg">
                                                        <span className="font-bold">
                                                            Barang:{" "}
                                                        </span>
                                                        {log.item.name}
                                                    </h1>
                                                    <p className="text-sm">
                                                        <span className="font-bold">
                                                            Alasan:{" "}
                                                        </span>
                                                        {log.reason}
                                                    </p>
                                                </Td>
                                                <Td textAlign="center">
                                                    {log.rent_date}
                                                </Td>
                                                <Td textAlign="center">
                                                    {log.actual_return_date ? (
                                                        log.actual_return_date
                                                    ) : (
                                                        <div className="flex justify-center">
                                                            <Minus />
                                                        </div>
                                                    )}
                                                </Td>
                                            </Tr>
                                        );
                                    })}
                                </Tbody>
                            </Table>
                            <Pagination
                                className="mt-5"
                                total={logs.total}
                                from={logs.from}
                                to={logs.to}
                                prevPageUrl={logs.prev_page_url}
                                nextPageUrl={logs.next_page_url}
                                links={logs.links}
                                currentPage={logs.current_page}
                            />
                        </div>
                    </div>
                </section>
            </Dashboardlayout>
        </>
    );
};

export default RequestPage;
