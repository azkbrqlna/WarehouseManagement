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
            <div className="bg-zinc-800 pb-5">
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
                <section className="mt-10 w-full grid grid-flow-row px-10">
                    <div className="flex flex-wrap justify-center col-span-5 gap-8">
                        {items.length > 0 &&
                            items.map((item) => (
                                <CardProduct
                                    key={item.id}
                                    src={`storage/cover/${ item.cover }`}
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
