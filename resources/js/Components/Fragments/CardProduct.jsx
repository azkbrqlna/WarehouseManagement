import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge, Button, CloseButton, Text, Textarea } from "@chakra-ui/react";

const CardProduct = ({ name, src, colorScheme, status }) => {
    const [isInfoOpen, setInfoOpen] = useState(false);

    const handleButtonClick = () => {
        setInfoOpen(!isInfoOpen);
    };

    return (
        <>
            <Button
                className="bg-white overflow-hidden rounded-lg gap-5 flex flex-col w-80 relative group"
                onClick={handleButtonClick}
            >
                <div className="w-full h-60 overflow-hidden flex justify-center">
                    <motion.img
                        src={src}
                        alt=""
                        className="group-hover:scale-125 transition-all duration-200 ease-out"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                    <AnimatePresence>
                        <motion.div
                            className="absolute -bottom-10 left-0 w-full group-hover:bottom-0 transition-all duration-200 ease-in-out"
                            initial={{ opacity: 1, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                        >
                            <div className="bg-gradient-to-t from-neutral-700">
                                <h1 className="font-bold text-2xl text-left text-white px-3 py-2">
                                    {name}
                                </h1>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </Button>
            <AnimatePresence>
                {isInfoOpen && (
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
                            <CloseButton
                                size="lg"
                                onClick={handleButtonClick}
                            />
                        </div>
                        <div className="px-5">
                            <div className="w-full h-40 overflow-hidden flex justify-center">
                                <img src={src} />
                            </div>
                            <Text fontWeight="bold" fontSize="x-large">
                                {name}{" "}
                                <Badge colorScheme={colorScheme}>{status}</Badge>
                            </Text>
                            <Badge fontSize="medium">16.00 - 18.00</Badge>
                            <Text>Masukan Alasan Peminjaman:</Text>
                            <Textarea />
                            <Button mt="10px" colorScheme="blue">
                                Submit
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default CardProduct;
