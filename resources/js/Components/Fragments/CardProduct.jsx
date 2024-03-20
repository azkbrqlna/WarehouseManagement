import { motion, AnimatePresence } from "framer-motion";
import {
    Badge,
    Button,
    CloseButton,
    Spinner,
    Text,
    Textarea,
} from "@chakra-ui/react";
import { MinusCircle, PlusCircle } from "@phosphor-icons/react";

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
    amount,
    handlePlus,
    handleMinus,
    amountBorrow,
    pageType
}) => {
    return (
        <>
            <div className="flex flex-col gap-3 rounded-3xl w-40 h-min md:w-[200px] bg-white px-5 py-2 pb-5 shadow-top-right-bottom">
                <div>
                    <h1 className="font-bold text-lg md:text-3xl truncate">
                        {itemName}
                    </h1>
                    <Badge
                        borderRadius="5px"
                        colorScheme={colorScheme}
                        py="5px"
                        px="10px"
                        fontSize="10px"
                    >
                        {status}
                    </Badge>
                </div>
                <div className="w-full flex justify-center group overflow-hidden cursor-zoom-in">
                    <img
                        src={src}
                        className="w-20 h-20 md:w-40 md:h-40 object-cover group-hover:scale-125 transition-all duration-300 ease-in-out"
                    />
                </div>
                <div className="text-2xl font-bold space-y-2">
                    <Text fontSize="lg">
                        Stok: <span>{amount}</span>
                    </Text>
                    <button
                        onClick={infoOpen}
                        className="w-full px-2 py-1 border border-azka rounded-2xl text-lg hover:bg-azka hover:text-white transition-all duration-200 ease-in"
                    >
                        {pageType === 'Peminjaman' ? 'Pinjam' : 'Ambil'}
                    </button>
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
                        <div className="px-5 md:flex block space-x-2">
                            <div className="w-full md:w-60 md:h-52 overflow-hidden flex justify-center">
                                <img src={src} className="object-cover" />
                            </div>
                            <form
                                onSubmit={clickSubmitPeminjaman}
                                className="w-full"
                            >
                                <Text fontWeight="bold" fontSize="x-large">
                                    {itemName}{" "}
                                    <Badge colorScheme={colorScheme}>
                                        {status}
                                    </Badge>
                                    <div className="flex flex-col justify-between w-40">
                                        <h1 className="text-base font-semibold text-center">
                                        {pageType === 'Peminjaman' ? 'Jumlah Peminjaman' : 'Jumlah Pengambilan'}
                                        </h1>
                                        <div className="flex gap-3 justify-center py-1">
                                            <button type="button" onClick={handleMinus}>
                                                <MinusCircle size={25} />
                                            </button>
                                            <span className="text-lg">{amountBorrow}</span>
                                            <button type="button" onClick={handlePlus}>
                                                <PlusCircle size={25} />
                                            </button>
                                        </div>
                                    </div>
                                </Text>
                                <Text>Masukan Alasan {pageType === 'Peminjaman' ? 'Peminjaman' : 'Pengambilan'}:</Text>
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
