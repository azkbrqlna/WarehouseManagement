import OverviewCard from "@/Components/Fragments/OverviewCard";
import Dashboardlayout from "@/Layouts/DashboardLayout";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import { ArrowCounterClockwise, Note } from "@phosphor-icons/react";

const RequestPage = ({
    rental_count,
    return_count,
    rental_log,
    return_log,
}) => {
    return (
        <>
            <Dashboardlayout title="Request">
                <section className="grid grid-flow-col gap-5 mt-10">
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
                <section className="mt-10">
                    <div className="w-full h-[37rem] rounded-lg bg-white pb-16">
                        <div className="p-2">
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
                                    {return_log.map((retur, index) => {
                                        const rental = rental_log.find(
                                            (r) => r.user_id === retur.user_id
                                        );
                                        return (
                                            <Tr key={retur.id}>
                                                <Td textAlign="center">
                                                    {index + 1}
                                                </Td>
                                                <Td textAlign="center">
                                                    {retur.user.username}
                                                </Td>
                                                <Td
                                                    display="flex"
                                                    justifyContent="center"
                                                >
                                                    <div className="w-20 h-20 overflow-hidden">
                                                        <img
                                                            className="w-full h-full object-cover"
                                                            src={`/storage/photos/${retur.photo}`}
                                                        />
                                                    </div>
                                                </Td>
                                                <Td>
                                                    <h1 className="text-lg">
                                                        <span className="font-bold">
                                                            Barang:{" "}
                                                        </span>
                                                        {retur.item.name}
                                                    </h1>
                                                    <p className="text-sm">
                                                        <span className="font-bold">
                                                            Alasan:{" "}
                                                        </span>
                                                        {rental.reason}
                                                    </p>
                                                </Td>
                                                <Td textAlign="center">
                                                    {rental.rent_date}
                                                </Td>
                                                <Td textAlign="center">
                                                    {retur.actual_return_date}
                                                </Td>
                                            </Tr>
                                        );
                                    })}
                                </Tbody>
                            </Table>
                        </div>
                    </div>
                </section>
            </Dashboardlayout>
        </>
    );
};

export default RequestPage;
