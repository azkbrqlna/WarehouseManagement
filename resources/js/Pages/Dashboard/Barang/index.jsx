import Pagination from "@/Components/Fragments/Pagination";
import AdminLayout from "@/Layouts/AdminLayout";
import Dashboardlayout from "@/Layouts/DashboardLayout";
import { SearchIcon } from "@chakra-ui/icons";
import {
    Button,
    Input,
    InputGroup,
    InputLeftAddon,
    InputLeftElement,
    Switch,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useToast,
} from "@chakra-ui/react";
import { Link, useForm, router } from "@inertiajs/react";
import { ListPlus, Trash, UserPlus } from "@phosphor-icons/react";

export default function BarangPage({ items, flash, item_count }) {
    const toast = useToast();
    const { delete: destroy } = useForm();

    const handleClick = (slug) => {
        confirm("Ingin menghapus barang ini?"),
            destroy(`/item/${slug}`, {
                onSuccess: () => {
                    toast({
                        title: flash.success,
                        status: "success",
                    });
                },
                onError: () => {
                    toast({
                        title: "Gagal menghapus barang",
                        status: "error",
                    });
                },
            });
    };

    const handleSwitch = (id, status) => {
        router.patch(`item/${id}`, { status });
    };
    console.log(item_count);
    return (
        <>
            <AdminLayout
                title="Items"
                content="Add Item"
                href="/item/create"
                icon={UserPlus}
            >
                <header className="bg-white mt-5 rounded-md max-h-screen p-5">
                    <div className="flex justify-between">
                        <h1 className="font-bold">All Items {item_count}</h1>
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
                                    <th className="px-4 py-2">Barang</th>
                                    <th className="px-4 py-2 w-28">Status</th>
                                    <th className="px-4 py-2 w-10">Jumlah</th>
                                    <th className="px-4 py-2 w-40">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {items?.data.map((item, index) => (
                                    <tr
                                        className="divide-x-2 divide-neutral-300"
                                        key={item.id}
                                    >
                                        <td className="px-2 py-1 text-center">
                                            {index + 1 + "."}
                                        </td>
                                        <td className="px-2 py-1">
                                            {item.name}
                                        </td>
                                        <td className="px-2 py-1 text-center">
                                            <Switch
                                                size="lg"
                                                isChecked={item.status}
                                                onChange={() =>
                                                    handleSwitch(
                                                        item.id,
                                                        !item.status
                                                    )
                                                }
                                            />
                                        </td>
                                        <td className="px-2 py-1 text-center">
                                            {item.amount}
                                        </td>
                                        <td className="px-2 py-1 flex justify-center">
                                            <button
                                                className="bg-red-500 text-white hover:bg-red-400 px-2 py-1 rounded-md flex items-center"
                                                onClick={() =>
                                                    handleClick(item.slug)
                                                }
                                            >
                                                <Trash size={16} />
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Pagination
                        className="mt-5"
                        total={items?.total}
                        from={items?.from}
                        to={items?.to}
                        prevPageUrl={items?.prev_page_url}
                        nextPageUrl={items?.next_page_url}
                        links={items?.links}
                        currentPage={items?.current_page}
                    />
                </header>
            </AdminLayout>
        </>
    );
}
