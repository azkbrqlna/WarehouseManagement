import { Head, router, useForm } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
import {
    InputLeftAddon,
    Input,
    InputGroup,
    useToast,
    Menu,
    MenuList,
    MenuItem,
    MenuButton,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Td,
    Th,
    Progress,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import CardProduct from "@/Components/Fragments/CardProduct";
import { useState } from "react";
import Headroom from "react-headroom";
import { Bell } from "@phosphor-icons/react";

const Peminjaman = ({ items, rentals, auth }) => {
    const [isBorder, setBorder] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isInfoOpen, setInfoOpen] = useState({});
    const toast = useToast();

    const borderChange = () => {
        setBorder(window.scrollY > 110 ? true : false);
    };
    window.addEventListener("scroll", borderChange);

    const { data, setData } = useForm({
        reason: "",
    });

    const handleSubmit = (e, itemID) => {
        e.preventDefault();
        setLoading(true);
        router.post(
            "/peminjaman",
            {
                reason: data.reason,
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
                    setLoading(false);
                    setInfoOpen(false);
                },
            }
        );
    };

    const handleButtonInfo = (idx) => {
        setInfoOpen((prevState) => ({
            ...prevState,
            [idx]: !prevState[idx] || false,
        }));
    };

    let acceptData = 1;
    const MenuAccept = rentals.map((rental, index) => {
        return auth.user.id === rental.user_id ? (
            <Tr key={rental.id}>
                <Td>{index + 1}</Td>
                <Td>{rental.item.name}</Td>
                <Td>
                    {rental.status ? (
                        rental.return_date
                    ) : (
                        <Progress isIndeterminate size="xs" />
                    )}
                </Td>
            </Tr>
        ) : (
            ""
        );
    });

    return (
        <>
            <Head title="Peminjaman" />
            <div className="bg-zinc-800 pb-5 min-h-screen">
                <Headroom>
                    <section
                        id="navbar"
                        className={`bg-zinc-800 z-10 ${
                            isBorder ? "border-b-2 border-zinc-500" : ""
                        }`}
                    >
                        <Navbar />
                    </section>
                </Headroom>
                <section className="flex justify-center gap-2 relative">
                    <div className="w-2/3 md:w-2/5">
                        <InputGroup>
                            <InputLeftAddon>
                                <SearchIcon />
                            </InputLeftAddon>
                            <Input
                                textColor="white"
                                placeholder="Cari barang"
                            />
                        </InputGroup>
                    </div>
                    <Menu>
                        <MenuButton
                            as={Button}
                            width="10px"
                            bg="transparent"
                            _active={{ bg: "transparent" }}
                            _hover={{ bg: "transparent" }}
                        >
                            <div className="absolute bottom-1 left-4 z-10">
                                <Bell size={32} color="#ffffff" />
                                {rentals.map((rental) => {
                                    return auth.user.id === rental.user_id ? (
                                        <div
                                            className="rounded-full bg-white w-4 h-4 flex justify-center items-center absolute bottom-4 left-4"
                                            key={rental.id}
                                        >
                                            <p className="text-black text-xs">
                                                {acceptData++}
                                            </p>
                                        </div>
                                    ) : (
                                        ""
                                    );
                                })}
                            </div>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Table>
                                    <Thead>
                                        <Tr>
                                            <Th>No.</Th>
                                            <Th>Item</Th>
                                            <Th>Keterangan</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>{MenuAccept}</Tbody>
                                </Table>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </section>
                <section className="mt-10 w-full grid grid-flow-row px-10">
                    <div className="flex flex-wrap justify-center col-span-5 ga bg-white p-8 mb-96">
                        {items.length > 0 &&
                            items.map((item, idx) => (
                                <CardProduct
                                    key={item.id}
                                    itemID={item.id}
                                    src={`/storage/cover/${item.cover}`}
                                    itemName={item.name}
                                    colorScheme={item.status ? "green" : "red"}
                                    status={
                                        item.status
                                            ? "Available"
                                            : "Not Available"
                                    }
                                    notAvailable={item.status}
                                    clickSubmitPeminjaman={(e) =>
                                        handleSubmit(e, item.id)
                                    }
                                    onChange={(e) =>
                                        setData("reason", e.target.value)
                                    }
                                    value={data.reason}
                                    isLoading={isLoading}
                                    infoOpen={() => handleButtonInfo(idx)}
                                    openInfo={isInfoOpen[idx]}
                                />
                            ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Peminjaman;
