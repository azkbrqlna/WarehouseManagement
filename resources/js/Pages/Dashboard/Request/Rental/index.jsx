import { ArrowLeft, Check, Trash, X } from "@phosphor-icons/react";
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
import { Link, router } from "@inertiajs/react";

const RequestPage = ({ rentals }) => {
    const handleAccept = (id, status) => {
        router.patch(`/request/rental/${id}`, { status });
    }

    const handleDeclined = (id, status) => {
        router.patch(`/request/rental/${id}`, { status });
    }
    const requestDisclosure = rentals.map((rental, index) => {
        const { isOpen, onToggle } = useDisclosure();
        return (
            <Tr key={index}>
                <Td textAlign="center">{index + 1}</Td>
                <Td textAlign="center">{rental.user.username}</Td>
                <Td textAlign="center">{rental.user.nis}</Td>
                <Td textAlign="center">{rental.user.kelas}</Td>
                <Td textAlign="center">
                    <Button onClick={onToggle} w="100%">
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
                            textAlign='left'
                        >
                            <h1 className="text-xl">
                                Barang yang dipinjam: <span className="font-semibold">{rental.item.name}</span>
                            </h1>
                            <p className="text-lg">Alasan: <span className="font-medium">{rental.reason}</span></p>
                        </Box>
                    </Collapse>
                </Td>
                <Td textAlign="center">
                    <Button
                        bgColor="green.500"
                        textColor="white"
                        _hover={{
                            background: "green.400",
                        }}
                        onClick={() => handleAccept(rental.id)}
                    >
                        <Check size={20} />
                        Accept
                    </Button>
                </Td>
                <Td textAlign="center">
                    <Button
                        bgColor="red.500"
                        textColor="white"
                        _hover={{
                            background: "red.400",
                        }}
                        onClick={() => handleDeclined(rental.id)}
                    >
                        <X size={20} />
                        Declined
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
                                <Th w="5%" textAlign="center">
                                    Nomer
                                </Th>
                                <Th w="18%" textAlign="center">
                                    Username
                                </Th>
                                <Th w="10%" textAlign="center">
                                    NIS
                                </Th>
                                <Th w="10%" textAlign="center">
                                    Kelas
                                </Th>
                                <Th w="37%" textAlign="center">
                                    Request
                                </Th>
                                <Th colSpan={2} textAlign="center">
                                    Action
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>{requestDisclosure}</Tbody>
                    </Table>
                </div>
            </Dashboardlayout>
        </>
    );
};

export default RequestPage;
