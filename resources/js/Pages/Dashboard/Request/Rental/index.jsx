import { ArrowLeft, Trash } from "@phosphor-icons/react";
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
import Dashboardlayout from "@/Layouts/DashboardLayout";
import { Link } from "@inertiajs/react";

const RequestPage = ({ rentals }) => {
    const tekan = () => {
        console.log("isi rentals", rentals);
    };
    const requestDisclosure = rentals.map((rental, index) => {
        const { isOpen, onToggle } = useDisclosure();
        return (
            <Tr key={index}>
                <Td>{rental.id}</Td>
                <Td>{rental.user.username}</Td>
                <Td>{rental.user.nis}</Td>
                <Td>{rental.user.kelas}</Td>
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
                                <h1 className="text-xl font-bold">
                                    {rental.item.name}
                                </h1>
                            </div>
                            <p>{rental.reason}</p>
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
            <Dashboardlayout title="Request Peminjaman">
                <Button as={Link} href="/request" className="mt-5">
                    <ArrowLeft size={24} />
                    Kembali
                </Button>
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
                        <Tbody>{requestDisclosure}</Tbody>
                    </Table>
                </div>
                <button onClick={tekan} className="py-3 px-2 bg-sky-50">
                    tekan
                </button>
            </Dashboardlayout>
        </>
    );
};

export default RequestPage;
