import { Link, useForm, usePage } from "@inertiajs/react";
import {
    ArrowArcLeft,
    CaretLeft,
    Trash,
    UserPlus,
} from "@phosphor-icons/react";
import { Plus } from "@phosphor-icons/react";
import {
    Button,
    Input,
    InputGroup,
    InputLeftAddon,
    InputLeftElement,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    theme,
    useToast,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Dashboardlayout from "@/Layouts/DashboardLayout";
import Sidebar from "@/Layouts/Sidebar";
import Pagination from "@/Components/Fragments/Pagination";
import AdminLayout from "@/Layouts/AdminLayout";

const UsersPage = ({ users, users_count }) => {
    const toast = useToast();
    const { delete: destroy } = useForm();
    const handleClick = (slug) => {
        if (window.confirm("Ingin menghapus user ini?")) {
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
            });
        }
    };
    return (
        <>
            <AdminLayout title="Users" content="Add User" href="/user/create" icon={UserPlus}>
                <header className="bg-white mt-5 rounded-md max-h-screen p-5">
                    <div className="flex justify-between">
                        <h1 className="text-base font-bold">
                            All Users {users_count}
                        </h1>
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
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">NIS</th>
                                    <th className="px-4 py-2">Class</th>
                                    <th className="px-4 py-2">Role</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {users?.data.map((user) => (
                                    <tr
                                        className="divide-x-2 divide-neutral-300"
                                        key={user.id}
                                    >
                                        <td className="px-4 py-2">
                                            {user.username}
                                        </td>
                                        <td className="px-4 py-2">
                                            {user.nis}
                                        </td>
                                        <td className="px-4 py-2">
                                            {user.kelas}
                                        </td>
                                        <td className="px-4 py-2">User</td>
                                    </tr>
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
                        links={users?.links}
                        currentPage={users?.current_page}
                    />
                </header>
            </AdminLayout>
        </>
    );
};

export default UsersPage;
