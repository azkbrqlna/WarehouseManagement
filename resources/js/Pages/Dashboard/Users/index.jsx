import { Link, useForm } from "@inertiajs/react";
import { Trash } from "@phosphor-icons/react";
import { Plus } from "@phosphor-icons/react";
import {
    Button,
    Input,
    InputGroup,
    InputLeftAddon,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useToast
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Dashboardlayout from "@/Layouts/DashboardLayout";

const UsersPage = ({ users }) => {
    const toast = useToast();
    const { delete: destroy } = useForm();
    const handleClick = (slug) => {
        if (window.confirm("Ingin menghapus user ini?")) {
            destroy(`/users/${slug}`, {
                onSuccess: () => {
                    toast({
                        title: "Berhasil menghapus user",
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
            <Dashboardlayout title="Users">
                <div className="p-5 flex items-center justify-end gap-2">
                    <InputGroup w="300px">
                        <InputLeftAddon>
                            <SearchIcon />
                        </InputLeftAddon>
                        <Input textColor="white" placeholder="Cari user" />
                    </InputGroup>
                    <Button as={Link} href="/users/create">
                        <Plus size={24} />
                        Tambah User
                    </Button>
                </div>
                <div className="bg-white p-5 rounded-lg">
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Nomor</Th>
                                <Th>Username</Th>
                                <Th>NIS</Th>
                                <Th>Kelas</Th>
                                <Th w="20px" textAlign="center">
                                    Action
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {users.map((user, index) => (
                                <Tr key={index}>
                                    <Td>{index + 1}</Td>
                                    <Td>{user.username}</Td>
                                    <Td>{user.nis}</Td>
                                    <Td>{user.kelas}</Td>
                                    <Td textAlign="center">
                                        <Button
                                            onClick={() => handleClick(user.slug)}
                                            bgColor="red.500"
                                            textColor="white"
                                            _hover={{
                                                background: "red.400",
                                            }}
                                        >
                                            <Trash size={20} />
                                            Delete
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </div>
            </Dashboardlayout>
        </>
    );
};

export default UsersPage;
