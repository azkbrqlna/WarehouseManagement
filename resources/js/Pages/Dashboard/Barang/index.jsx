import InputSearch from "@/Components/Fragments/InputSearch";
import Pagination from "@/Components/Fragments/Pagination";
import ItemForm from "@/Components/ItemDashboard/ItemForm";
import AdminLayout from "@/Layouts/AdminLayout";
import { Button, useDisclosure, useToast } from "@chakra-ui/react";
import { useForm, router } from "@inertiajs/react";
import { UserPlus } from "@phosphor-icons/react";
import { useState } from "react";
import ModalEditItem from "@/Components/ItemDashboard/ModalEditItem";
import TableRow from "@/Components/ItemDashboard/TableRow";

export default function BarangPage({ items, item_count }) {
    const toast = useToast();
    const [isEditModal, setModalEdit] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const { delete: destroy } = useForm();
    const {
        isOpen: isModalOpen,
        onOpen: onModalOpen,
        onClose: onModalClose,
    } = useDisclosure();

    const {
        isOpen: isAlertDialogOpen,
        onOpen: onAlertDialogOpen,
        onClose: onAlertDialogClose,
    } = useDisclosure();

    const createItem = useForm({
        name: "",
        total_item: 0,
        jenis: "",
        file: null,
    });

    const editItem = useForm({
        name: "",
        total_item: 0,
        jenis: "",
        file: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        createItem.post("/items", {
            onSuccess: () => {
                createItem.reset();
                toast({
                    title: "Berhasil membuat barang!",
                    status: "success",
                });
                onModalClose();
            },
            onError: () => {
                toast({
                    title: "Gagal menambahkan barang",
                    status: "error",
                });
            },
        });
    };

    const handleSubmitEdit = (id) => {
        editItem.post(`/item/${id}`, {
            onSuccess: () => {
                editItem.reset();
                toast({
                    title: "Berhasil update barang!",
                    status: "success",
                });
                setModalEdit(!isEditModal);
            },
            onError: (err) => {
                toast({
                    title: "Gagal update barang",
                    status: "error",
                });
                console.log(err);
            },
        });
    };

    const handleChangeCreate = (e) => {
        createItem.setData(e.target.name, e.target.value);
    };

    const handleChangeEdit = (e) => {
        editItem.setData(e.target.name, e.target.value);
    };

    const handleClick = (id) => {
        destroy(`/item/${id}`, {
            onSuccess: () => {
                toast({
                    title: "Berhasil menghapus barang!",
                    status: "success",
                });
            },
            onError: (err) => {
                toast({
                    title: "Gagal menghapus barang",
                    status: "error",
                });
                console.log(err);
            },
            onFinish: () => {
                onAlertDialogClose();
            },
        });
    };

    const handleSwitch = (id, status) => {
        router.patch(`item/${id}`, { status });
    };

    const handleEditClick = (item) => {
        setSelectedItem(item);
        setModalEdit(!isEditModal);
        editItem.setData({
            name: item.name,
            total_item: Number(item.total_item),
            file: new File([Blob], item.cover, { type: "image/*" }),
            _method: "PUT",
        });
    };
    console.log(createItem)

    return (
        <>
            <AdminLayout
                title="Items"
                content="Add Item"
                icon={UserPlus}
                isOpen={isModalOpen}
                onOpen={onModalOpen}
                onClose={onModalClose}
                modalBody={
                    <ItemForm
                        id="add_item"
                        data={createItem.data}
                        setData={createItem.setData}
                        errors={createItem.errors}
                        handleChange={handleChangeCreate}
                        onSubmit={handleSubmit}
                    />
                }
                modalHeader="Add Item"
                modalFooter={
                    <Button
                        type="submit"
                        form="add_item"
                        bg="#000"
                        _hover={{ background: "#333" }}
                        color="white"
                    >
                        Create Item
                    </Button>
                }
            >
                <header className="bg-white mt-5 rounded-md max-h-screen p-5">
                    <div className="flex justify-between">
                        <h1 className="font-bold">All Items {item_count}</h1>
                        <InputSearch />
                    </div>
                    <div className="mt-5">
                        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden text-xs">
                            <thead className="bg-neutral-200 text-left">
                                <tr className="divide-x-2 divide-neutral-300">
                                    <th className="px-4 py-2 w-10">No.</th>
                                    <th className="px-4 py-2">Item</th>
                                    <th className="px-4 py-2 w-28">Status</th>
                                    <th className="px-4 py-2 w-10">Quantity</th>
                                    <th className="px-4 py-2 w-10">Jenis</th>
                                    <th className="px-4 py-2 w-10">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {items?.data?.map((item, index) => (
                                    <TableRow
                                        key={item.id}
                                        item={item}
                                        index={index}
                                        handleSwitch={handleSwitch}
                                        handleEditClick={handleEditClick}
                                        onAlertDialogOpen={onAlertDialogOpen}
                                        isAlertDialogOpen={isAlertDialogOpen}
                                        onAlertDialogClose={onAlertDialogClose}
                                        handleClick={handleClick}
                                    />
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
            <ModalEditItem
                isEditModal={isEditModal}
                data={editItem.data}
                setData={editItem.setData}
                errors={editItem.errors}
                handleChangeEdit={handleChangeEdit}
                onModalClose={() => setModalEdit(!isEditModal)}
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmitEdit(selectedItem && selectedItem.id);
                }}
            />
        </>
    );
}
