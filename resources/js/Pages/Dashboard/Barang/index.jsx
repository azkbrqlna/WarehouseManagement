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
    useToast,
} from "@chakra-ui/react";
import { Link, useForm, router } from "@inertiajs/react";
import { Plus, Trash } from "@phosphor-icons/react";

export default function BarangPage({ items, flash }) {
    const toast = useToast();
    const { delete: destroy } = useForm();

    const handleClick = (slug) => {
        confirm("Ingin menghapus barang ini?"),
            destroy(`/item/${slug}`, {
                onSuccess: () => {
                    toast({
                        title: flash.success,
                        status: "success",
                    });
                },
                onError: () => {
                    toast({
                        title: "Gagal menghapus barang",
                        status: "error",
                    });
                },
            });
    };

    const handleSwitch = (id, status) => {
        router.patch(`items/${id}`, { status });
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
                    <Button as={Link} href="/item/create">
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
                                        <Switch
                                            size="lg"
                                            isChecked={item.status}
                                            onChange={() =>
                                                handleSwitch(
                                                    item.id,
                                                    !item.status
                                                )
                                            }
                                        />
                                    </Td>
                                    <Td>{item.amount}</Td>
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
                            ))}
                        </Tbody>
                    </Table>
                </div>
            </Dashboardlayout>
        </>
    );
}
