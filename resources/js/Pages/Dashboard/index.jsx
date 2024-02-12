import { Minus } from "@phosphor-icons/react";
import LogoDashboard from "../../../asset/background-dashboard.png";
import OverviewCard from "@/Components/Fragments/OverviewCard";
import Dashboardlayout from "@/Layouts/DashboardLayout";
import { Badge } from "@chakra-ui/react";
import Pagination from "@/Components/Fragments/Pagination";

const Dashboard = ({
    auth,
    user_all,
    user_rental,
    item_all,
    item_available,
    item_notAvailable,
    rental_count,
    return_count,
    total_requests,
    logs,
}) => {
    return (
        <>
            <Dashboardlayout title="Dashboard">
                <section className="relative flex items-center justify-between py-10 mt-5 space-y-2 shadow-sm px-20 2xl:px-36 bg-white rounded-xl z-10">
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
                    <div className="absolute right-20 2xl:right-40 w-40">
                        <img
                            src={LogoDashboard}
                            className="object-cover w-full"
                        />
                    </div>
                </section>
                <section className="grid grid-cols-4 gap-5 mt-5">
                    <OverviewCard
                        title="Total Requests"
                        total={total_requests}
                        content="Borrow"
                        value={rental_count}
                    />
                    <OverviewCard
                        title="Total Requests"
                        total={total_requests}
                        content="Return"
                        value={return_count}
                    />
                    <OverviewCard
                        title="Total Users"
                        total={user_all}
                        content="Borrower"
                        value={user_rental}
                    />
                    <OverviewCard
                        title="Total Items"
                        total={item_all}
                        content="Available"
                        value={item_available}
                    >
                        <p className="text-xs font-light text-neutral-400">
                            Not Available{" "}
                            <span className="text-red-500">
                                {item_notAvailable}
                            </span>
                        </p>
                    </OverviewCard>
                </section>
                <section className="bg-white mt-5 rounded-md max-h-full p-5">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden text-xs">
                        <thead className="bg-neutral-200 text-left">
                            <tr className="divide-x-2 divide-neutral-300">
                                <th className="px-2 py-1 w-10">No.</th>
                                <th className="px-2 py-1">Username</th>
                                <th className="px-2 py-1 w-32">Barang</th>
                                <th className="px-2 py-1 w-48">Peminjaman</th>
                                <th className="px-2 py-1 w-20">Pengembalian</th>
                                <th className="px-2 py-1 w-[150px]">
                                    Tanggal Peminjaman
                                </th>
                                <th className="px-2 py-1 w-[150px]">
                                    Tanggal Pengembalian
                                </th>
                                <th className="px-2 py-1 w-24">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {logs?.data.map((log, index) => {
                                const actualDate = log.actual_return_date
                                    ? new Date(log.actual_return_date)
                                    : null;
                                const returnDate = new Date(log.return_date);
                                return (
                                    <tr key={index}>
                                        <td className="px-2 py-1">
                                            {log.id + "."}
                                        </td>
                                        <td className="px-2 py-1">
                                            {log.user.username}
                                        </td>
                                        <td className="px-2 py-1">
                                            {log.item.name}
                                        </td>
                                        <td className="px-2 py-1">
                                            {log.reason}
                                        </td>
                                        <td className="px-2 py-1 text-center">
                                            <div className="w-full overflow-hidden flex justify-center">
                                                {log.photo ? (
                                                    <h1>Returning</h1>
                                                ) : (
                                                    <div className="h-full flex items-center justify-center">
                                                        <Minus />
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-2 py-1 text-center">
                                            {log.rent_date}
                                        </td>
                                        <td className="px-2 py-1 text-center">
                                            {log.actual_return_date ? (
                                                log.actual_return_date
                                            ) : (
                                                <div className="flex justify-center">
                                                    <Minus />
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-2 py-1 text-center">
                                            {actualDate &&
                                            actualDate > returnDate ? (
                                                <Badge
                                                    borderRadius="10px"
                                                    textTransform="capitalize"
                                                    colorScheme="yellow"
                                                >
                                                    Late
                                                </Badge>
                                            ) : actualDate &&
                                              actualDate < returnDate ? (
                                                <Badge
                                                    borderRadius="10px"
                                                    textTransform="capitalize"
                                                    colorScheme="green"
                                                >
                                                    Accepted
                                                </Badge>
                                            ) : (
                                                <Badge
                                                    borderRadius="10px"
                                                    textTransform="capitalize"
                                                    colorScheme="red"
                                                >
                                                    Not Accepted
                                                </Badge>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <Pagination
                        className="mt-3"
                        total={logs?.total}
                        from={logs?.from}
                        to={logs?.to}
                        prevPageUrl={logs?.prev_page_url}
                        nextPageUrl={logs?.next_page_url}
                        links={logs?.links}
                        currentPage={logs?.current_page}
                    />
                </section>
            </Dashboardlayout>
        </>
    );
};

export default Dashboard;
