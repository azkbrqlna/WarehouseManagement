import { Head } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
import { InputLeftAddon, Input, InputGroup } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import CardProduct from "@/Components/Fragments/CardProduct";

const Peminjaman = ({ items }) => {
    console.log(items);
    return (
        <>
            <Head title="Peminjaman" />
            <div className="bg-zinc-800 w-full h-screen overflow-hidden">
                <section id="navbar">
                    <Navbar />
                </section>
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
                <section className="mt-10 w-full grid grid-cols-5 px-10">
                    <div className="flex justify-center col-span-5 gap-20">
                        {items.length > 0 &&
                            items.map((item) => (
                                <CardProduct
                                    key={item.id}
                                    src={item.cover}
                                    name={item.name}
                                    colorScheme={item.status ? "green" : "red"}
                                    status={
                                        item.status
                                            ? "Available"
                                            : "Not Available"
                                    }
                                />
                            ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Peminjaman;
