import React from "react";
import Dashboardlayout from "@/Layouts/DashboardLayout";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Minus } from "@phosphor-icons/react";
import Pagination from "@/Components/Fragments/Pagination";
import { SearchIcon } from "@chakra-ui/icons";

export default function LogsPage({ logs }) {
    console.log(logs);
    return (
        <Dashboardlayout title="Logs">
            <header className="bg-white mt-5 rounded-md max-h-full p-5">
                <div className="flex justify-end">
                    <div>
                        <InputGroup color="red">
                            <InputLeftElement
                                pointerEvents="none"
                                children={<SearchIcon color="gray.300" />}
                            />
                            <Input type="text" placeholder="Search" />
                        </InputGroup>
                    </div>
                </div>
                <div className="mt-5">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden text-xs">
                        <thead className="bg-neutral-200 text-left">
                            <tr className="divide-x-2 divide-neutral-300">
                                <th className="px-4 py-2 w-10">No.</th>
                                <th className="px-4 py-2">Username</th>
                                <th className="px-4 py-2 w-32">Barang</th>
                                <th className="px-4 py-2 w-64">Peminjaman</th>
                                <th className="px-4 py-2 w-20">Pengembalian</th>
                                <th className="px-4 py-2 w-[150px]">
                                    Tanggal Peminjaman
                                </th>
                                <th className="px-4 py-2 w-40">
                                    Tanggal Pengembalian
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {logs?.data.map((log, index) => {
                                const actualDate = log.actual_return_date
                                    ? new Date(log.actual_return_date)
                                    : null;
                                const returnDate = new Date(log.return_date);
                                let statusClass = "";

                                if (actualDate && actualDate > returnDate) {
                                    statusClass = "bg-red-500";
                                } else if (
                                    actualDate &&
                                    actualDate < returnDate
                                ) {
                                    statusClass = "bg-green-500";
                                } else {
                                    statusClass = "bg-yellow-500";
                                }
                                return (
                                    <tr
                                        key={index}
                                        className={`${
                                            actualDate ? statusClass : ""
                                        }`}
                                    >
                                        <td className="px-4 py-2">
                                            {index + 1 + "."}
                                        </td>
                                        <td className="px-4 py-2">
                                            {log.user.username}
                                        </td>
                                        <td className="px-4 py-2">
                                            {log.item.name}
                                        </td>
                                        <td className="px-4 py-2">
                                            <h1 className="text-sm">
                                                <span className="font-bold">
                                                    Barang:{" "}
                                                </span>
                                                {log.item.name}
                                            </h1>{" "}
                                            <p className="text-xs">
                                                <span className="font-bold">
                                                    Alasan:{" "}
                                                </span>
                                                {log.reason}
                                            </p>
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            <div className="w-full overflow-hidden flex justify-center">
                                                {log.photo ? (
                                                    <img
                                                        className="w-[40px] h-[40px] object-cover"
                                                        src={`/storage/photos/${log.photo}`}
                                                    />
                                                ) : (
                                                    <div className="h-full flex items-center justify-center">
                                                        <Minus />
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {log.rent_date}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {log.actual_return_date ? (
                                                log.actual_return_date
                                            ) : (
                                                <div className="flex justify-center">
                                                    <Minus />
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <Pagination
                    className="mt-5"
                    total={logs?.total}
                    from={logs?.from}
                    to={logs?.to}
                    prevPageUrl={logs?.prev_page_url}
                    nextPageUrl={logs?.next_page_url}
                    links={logs?.links}
                    currentPage={logs?.current_page}
                />
            </header>
        </Dashboardlayout>
    );
}
