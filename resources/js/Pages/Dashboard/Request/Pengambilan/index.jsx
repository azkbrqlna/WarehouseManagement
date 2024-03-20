import { ArrowDown, ArrowLeft, Check, X } from "@phosphor-icons/react";
import { Collapse, useDisclosure, useToast } from "@chakra-ui/react";
import { router } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import Pagination from "@/Components/Fragments/Pagination";

const Rental = ({ pickup, index, items, pickups }) => {
    const toast = useToast();
    const { isOpen, onToggle } = useDisclosure();
    const availableItem = items.find((item) => item.id === pickup.item_id);

    const handleAccept = (id, status) => {
        if (availableItem?.total_item >= pickup.amount_pickup) {
            router.patch(
                `/request/pickup/${id}`,
                {
                    user_id: pickup.user_id,
                    item_id: pickup.item_id,
                    reason: pickup.reason,
                    status,
                    pickup_date: pickup.pickup_date,
                    pickup_date_received: new Date().toISOString(),
                },
                {
                    onSuccess: () => {
                        toast({
                            title: "Berhasil menyetujui peminjaman",
                            status: "success",
                        });
                        const userSameItem = pickups?.data.filter(
                            (borrow) =>
                                borrow.item_id === pickup.item_id &&
                                borrow.id !== pickup.id
                        );
                        userSameItem.forEach((item) => {
                            if (
                                availableItem?.total_item -
                                    pickup.amount_pickup <
                                item.amount_pickup
                            ) {
                                toast({
                                    title: `Menghapus request ${item.id} karena melebihi quota`,
                                    status: "success",
                                });
                            }
                        });
                    },
                    onError: (error) => {
                        console.log(error);
                        toast({
                            title: "Gagal menyetujui peminjaman",
                            status: "error",
                        });
                    },
                }
            );
        } else {
            alert("Request melebihi jumlah barang!");
        }
    };

    const handleDeclined = (id) => {
        router.delete(`/request/rental/${id}`, {
            onSuccess: () => {
                toast({
                    title: "Berhasil menolak peminjaman",
                    status: "success",
                });
            },
            onError: () => {
                toast({
                    title: "Gagal menolak peminjaman",
                    status: "error",
                });
            },
        });
    };

    return (
        <>
            <tr key={index}>
                <td className="align-top px-4 pt-4">{index + 1}</td>
                <td className="align-top px-4 pt-4">{pickup.user.username}</td>
                <td className="align-top px-4 pt-4 max-w-max">
                    {pickup.user.nis}
                </td>
                <td className="align-top px-4 pt-4 max-w-max">
                    {pickup.user.kelas}
                </td>
                <td className="px-4 py-2 w-80">
                    <button
                        onClick={onToggle}
                        className="p-2 bg-black rounded-md w-full text-white flex justify-center items-center"
                    >
                        <ArrowDown size={20} />
                        Request
                    </button>
                    <Collapse in={isOpen} animateOpacity>
                        <div className="border border-black rounded-md p-2">
                            <h1>
                                Barang yang diambil:{" "}
                                <span className="font-semibold">
                                    {pickup.item.name}
                                </span>
                            </h1>
                            <p>
                                Alasan:{" "}
                                <span className="font-medium">
                                    {pickup.reason}
                                </span>
                            </p>
                            <p>
                                Jumlah:{" "}
                                <span className="font-medium">
                                    {pickup.amount_pickup}
                                </span>
                            </p>
                        </div>
                    </Collapse>
                </td>
                <td className="flex px-4 py-2 gap-1">
                    <button
                        onClick={() => handleAccept(pickup.id, pickup.status)}
                        className="p-2 bg-green-600 hover:bg-green-500 transition-all duration-100 ease-in rounded-full w-full text-white flex justify-center items-center"
                    >
                        <Check size={16} />
                    </button>
                    <button
                        onClick={() => handleDeclined(pickup.id, false)}
                        className="p-2 bg-red-600 hover:bg-red-500 transition-all duration-100 ease-in rounded-full w-full text-white flex justify-center items-center"
                    >
                        <X size={16} />
                    </button>
                </td>
            </tr>
        </>
    );
};
const RequestPage = ({ pickups, items }) => {
    return (
        <>
            <AdminLayout
                title="Borrow"
                content="Back"
                href="/requests"
                icon={ArrowLeft}
                onOpen={() => window.location.href = "/dashboard"}
            >
                <header className="bg-white rounded-md max-h-screen p-3 mt-5">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-neutral-200 text-left">
                            <tr className="divide-x-2 divide-neutral-300">
                                <th className="px-3 py-1 max-w-max">No.</th>
                                <th className="px-3 py-1">Username</th>
                                <th className="px-3 py-1">NIS</th>
                                <th className="px-3 py-1">Kelas</th>
                                <th className="px-3 py-1">Requests</th>
                                <th className="px-3 py-1 w-20">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {pickups?.data.map((pickup, index) => (
                                <Rental
                                    key={index}
                                    pickup={pickup}
                                    index={index}
                                    items={items}
                                    pickups={pickups}
                                />
                            ))}
                        </tbody>
                    </table>
                    <Pagination
                        className="mt-5"
                        total={pickups?.total}
                        from={pickups?.from}
                        to={pickups?.to}
                        prevPageUrl={pickups?.prev_page_url}
                        nextPageUrl={pickups?.next_page_url}
                        links={pickups?.links}
                        currentPage={pickups?.current_page}
                    />
                </header>
            </AdminLayout>
        </>
    );
};

export default RequestPage;
