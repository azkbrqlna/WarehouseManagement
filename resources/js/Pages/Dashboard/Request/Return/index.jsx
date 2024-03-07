import { ArrowDown, Check, X } from "@phosphor-icons/react";
import { Collapse, useDisclosure, useToast } from "@chakra-ui/react";
import { router } from "@inertiajs/react";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import AdminLayout from "@/Layouts/AdminLayout";
import Pagination from "@/Components/Fragments/Pagination";

const Return = ({ refund, index }) => {
    const toast = useToast();
    const { isOpen, onToggle } = useDisclosure();
    const handleAccept = (id, status) => {
        router.patch(
            `/request/return/${id}`,
            {
                status,
                item_id: id,
                photo: `/storage/photos/${refund.photo}`,
                actual_return_date: new Date().toISOString(),
            },
            {
                onSuccess: () => {
                    toast({
                        title: "Berhasil menyetujui pengembalian",
                        status: "success",
                    });
                },
                onError: () => {
                    toast({
                        title: "Gagal menyetujui pengembalian",
                        status: "error",
                    });
                },
            }
        );
    };

    const handleDeclined = (id) => {
        router.delete(
            `/request/return/${id}`,
            {
                onSuccess: () => {
                    toast({
                        title: "Berhasil menolak peminjaman",
                        status: "success",
                    });
                    console.log("berhasil")
                },
                onError: () => {
                    toast({
                        title: "Gagal menolak peminjaman",
                        status: "error",
                    });
                },
            }
        );
    };

    return (
        <>
            <tr key={index}>
                <td className="align-top px-4 py-2 w-16">{index + 1 + "."}</td>
                <td className="align-top px-4 py-2 w-60">{refund.user.username}</td>
                <td className="align-top px-4 py-2 w-10">{refund.user.nis}</td>
                <td className="align-top px-4 py-2 w-20">{refund.user.kelas}</td>
                <td className="align-top px-4 py-2 w-20">
                    <button
                        onClick={onToggle}
                        className="p-2 bg-black rounded-md w-full text-white flex justify-center items-center"
                    >
                        <ArrowDown size={20} />
                        Pengembalian
                    </button>
                    <Collapse in={isOpen} animateOpacity>
                        <div className="p-2 border border-black rounded-md">
                            <img
                                src={`/storage/photos/${refund.photo}`}
                                className="w-10 h-10 object-cover mx-auto"
                            />
                        </div>
                    </Collapse>
                </td>
                <td className="flex px-4 py-2 gap-1">
                    <button
                        onClick={() => handleAccept(refund.id)}
                        className="p-2 bg-green-600 hover:bg-green-500 transition-all duration-100 ease-in rounded-md w-full text-white flex justify-center items-center"
                    >
                        <Check size={20} />
                    </button>
                    <button
                        onClick={() => handleDeclined(refund.id)}
                        className="p-2 bg-red-600 hover:bg-red-500 transition-all duration-100 ease-in rounded-md w-full text-white flex justify-center items-center"
                    >
                        <X size={20} />
                    </button>
                </td>
            </tr>
        </>
    );
};

const RequestPage = ({ returns }) => {
    console.log(returns);
    return (
        <>
            <AdminLayout
                title="Return"
                content="Back"
                href="/requests"
                icon={ArrowLeft}
                onOpen={() => window.location.href = "/dashboard"}
            >
                <header className="bg-white mt-5 rounded-md max-h-screen p-7">
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
                            {returns?.data.map((returning, index) => (
                                <Return
                                    key={index}
                                    refund={returning}
                                    index={index}
                                />
                            ))}
                        </tbody>
                    </table>
                    <Pagination
                        className="mt-5"
                        total={returns?.total}
                        from={returns?.from}
                        to={returns?.to}
                        prevPageUrl={returns?.prev_page_url}
                        nextPageUrl={returns?.next_page_url}
                        links={returns?.links}
                        currentPage={returns?.current_page}
                    />
                </header>
            </AdminLayout>
        </>
    );
};

export default RequestPage;
