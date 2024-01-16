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
import { request } from "@/Components/Fragments/ListStyle";
import Dashboardlayout from "@/Layouts/DashboardLayout";
import { Link } from "@inertiajs/react";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

const RequestPage = () => {
    const requestDisclosure = request.map((item, index) => {
        const { isOpen, onToggle } = useDisclosure();
        return (
            <Tr key={index}>
                <Td textAlign="center">{item.id}</Td>
                <Td textAlign="center">{item.username}</Td>
                <Td textAlign="center">{item.nis}</Td>
                <Td textAlign="center">{item.kelas}</Td>
                <Td textAlign="center">
                    <Button onClick={onToggle}>
                        <ArrowDownIcon />
                        Pengembalian
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
                                <span className="px-2 py-1 rounded-md bg-gray-400">
                                    15.00 - 18.00
                                </span>
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
