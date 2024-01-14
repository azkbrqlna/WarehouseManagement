import { Head, useForm, usePage } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
import { InputLeftAddon, Input, InputGroup } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import CardProduct from "@/Components/Fragments/CardProduct";
import { useState } from "react";
import Headroom from "react-headroom";
import { useToast } from "@chakra-ui/react";

const Peminjaman = ({ items }) => {
    const { auth } = usePage().props;
    const [isBorder, setBorder] = useState(false);
    const toast = useToast();
    const borderChange = () => {
        setBorder(window.scrollY > 110 ? true : false);
    };
    window.addEventListener("scroll", borderChange);

    const { post, data, setData } = useForm({
        reason: "",
        item_id: null,
        user_id: null,
    });

    const handleSubmit = async (itemID) => {
        try {
            setData("item_id", itemID);
            setData("user_id", auth.user.id);

            await post("/peminjaman", {
                onSuccess: () => {
                    toast({
                        title: "Peminjaman berhasil",
                        status: "success",
                    });
                },
                onError: () => {
                    toast({
                        title: "Gagal meminjam barang",
                        status: "error",
                    });
                },
            });
        } catch (error) {
            console.error(error);

            toast({
                title: "Gagal meminjam barang",
                status: "error",
            });
        }
    };

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
                <section className="flex justify-center">
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
                </section>
                <section className="mt-10 w-full grid grid-flow-row px-10">
                    <div className="flex flex-wrap justify-center col-span-5 gap-8 mb-96">
                        {items.length > 0 &&
                            items.map((item) => (
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
                                    clickSubmitPeminjaman={handleSubmit}
                                    onChange={(e) =>
                                        setData("reason", e.target.value)
                                    }
                                    value={data.reason}
                                />
                            ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Peminjaman;
