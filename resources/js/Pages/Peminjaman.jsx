import { Head } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
import {
    InputLeftAddon,
    Input,
    InputGroup,
    FormControl,
    Box,
    Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import CardProduct from "@/Components/Fragments/CardProduct";
import { useState } from "react";

const Peminjaman = () => {
    const [value, setValue] = useState("");
    const [isActive, setIsActive] = useState(false);
    function handleChange(e) {
        const text = e.target.value;
        setValue(text);
    }
    return (
        <>
            <Head title="Peminjaman" />
            <div className="bg-zinc-800 w-full h-screen">
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
                <section className="flex justify-center gap-5 mt-10">
                    <CardProduct>
                        <CardProduct.Image image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFp-aBNfpgaNhFQlSHpGHEUAfm6VrV3uyNtA&usqp=CAU" />
                        <CardProduct.Content barang="Bola" status="Tersedia" />
                    </CardProduct>
                </section>
            </div>
        </>
    );
};

export default Peminjaman;
