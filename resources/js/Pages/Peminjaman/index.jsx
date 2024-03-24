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
    Progress,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import CardProduct from "@/Components/Fragments/CardProduct";
import { useState } from "react";
import Headroom from "react-headroom";
import { Bell } from "@phosphor-icons/react";

const Peminjaman = ({
    items,
    rentals,
    auth,
    rental_count,
    return_count,
    initial,
}) => {
    const [isBorder, setBorder] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isInfoOpen, setInfoOpen] = useState({});
    const [isBorrowAmount, setBorrowAmount] = useState(1);
    const [filteredItems, setFilteredItems] = useState(
        items.filter((item) => {
            return item.jenis === "peminjaman";
        })
    );
    const toast = useToast();

    const borderChange = () => {
        setBorder(window.scrollY > 110 ? true : false);
    };
    window.addEventListener("scroll", borderChange);

    const { data, setData } = useForm({
        reason: "",
    });

    const handleSubmit = (e, itemID, amount_rental) => {
        e.preventDefault();
        setLoading(true);
        router.post(
            "/peminjaman",
            {
                reason: data.reason,
                item_id: itemID,
                amount_rental,
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
                    setData("reason", "");
                    setBorrowAmount(1);
                },
            }
        );
    };

    const handleButtonInfo = (idx) => {
        setInfoOpen((prevState) => ({
            ...prevState,
            [idx]: !prevState[idx] || false,
        }));
        setData("reason", "");
    };

    let acceptData = 1;
    const MenuAccept = rentals.map((rental, index) => {
        const return_date = new Date(rental.return_date);
        const selisih = Math.ceil(
            (return_date - Date.now()) / (1000 * 60 * 60 * 24)
        );
        return auth.user.id === rental.user_id ? (
            <tr
                key={rental.id}
                className="bg-white hover:bg-gray-100 divide-x divide-gray-100"
            >
                <td className="px-4 py-2 whitespace-nowrap">{index + 1}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                    {rental.item.name}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-center">
                    {rental.status ? (
                        `${selisih} hari lagi`
                    ) : (
                        <Progress isIndeterminate size="xs" />
                    )}
                </td>
            </tr>
        ) : null;
    });

    const handleSearch = (value) => {
        const filtered = items.filter((item) =>
            item.jenis === 'peminjaman' && item.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredItems(filtered);
    };

    return (
        <>
            <Head title="Peminjaman" />
            <div className="bg-azka pb-5 min-h-screen">
                <Headroom>
                    <section
                        id="navbar"
                        className={`bg-azka z-10 ${
                            isBorder ? "border-b-2 border-azka" : ""
                        }`}
                    >
                        <Navbar
                            peminjaman={rental_count}
                            pengembalian={return_count}
                            initial={initial}
                        />
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
                                _placeholder={{ color: "white" }}
                                onChange={(e) => handleSearch(e.target.value)}
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
                            <div className="absolute bottom-1 left-4">
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
                        <MenuList zIndex={0.1}>
                            <MenuItem>
                                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                                    <thead className="bg-gray-200">
                                        <tr className="divide-x divide-gray-50">
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                No.
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Item
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Pengembalian
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>{MenuAccept}</tbody>
                                </table>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </section>
                <section className="mt-10 w-full grid grid-flow-row px-1 2xl:px-10">
                    <div className="flex flex-wrap justify-center gap-8 mb-96">
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item, idx) => (
                                <CardProduct
                                    key={item.id}
                                    itemID={item.id}
                                    src={`/storage/cover/${item.cover}`}
                                    itemName={item.name}
                                    amount={item.total_item}
                                    colorScheme={item.status ? "green" : "red"}
                                    status={
                                        item.status
                                            ? "Available"
                                            : "Not Available"
                                    }
                                    amountBorrow={isBorrowAmount}
                                    handlePlus={() =>
                                        isBorrowAmount < item.total_item &&
                                        setBorrowAmount(isBorrowAmount + 1)
                                    }
                                    handleMinus={() =>
                                        isBorrowAmount !== 1 &&
                                        setBorrowAmount(isBorrowAmount - 1)
                                    }
                                    notAvailable={item.status}
                                    clickSubmitPeminjaman={(e) =>
                                        handleSubmit(e, item.id, isBorrowAmount)
                                    }
                                    onChange={(e) =>
                                        setData("reason", e.target.value)
                                    }
                                    value={data.reason}
                                    isLoading={isLoading}
                                    infoOpen={() => handleButtonInfo(idx)}
                                    openInfo={isInfoOpen[idx]}
                                    pageType="Peminjaman"
                                />
                            ))
                        ) : (
                            <h1 className="font-bold text-4xl text-white">
                                Tidak ada item yang ditampilkan
                            </h1>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Peminjaman;
