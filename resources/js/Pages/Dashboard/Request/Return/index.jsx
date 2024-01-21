import { Check, X } from "@phosphor-icons/react";
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
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

const RequestPage = ({ returns }) => {
    console.log(returns);
    const requestDisclosure = returns.map((refund, index) => {
        const { isOpen, onToggle } = useDisclosure();
        return (
            <Tr key={refund.id}>
                <Td textAlign="center">{index + 1}</Td>
                <Td textAlign="center">{refund.user.username}</Td>
                <Td textAlign="center">{refund.user.nis}</Td>
                <Td textAlign="center">{refund.user.kelas}</Td>
                <Td textAlign="center">
                    <Button onClick={onToggle}>
                        <ArrowDownIcon />
                        Pengembalian
                    </Button>
                    <Collapse in={isOpen} animateOpacity>
                        <Box w="70px" h="70px" border="1px" overflow="hidden">
                            <img
                                src={`/storage/photo/${refund.photo}`}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
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
            <Dashboardlayout title="Request Pengembalian">
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
                                    Pengembalian
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
