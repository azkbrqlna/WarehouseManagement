import { motion, AnimatePresence } from "framer-motion";
import {
    Badge,
    Button,
    CloseButton,
    Spinner,
    Text,
    Textarea,
} from "@chakra-ui/react";
import { CalendarBlank } from "@phosphor-icons/react";
import { useState } from "react";

const CardProduct = ({
    itemName,
    src,
    colorScheme,
    status,
    clickSubmitPeminjaman,
    onChange,
    name,
    value,
    isLoading,
    notAvailable,
    infoOpen,
    openInfo,
}) => {
    return (
        <>
            <div className="flex flex-col gap-3 rounded-lg w-full h-[250px] md:h-full md:w-[15rem] shadow-md shadow-zinc-950 bg-white p-3">
                <div className="w-full flex justify-center group overflow-hidden cursor-zoom-in h-2/3">
                    <img
                        src={src}
                        className="w-40 h-40 object-cover group-hover:scale-125 transition-all duration-300 ease-in-out"
                    />
                </div>
                <div className="flex justify-between text-2xl font-bold h-1/3">
                    <div>
                        <Text>{itemName}</Text>
                        <Badge borderRadius="5px" colorScheme={colorScheme}>
                            {status}
                        </Badge>
                    </div>
                    <Button onClick={infoOpen} alignSelf="center">
                        Pinjam
                    </Button>
                </div>
            </div>
            <AnimatePresence>
                {openInfo && (
                    <motion.div
                        className="fixed bottom-0 left-0 w-full h-[85%] bg-white z-50 overflow-y-auto rounded-t-2xl"
                        key="info"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                    >
                        <div className="flex justify-between px-3 py-2">
                            <h1 className="font-bold text-2xl text-black">
                                Informasi Barang
                            </h1>
                            <CloseButton size="lg" onClick={infoOpen} />
                        </div>
                        <div className="px-5 md:flex block">
                            <div className="w-full md:w-1/3 h-60 overflow-hidden flex justify-center">
                                <img src={src} />
                            </div>
                            <form
                                onSubmit={clickSubmitPeminjaman}
                                className="w-full md:w-2/3"
                            >
                                <Text fontWeight="bold" fontSize="x-large">
                                    {itemName}{" "}
                                    <Badge colorScheme={colorScheme}>
                                        {status}
                                    </Badge>
                                    <CalendarBlank
                                        size={30}
                                        cursor="pointer"
                                    />
                                </Text>
                                <Text>Masukan Alasan Peminjaman:</Text>
                                <Textarea
                                    onChange={onChange}
                                    name={name}
                                    value={value}
                                />
                                <Button
                                    mt="10px"
                                    colorScheme="blue"
                                    type="submit"
                                    isDisabled={!notAvailable}
                                >
                                    {isLoading ? <Spinner /> : "Submit"}
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default CardProduct;
