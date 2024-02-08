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
            <div className="w-full h-screen flex bg-main">
                <Sidebar />
                <main className="h-screen w-full bg-main px-10 py-16">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-3xl">Users</h1>
                        <button className="px-4 py-1 bg-black text-white rounded-md flex items-center gap-1">
                            <Plus color="#fff" />
                            <span>Add User</span>
                        </button>
                    </div>
                    <header className="bg-white mt-[50px] rounded-md max-h-screen p-7">
                        <div className="flex justify-between">
                            <h1 className="text-lg font-bold">
                                All Users {users_count}
                            </h1>
                            <div>
                                <InputGroup color="red">
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={
                                            <SearchIcon color="gray.300" />
                                        }
                                    />
                                    <Input type="text" placeholder="Search" />
                                </InputGroup>
                            </div>
                        </div>
                        <div className="mt-5">
                            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
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
                </main>
            </div>
        </>
    );
};

export default UsersPage;
