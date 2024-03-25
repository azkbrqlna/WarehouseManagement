import { MicrosoftExcelLogo, Minus } from "@phosphor-icons/react";
import LogoDashboard from "../../../asset/background-dashboard.png";
import OverviewCard from "@/Components/Fragments/OverviewCard";
import Dashboardlayout from "@/Layouts/DashboardLayout";
import { Badge } from "@chakra-ui/react";
import Pagination from "@/Components/Fragments/Pagination";
import { formatTimeDateMonth } from "@/Components/Fragments/ListStyle";

const Dashboard = ({
    auth,
    user_all,
    user_rental,
    item_all,
    item_available,
    item_notAvailable,
    rental_all,
    return_all,
    rental_count,
    return_count,
    logs,
    pickup_all,
    pickup_count
}) => {
    return (
        <>
            <Dashboardlayout title="Dashboard">
                <section className="relative flex items-center justify-between py-10 mt-5 space-y-2 shadow-sm px-10 bg-white rounded-xl z-10">
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
                    <div className="absolute right-20 w-40">
                        <img
                            src={LogoDashboard}
                            className="object-cover w-full"
                        />
                    </div>
                </section>
                <section className="grid grid-cols-3 gap-5 mt-5">
                    <OverviewCard
                        title="Requests Borrow"
                        total={rental_count}
                        content="Borrow"
                        value={rental_all}
                    />
                    <OverviewCard
                        title="Requests Return"
                        total={return_count}
                        content="Return"
                        value={return_all}
                    />
                    <OverviewCard
                        title="Requests Pick Up"
                        total={pickup_count}
                        content="Pick Up"
                        value={pickup_all}
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
                <section className="bg-white mt-5 rounded-md max-h-full p-4 z-10">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden text-xs">
                        <thead className="bg-neutral-200 text-left">
                            <tr className="divide-x-2 divide-neutral-300">
                                <th className="p-2 w-10">No.</th>
                                <th className="px-2 w-1/5">Username</th>
                                <th className="px-2 w-1/5">Barang</th>
                                <th className="px-2">Jenis</th>
                                <th className="px-2">Reason</th>
                                <th className="px-2">Tanggal Peminjaman</th>
                                <th className="px-2">Tanggal Pengembalian</th>
                                <th className="px-2">Tanggal Pengambilan</th>
                                <th className="px-2">Action</th>
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
                                            {log.type}
                                        </td>
                                        <td className="px-2 py-1">
                                            {log.reason}
                                        </td>
                                        <td className="px-2 py-1 text-center">
                                            {log.rent_date ? (
                                                formatTimeDateMonth(log.rent_date)
                                            ) : (
                                                <Minus />
                                            )}
                                        </td>
                                        <td className="px-2 py-1 text-center">
                                            {log.actual_return_date ? (
                                                formatTimeDateMonth(log.actual_return_date)
                                            ) : (
                                                <Minus />
                                            )}
                                        </td>
                                        <td className="px-2 py-1 text-center">
                                            {log.pickup_date_received ? (
                                                formatTimeDateMonth(log.pickup_date_received)
                                            ) : (
                                                <Minus />
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
                                            ) : (actualDate &&
                                                  actualDate < returnDate) ||
                                              log.pickup_date_received ? (
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
                <div className="absolute bottom-0 right-0 flex items-end justify-end p-2 z-0">
                    <a
                        href="/dashboard/export"
                        className="p-2 rounded-full bg-white group hover:bg-green-500 hover:scale-110 transition-colors duration-200 ease-in-out"
                    >
                        <h1 className="text-2xl text-green-500 group-hover:text-white transition-colors duration-150 ease-in-out">
                            <MicrosoftExcelLogo />
                        </h1>
                    </a>
                </div>
            </Dashboardlayout>
        </>
    );
};

export default Dashboard;
