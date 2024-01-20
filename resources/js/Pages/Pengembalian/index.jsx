import Navbar from "@/Layouts/Navbar";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Spinner,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useToast,
} from "@chakra-ui/react";
import { Head, router, useForm } from "@inertiajs/react";
import { PaperPlaneRight, UploadSimple } from "@phosphor-icons/react";
import { useState } from "react";
import Headroom from "react-headroom";

const Pengembalian = ({ returns, auth }) => {
    console.log(returns)
    const toast = useToast();
    const [isBorder, setBorder] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const borderChange = () => {
        setBorder(window.scrollY > 110 ? true : false);
    };
    window.addEventListener("scroll", borderChange);

    const { data, setData } = useForm({
        file: null,
    });
    const handleRefund = (e, itemID) => {
        e.preventDefault();
        setIsLoading(true);
        router.post(
            "/pengembalian",
            {
                photo: data.file,
                item_id: itemID,
            },
            {
                onSuccess: () => {
                    toast({
                        title: "Tunggu Admin menyetujui!",
                        status: "success",
                    });
                },
                onError: () => {
                    toast({
                        title: "Gagal melakukan request barang",
                        status: "error",
                    });
                },
                onFinish: () => {
                    setIsLoading(false);
                },
            }
        );
    };
    return (
        <>
            <Head title="Pengembalian" />
            <div className="bg-zinc-800 pb-5 min-h-screen">
                <Headroom>
                    <div
                        className={`bg-zinc-800 z-10 ${
                            isBorder ? "border-b-2 border-zinc-500" : ""
                        }`}
                    >
                        <Navbar />
                    </div>
                </Headroom>
                <div className="flex justify-center">
                    <Table bg="whiteAlpha.500" w="100px">
                        <Thead>
                            <Tr>
                                <Th textColor="white">No.</Th>
                                <Th textColor="white">Item</Th>
                                <Th textColor="white" colSpan={2}>
                                    Tanggal Pengembalian
                                </Th>
                                <Th textColor="white" textAlign="center">
                                    Upload
                                </Th>
                                <Th textColor="white" textAlign="center">
                                    Preview
                                </Th>
                                <Th textColor="white" textAlign="center">
                                    Submit
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {returns.map((refund, index) => {
                                return auth.user.id === refund.user_id &&
                                    refund.status ? (
                                    <Tr key={refund.id}>
                                        <Td>{index + 1}</Td>
                                        <Td>{refund.item.name}</Td>
                                        <Td colSpan={2}>
                                            {refund.return_date}
                                        </Td>
                                        <Td>
                                            <FormLabel
                                                htmlFor="file_upload"
                                                display="flex"
                                                bg="whiteAlpha.400"
                                                _hover={{
                                                    background:
                                                        "whiteAlpha.800",
                                                }}
                                                transition="background 0.3s ease-in-out"
                                                borderRadius="10px"
                                                w="140px"
                                                p="8px"
                                                cursor="pointer"
                                                justifyContent="center"
                                                alignItems="center"
                                                fontSize="700"
                                            >
                                                <UploadSimple size={30} />
                                                <Input
                                                    id="file_upload"
                                                    name="file"
                                                    type="file"
                                                    display="none"
                                                    onChange={(e) =>
                                                        setData(
                                                            "file",
                                                            e.target.files[0]
                                                        )
                                                    }
                                                />
                                            </FormLabel>
                                        </Td>
                                        <Td>
                                            {data.file && (
                                                <Box
                                                    w="70px"
                                                    h="70px"
                                                    border="1px"
                                                    overflow="hidden"
                                                >
                                                    <img
                                                        src={URL.createObjectURL(
                                                            data.file
                                                        )}
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover",
                                                        }}
                                                    />
                                                </Box>
                                            )}
                                        </Td>
                                        <Td>
                                            <Button
                                                bgColor="blue.500"
                                                textColor="white"
                                                _hover={{
                                                    background: "blue.400",
                                                }}
                                                type="submit"
                                                onClick={(e) =>
                                                    handleRefund(
                                                        e,
                                                        refund.item.id
                                                    )
                                                }
                                            >
                                                {isLoading ? (
                                                    <Spinner />
                                                ) : (
                                                    <>
                                                        <PaperPlaneRight
                                                            size={20}
                                                        />
                                                        Kirim
                                                    </>
                                                )}
                                            </Button>
                                        </Td>
                                    </Tr>
                                ) : (
                                    ""
                                );
                            })}
                        </Tbody>
                    </Table>
                </div>
                <section className="px-10 py-5">
                    <div className="flex justify-center">
                        <h1 className="font-bold text-md text-zinc-400">
                            Upload foto barang yang hendak anda kembalikan!
                        </h1>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Pengembalian;
