import { Head, Link, usePage } from "@inertiajs/react";
import { Trash } from "@phosphor-icons/react";
import Sidebar from "@/Layouts/Sidebar";
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
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const UsersPage = ({ users }) => {
    const allUser = users.map((user, index) => (
        <Tr key={index}>
            <Td>{index + 1}</Td>
            <Td>{user.username}</Td>
            <Td>{user.nis}</Td>
            <Td>{user.kelas}</Td>
            <Td textAlign="center">
                <Button
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
    ));
    return (
        <>
            <Head title="Users" />
            <div className="w-full h-screen flex bg-zinc-800">
                <Sidebar />
                <main className="flex-1 h-screen p-10 overflow-y-auto">
                    <h1 className="text-2xl font-bold text-white">Users</h1>
                    <div className="p-5 flex items-center justify-end gap-2">
                        <InputGroup w="300px">
                            <InputLeftAddon>
                                <SearchIcon />
                            </InputLeftAddon>
                            <Input textColor="white" placeholder="Cari user" />
                        </InputGroup>
                        <Button as={Link} href="#">
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
                            <Tbody>{allUser}</Tbody>
                        </Table>
                    </div>
                </main>
            </div>
        </>
    );
};

export default UsersPage;
