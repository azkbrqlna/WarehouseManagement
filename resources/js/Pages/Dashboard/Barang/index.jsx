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
} from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import React from "react";
import { useState } from "react";

export default function BarangPage({ items }) {
    const [count, setCount] = useState(0);

    const handlePlus = () => {
        setCount(count + 1);
    };

    const handleMinus = () => {
        if (count !== 0) {
            setCount(count - 1);
        }
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
                                <Th>Nomor</Th>
                                <Th>Barang</Th>
                                <Th>Status</Th>
                                <Th>Jumlah</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>1.</Td>
                                <Td>Bola</Td>
                                <Td>
                                    <Switch size="lg" />
                                </Td>
                                <Td
                                    display="flex"
                                    gap="10px"
                                    alignItems="center"
                                >
                                    <button
                                        className="border p-2 rounded-md"
                                        onClick={handlePlus}
                                    >
                                        <Plus size={15} />
                                    </button>
                                    {count}
                                    <button
                                        className="border p-2 rounded-md"
                                        onClick={handleMinus}
                                    >
                                        <Minus size={15} />
                                    </button>
                                </Td>
                                <Td>
                                    <Button
                                        bgColor="red.500"
                                        textColor="white"
                                        _hover={{
                                            background: "red.400",
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </Td>
                            </Tr>
                            {/* {items.map((item, index) => (
                                <Tr key={index}>
                                    <Td>{index + 1}</Td>
                                    <Td textAlign="center">
                                        <Button
                                            onClick={() =>
                                                handleClick(item.slug)
                                            }
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
                            ))} */}
                        </Tbody>
                    </Table>
                </div>
            </Dashboardlayout>
        </>
    );
}
