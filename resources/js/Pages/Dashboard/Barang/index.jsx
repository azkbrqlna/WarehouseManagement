import Dashboardlayout from "@/Layouts/DashboardLayout";
import { SearchIcon } from "@chakra-ui/icons";
import {
    Button,
    Input,
    InputGroup,
    InputLeftAddon,
    Switch,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useToast
} from "@chakra-ui/react";
import { Link, useForm } from "@inertiajs/react";
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import React from "react";
import { useState } from "react";

export default function BarangPage({ items }) {
    const [count, setCount] = useState(0);
    const { delete: destroy } = useForm()

    const toast = useToast()

    const handlePlus = () => {
        setCount(count + 1);
    };

    const handleMinus = () => {
        if (count !== 0) {
            setCount(count - 1);
        }
    };
    const handleClick = (slug) => {
        confirm("Ingin menghapus barang ini?"),
            destroy(`/items/${slug}`, {
                onSuccess: () => {
                    toast({
                        title: "Berhasil menghapus user",
                        status: "success",
                    });
                },
                onError: () => {
                    toast({
                        title: "Gagal menghapus user",
                        status: "error",
                    });
                },
            });
    };
    return (
        <>
            <Dashboardlayout title="Informasi Barang">
                <div className="p-5 flex items-center justify-end gap-2">
                    <InputGroup w="300px">
                        <InputLeftAddon>
                            <SearchIcon />
                        </InputLeftAddon>
                        <Input textColor="white" placeholder="Cari Barang" />
                    </InputGroup>
                    <Button as={Link} href="/items/create">
                        <Plus size={24} />
                        Tambah Barang
                    </Button>
                </div>
                <div className="bg-white p-5 rounded-lg">
                    <Table>
                        <Thead>
                            <Tr>
                                <Th width="23%">Nomor</Th>
                                <Th width="23%">Barang</Th>
                                <Th width="23%">Status</Th>
                                <Th width="23%">Jumlah</Th>
                                <Th width="8%">Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {items.map((item, index) => (
                                <Tr key={index}>
                                    <Td>{index + 1}</Td>
                                    <Td>{item.name}</Td>
                                    <Td>
                                        <Switch size="lg" />
                                    </Td>
                                    <Td>{item.amount}</Td>
                                    <Td textAlign="center">
                                        <Button
                                            onClick={() => handleClick(item.slug)}
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
                            ))}
                        </Tbody>
                    </Table>
                </div>
            </Dashboardlayout>
        </>
    );
}