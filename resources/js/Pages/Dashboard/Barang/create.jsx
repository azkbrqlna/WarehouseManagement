import {
    Input,
    Button,
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    Box,
    useToast,
} from "@chakra-ui/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Upload } from "@phosphor-icons/react/dist/ssr";
import { ArrowLeft, UploadSimple } from "@phosphor-icons/react";

export default function CreateBarangDashboard() {
    const toast = useToast();
    const { data, setData, post, reset } = useForm({
        name: "",
        amount: "",
        file: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/item/create", {
            onSuccess: () => {
                reset();
                toast({
                    title: "Berhasil membuat barang!",
                    status: "success",
                });
            },
            onError: () => {
                toast({
                    title: "Gagal menambahkan barang",
                    status: "error",
                });
            },
        });
    };

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };
    return (
        <>
            <Head title="Create Barang" />
            <DashboardLayout title="Create Barang">
                <div className="flex justify-end">
                    <Button
                        as={Link}
                        href="/items"
                        className="mt-5"
                        bg="#7371E2"
                        _hover={{ background: "#8E8FFA" }}
                        textColor="white"
                    >
                        <ArrowLeft size={24} />
                        Kembali
                    </Button>
                </div>
                <section className="bg-white p-4 rounded-md mt-5">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-3 2xl:space-y-7"
                    >
                        <FormControl>
                            <FormLabel>Nama Barang</FormLabel>
                            <Input
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                placeholder="Masukan nama barang"
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Jumlah Barang</FormLabel>
                            <NumberInput
                                value={data.amount}
                                onChange={handleChange}
                                >
                                <NumberInputField
                                    name="amount"
                                    value={data.amount}
                                    onChange={handleChange}
                                    placeholder="Masukan jumlah barang"
                                />
                            </NumberInput>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="file_upload">Masukan Gambar Barang</FormLabel>
                            <FormLabel
                                htmlFor="file_upload"
                                display="flex"
                                borderWidth='2px'
                                borderColor="#7371E2"
                                _hover={{ background: "#8E8FFA" }}
                                transition="background 0.3s ease-in-out"
                                borderRadius="10px"
                                w="140px"
                                p="8px"
                                cursor="pointer"
                                justifyContent="center"
                                alignItems="center"
                                fontSize="700"
                            >
                                <UploadSimple size={30} color="#7371E2" />
                                <Input
                                    id="file_upload"
                                    name="file"
                                    type="file"
                                    display="none"
                                    onChange={(e) =>
                                        setData("file", e.target.files[0])
                                    }
                                />
                            </FormLabel>
                        </FormControl>
                        {data.file && (
                            <Box mt="4">
                                <Box mb="2">Preview gambar:</Box>
                                <Box
                                    w="240px"
                                    h="240px"
                                    border="1px"
                                    overflow="hidden"
                                >
                                    <img
                                        src={URL.createObjectURL(data.file)}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </Box>
                            </Box>
                        )}
                        <Button
                            type="submit"
                            bg="#7371E2"
                            _hover={{ background: "#8E8FFA" }}
                            color="white"
                        >
                            Create Barang
                        </Button>
                    </form>
                </section>
            </DashboardLayout>
        </>
    );
}
