import { useForm } from "@inertiajs/react";
import { UserPlus } from "@phosphor-icons/react";
import { useDisclosure, useToast, Button } from "@chakra-ui/react";
import Pagination from "@/Components/Fragments/Pagination";
import AdminLayout from "@/Layouts/AdminLayout";
import { useState } from "react";
import InputSearch from "@/Components/Fragments/InputSearch";
import UserForm from "@/Components/UsersDashboard/UserForm";
import UserTable from "@/Components/UsersDashboard/UserTable";

const UsersPage = ({ users, users_count }) => {
    const toast = useToast();
    const [showPassword, setShowPassword] = useState(false);
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
    const { data, setData, post, errors, delete: destroy } = useForm({
        username: "",
        kelas: "",
        nis: "",
        role_id: "",
        password: "",
    });

    const handleClick = (slug) => {
        destroy(`/user/${slug}`, {
            onSuccess: () => {
                toast({
                    title: "Berhasil menghapus user!",
                    status: "success",
                });
            },
            onError: () => {
                toast({
                    title: "Gagal menghapus user",
                    status: "error",
                });
            },
            onFinish: () => {
                onAlertDialogClose();
            },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/users", {
            onSuccess: () => {
                toast({
                    title: "Berhasil membuat user!",
                    status: "success",
                });
                onModalClose();
                setData({
                    username: "",
                    kelas: "",
                    nis: "",
                    role_id: "",
                    password: "",
                });
            },
            onError: () => {
                toast({
                    title: "Mohon cek lagi!",
                    status: "error",
                });
            },
        });
    };

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <AdminLayout
                title="Users"
                content="Add User"
                icon={UserPlus}
                isOpen={isModalOpen}
                onOpen={onModalOpen}
                onClose={onModalClose}
                modalHeader="Add User"
                modalBody={
                    <UserForm
                        id="add_user"
                        errors={errors}
                        data={data}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        handleShowPassword={handleShowPassword}
                        showPassword={showPassword}
                    />
                }
                modalFooter={
                    <Button
                        type="submit"
                        form="add_user"
                        bg="#000"
                        _hover={{ background: "#333" }}
                        textColor="white"
                    >
                        Create User
                    </Button>
                }
            >
                <header className="bg-white mt-5 rounded-md max-h-screen p-5">
                    <div className="flex justify-between">
                        <h1 className="text-base font-bold">
                            All Users {users_count}
                        </h1>
                        <InputSearch />
                    </div>
                    <div className="mt-5">
                        <UserTable
                            users={users}
                            onAlertDialogOpen={onAlertDialogOpen}
                            handleClick={handleClick}
                            isAlertDialogOpen={isAlertDialogOpen}
                            onAlertDialogClose={onAlertDialogClose}
                        />
                    </div>
                    <Pagination
                        className="mt-5"
                        total={users?.total}
                        from={users?.from}
                        to={users?.to}
                        prevPageUrl={users?.prev_page_url}
                        nextPageUrl={users?.next_page_url}
                        links={users.links}
                        currentPage={users?.current_page}
                    />
                </header>
            </AdminLayout>
        </>
    );
};

export default UsersPage;
