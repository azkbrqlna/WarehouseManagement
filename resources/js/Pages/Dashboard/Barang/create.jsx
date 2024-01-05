import { useState } from "react";
import {
    Select,
    Input,
    Button,
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Box,
    useToast,
    Text
} from "@chakra-ui/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head, useForm } from "@inertiajs/react";

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
                    title: "Berhasil menambahkan barang",
                    status: "success"
                })
            },
            onError: () => {
                toast({
                    title: "Gagal menambahkan barang",
                    status: "error"
                })
            }
        });
    };

    const handleChange = (e) => {
        setData(e.target.name, e.target.value)
    }
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
                            <NumberInput value={data.amount} onChange={handleChange}>
                                <NumberInputField
                                    name="amount"
                                    value={data.amount}
                                    onChange={handleChange}
                                />
                            </NumberInput>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Masukan Gambar Barang</FormLabel>
                            <Input
                                type="file"
                                name="file"
                                value=""
                                onChange={(e) => setData('file', e.target.files[0])}
                            />
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
