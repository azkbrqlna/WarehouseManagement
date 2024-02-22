import { ArrowDown, ArrowLeft, Check, X } from "@phosphor-icons/react";
import {
    Box,
    Button,
    Collapse,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import { router } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import Pagination from "@/Components/Fragments/Pagination";

const Rental = ({ rental, index }) => {
    const toast = useToast();
    const { isOpen, onToggle } = useDisclosure();

    const handleAccept = (id, status) => {
        router.patch(
            `/request/rental/${id}`,
            {
                user_id: rental.user_id,
                item_id: rental.item_id,
                reason: rental.reason,
                status,
                rent_date: rental.rent_date,
                return_date: rental.return_date,
            },
            {
                onSuccess: () => {
                    toast({
                        title: "Berhasil menyetujui peminjaman",
                        status: "success",
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
                <td className="align-top px-4 pt-4">{rental.user.username}</td>
                <td className="align-top px-4 pt-4 max-w-max">{rental.user.nis}</td>
                <td className="align-top px-4 pt-4 max-w-max">{rental.user.kelas}</td>
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
                                Barang yang dipinjam:{" "}
                                <span className="font-semibold">
                                    {rental.item.name}
                                </span>
                            </h1>
                            <p>
                                Alasan:{" "}
                                <span className="font-medium">
                                    {rental.reason}
                                </span>
                            </p>
                            <p>
                                Jumlah:{" "}
                                <span className="font-medium">
                                    {rental.amount_rental}
                                </span>
                            </p>
                        </div>
                    </Collapse>
                </td>
                <td className="flex px-4 py-2 gap-1">
                    <button
                        onClick={() => handleAccept(rental.id, rental.status)}
                        className="p-2 bg-green-600 hover:bg-green-500 transition-all duration-100 ease-in rounded-md w-full text-white flex justify-center items-center"
                    >
                        <Check size={20} />
                    </button>
                    <button
                        onClick={() => handleDeclined(rental.id)}
                        className="p-2 bg-red-600 hover:bg-red-500 transition-all duration-100 ease-in rounded-md w-full text-white flex justify-center items-center"
                    >
                        <X size={20} />
                    </button>
                </td>
            </tr>
        </>
    );
};
const RequestPage = ({ rentals }) => {
    return (
        <>
            <AdminLayout
                title="Borrow"
                content="Back"
                href="/requests"
                icon={ArrowLeft}
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
                            {rentals?.data.map((rental, index) => (
                                <Rental
                                    key={index}
                                    rental={rental}
                                    index={index}
                                />
                            ))}
                        </tbody>
                    </table>
                    <Pagination
                        className="mt-5"
                        total={rentals?.total}
                        from={rentals?.from}
                        to={rentals?.to}
                        prevPageUrl={rentals?.prev_page_url}
                        nextPageUrl={rentals?.next_page_url}
                        links={rentals?.links}
                        currentPage={rentals?.current_page}
                    />
                </header>
            </AdminLayout>
        </>
    );
};

export default RequestPage;
