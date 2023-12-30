import { Head } from "@inertiajs/react";
import { Trash } from "@phosphor-icons/react";
import Sidebar from "@/Layouts/Sidebar";
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
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { request } from "@/Components/Fragments/ListStyle";

const RequestPage = () => {
    const elementsWithDisclosure = request.map((item, index) => {
        const { isOpen, onToggle } = useDisclosure();
        return (
            <Tr key={index}>
                <Td>{item.id}</Td>
                <Td>{item.username}</Td>
                <Td>{item.nis}</Td>
                <Td>{item.kelas}</Td>
                <Td>
                    <Button onClick={onToggle}>
                        <ArrowDownIcon />
                        Request
                    </Button>
                    <Collapse in={isOpen} animateOpacity>
                        <Box
                            p="10px"
                            color="black"
                            mt="4"
                            bg="gray.200"
                            rounded="md"
                            shadow="md"
                            display="flex"
                            flexDirection="column"
                            gap="10px"
                        >
                            <div className="flex justify-between">
                                <h1 className="text-xl font-bold">Bola</h1>
                                <span className="px-2 py-1 rounded-md bg-gray-400">15.00 - 18.00</span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nostrum, fugit?
                            </p>
                        </Box>
                    </Collapse>
                </Td>
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
        );
    });
    return (
        <>
            <Head title="Users" />
            <div className="w-full h-screen flex bg-zinc-800">
                <Sidebar />
                <main className="flex-1 h-screen p-10 overflow-y-auto">
                    <h1 className="text-2xl font-bold text-white">Request</h1>
                    <div className="bg-white p-5 rounded-lg mt-5">
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th>ID</Th>
                                    <Th>Username</Th>
                                    <Th>NIS</Th>
                                    <Th>Kelas</Th>
                                    <Th w="500px">Request</Th>
                                    <Th w="20px" textAlign="center">
                                        Action
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>{elementsWithDisclosure}</Tbody>
                        </Table>
                    </div>
                </main>
            </div>
        </>
    );
};

export default RequestPage;
