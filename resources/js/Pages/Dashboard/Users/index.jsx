import { useForm } from "@inertiajs/react";
import { UserPlus } from "@phosphor-icons/react";
import { useDisclosure, useToast, Button } from "@chakra-ui/react";
import Pagination from "@/Components/Fragments/Pagination";
import AdminLayout from "@/Layouts/AdminLayout";
import { useState } from "react";
import InputSearch from "@/Components/Fragments/InputSearch";
import UserForm from "@/Components/UsersDashboard/UserForm";
import UserTable from "@/Components/UsersDashboard/UserTable";
import ModalEditUser from "@/Components/UsersDashboard/ModalEditUser";

const UsersPage = ({ users, users_count }) => {
    const toast = useToast();
    const [showPassword, setShowPassword] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalEdit, setModalEdit] = useState(false);
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
    const createUser = useForm({
        username: "",
        kelas: "",
        nis: "",
        role_id: "",
        password: "",
    });

    const editUser = useForm({
        username: "",
        kelas: "",
        nis: "",
        role_id: "",
        password: "",
    });

    const handleClick = (id) => {
        createUser.delete(`/user/${id}`, {
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
        createUser.post("/users", {
            onSuccess: () => {
                toast({
                    title: "Berhasil membuat user!",
                    status: "success",
                });
                onModalClose();
                createUser.reset();
            },
            onError: () => {
                toast({
                    title: "Mohon cek lagi!",
                    status: "error",
                });
            },
        });
    };

    const handleEdit = (e, id) => {
        e.preventDefault();
        editUser.post(`/user/${id}`, {
            onSuccess: () => {
                toast({
                    title: "Berhasil mengedit user!",
                    status: "success",
                });
                onModalClose();
                createUser.reset();
            },
            onError: () => {
                toast({
                    title: "Mohon cek lagi!",
                    status: "error",
                });
            },
        });
    };

    const handleChangeCreate = (e) => {
        createUser.setData(e.target.name, e.target.value);
    };

    const handleChangeEdit = (e) => {
        editUser.setData(e.target.name, e.target.value);
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleEditClick = (user) => {
        setSelectedUser(user);
        setModalEdit(!isModalEdit);
        editUser.setData({
            username: user.username,
            kelas: user.kelas,
            nis: user.nis,
            role_id: user.role_id,
            password: user.password,
        });
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
                        errors={createUser.errors}
                        data={createUser.data}
                        handleChange={handleChangeCreate}
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
                        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden text-xs">
                            <thead className="bg-neutral-200 text-left">
                                <tr className="divide-x-2 divide-neutral-300">
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">NIS</th>
                                    <th className="px-4 py-2">Class</th>
                                    <th className="px-4 py-2 w-10">Role</th>
                                    <th className="px-4 py-2 w-10">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {users?.data.map((user, index) => (
                                    <UserTable
                                        key={index}
                                        user={user}
                                        onAlertDialogOpen={onAlertDialogOpen}
                                        isAlertDialogOpen={isAlertDialogOpen}
                                        onAlertDialogClose={onAlertDialogClose}
                                        handleClick={handleClick}
                                        handleEditClick={handleEditClick}
                                    />
                                ))}
                            </tbody>
                        </table>
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
            <ModalEditUser
                isEdit={isModalEdit}
                selected={selectedUser && selectedUser.username}
                onModalClose={() => setModalEdit(!isModalEdit)}
                name="User"
                id="edit_user"
                handleSubmit={handleEdit}
                data={editUser.data}
                errors={editUser.errors}
                handleChange={handleChangeEdit}
                handleShowPassword={handleShowPassword}
                showPassword={showPassword}
            />
        </>
    );
};

export default UsersPage;
