import { ArrowLeft, Check, X } from "@phosphor-icons/react";
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
    useToast,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import Dashboardlayout from "@/Layouts/DashboardLayout";
import { Link, router } from "@inertiajs/react";

const Rental = ({ rental, index }) => {
    const toast = useToast();
    const { isOpen, onToggle } = useDisclosure();

    const handleAccept = (id, status) => {
        router.patch(
            `/request/rental/${id}`,
            {
                user_id: rental.user_id,
                item_id: rental.item_id,
                reason: rental.reason,
                status,
                rent_date: rental.rent_date,
                return_date: rental.return_date,
            },
            {
                onSuccess: () => {
                    toast({
                        title: "Berhasil menyetujui peminjaman",
                        status: "success",
                    });
                },
                onError: (error) => {
                    console.log(error);
                    toast({
                        title: "Gagal menyetujui peminjaman",
                        status: "error",
                    });
                },
            }
        );
    };

    const handleDeclined = (id) => {
        router.delete(`/request/rental/${id}`, {
            onSuccess: () => {
                toast({
                    title: "Berhasil menolak peminjaman",
                    status: "success",
                });
            },
            onError: () => {
                toast({
                    title: "Gagal menolak peminjaman",
                    status: "error",
                });
            },
        });
    };

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
                        textAlign="left"
                    >
                        <h1 className="text-xl">
                            Barang yang dipinjam:{" "}
                            <span className="font-semibold">
                                {rental.item.name}
                            </span>
                        </h1>
                        <p className="text-lg">
                            Alasan:{" "}
                            <span className="font-medium">{rental.reason}</span>
                        </p>
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
                    onClick={() => handleAccept(rental.id, rental.status)}
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
};
const RequestPage = ({ rentals }) => {
    return (
        <>
            <Dashboardlayout title="Request Peminjaman">
                <Button as={Link} href="/requests" className="mt-5">
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
                        <Tbody>
                            {rentals.map((rental, index) => (
                                <Rental
                                    key={index}
                                    rental={rental}
                                    index={index}
                                />
                            ))}
                        </Tbody>
                    </Table>
                </div>
            </Dashboardlayout>
        </>
    );
};

export default RequestPage;
