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
import { Head, useForm } from "@inertiajs/react";
import { Upload } from "@phosphor-icons/react/dist/ssr";

export default function CreateBarangDashboard() {
    const toast = useToast();
    const { data, setData, post, reset } = useForm({
        name: "",
        amount: "",
        file: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/items/create", {
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
                                />
                            </NumberInput>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Masukan Gambar Barang</FormLabel>
                            <FormLabel htmlFor="file-upload" w="30px" h="15px">
                                <Input
                                    id="file-upload"
                                    type="file"
                                    name="file"
                                    opacity={0}
                                    zIndex={1}
                                    onChange={(e) =>
                                        setData("file", e.target.files[0])
                                    }
                                />
                                <div className="relative bottom-9 left-1 border border-black rounded-md p-1 w-14 flex justify-center items-center">
                                    <Upload size={30} />
                                </div>
                            </FormLabel>
                            <p className="mt-10 font-medium">Pilih gambar!</p>
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
                            bg="gray.800"
                            color="white"
                            _hover={{ background: "gray.600" }}
                        >
                            Create Barang
                        </Button>
                    </form>
                </section>
            </DashboardLayout>
        </>
    );
}
