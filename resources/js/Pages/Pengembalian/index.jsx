import TableRow from "@/Components/Fragments/TablePengembalian";
import Navbar from "@/Layouts/Navbar";
import { Button, CloseButton, Spinner, useToast } from "@chakra-ui/react";
import { Head, router, useForm } from "@inertiajs/react";
import { ArrowFatLineUp, Minus, PaperPlaneRight, UploadSimple } from "@phosphor-icons/react";
import { useState } from "react";
import Headroom from "react-headroom";
import { AnimatePresence, motion } from "framer-motion";
import SelectDropdown from "@/Components/Fragments/SelectDropdown";

const Pengembalian = ({ rentals, auth, returns, rental_count, return_count }) => {
    const toast = useToast();
    const [selectedValue, setSelectedValue] = useState({});
    const [isOpen, setOpen] = useState(false);
    const [isSelect, setSelect] = useState(false);
    const [isBorder, setBorder] = useState(false);
    const [isInfoOpen, setInfoOpen] = useState({});
    const [isLoading, setIsLoading] = useState(() =>
        Array(rentals.length).fill(false)
    );
    const { data, setData } = useForm({
        file: [],
    });
    const infoLoading = [...isLoading];

    const handleRefund = (e, itemID, date, index) => {
        e.preventDefault();
        infoLoading[index] = !infoLoading[index];
        setIsLoading(infoLoading);
        router.post(
            "/pengembalian",
            {
                photo: data.file[index],
                item_id: itemID,
                rent_date: date,
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
                    infoLoading[index] = !infoLoading[index];
                    setIsLoading(infoLoading);
                },
            }
        );
    };
    const handleFileChange = (e, index) => {
        const newFileUpload = Array.isArray(data.file) ? [...data.file] : [];
        newFileUpload[index] = e.target.files[0];
        setData("file", newFileUpload);
    };

    const handleButtonInfo = (idx) => {
        setInfoOpen((prevState) => ({
            ...prevState,
            [idx]: !prevState[idx] || false,
        }));
    };

    const borderChange = () => {
        setBorder(window.scrollY > 110 ? true : false);
    };

    const handleOptionSelect = (rental) => {
        setSelectedValue({
            itemName: rental.item.name,
            rent_date: rental.rent_date,
        });
        setSelect(false);
    };

    const filteredRentals = rentals.filter(
        (rental) => rental.rent_date === selectedValue.rent_date
    );

    window.addEventListener("scroll", borderChange);
    return (
        <>
            <Head title="Pengembalian" />
            <div className="bg-azka pb-5 min-h-screen flex flex-col overflow-hidden">
                <Headroom>
                    <div
                        className={`bg-azka z-10 ${
                            isBorder ? "border-b-2 border-azka" : ""
                        }`}
                    >
                        <Navbar peminjaman={rental_count} pengembalian={return_count} />
                    </div>
                </Headroom>
                <section className="md:px-40 px-10 py-5 space-y-10 md:flex grow gap-5 justify-center items-center relative">
                    <div className="hidden md:block absolute w-[1100px] h-[1100px] bg-white -bottom-[570px] -right-[570px] rotate-[45deg] -z-0" />
                    <div className="space-y-5 md:w-1/2 self-start">
                        <h1 className="text-xl md:text-4xl 3xl:text-6xl font-bold text-white">
                            Pengembalian Barang Warehouse Management SMKN 7
                            Semarang
                        </h1>
                        <div className="text-white space-y-2">
                            <p className="font-bold md:text-xl">
                                Pilih Nama Item
                            </p>
                            <SelectDropdown
                                rentals={rentals}
                                auth={auth}
                                selectedValue={selectedValue}
                                handleOptionSelect={handleOptionSelect}
                                isOpen={isSelect}
                                toggleDropdown={() => setSelect(!isSelect)}
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:h-96 md:px-20 3xl:px-40 h-60 rounded-md z-10">
                        <button
                            onClick={() => setOpen(!isOpen)}
                            className="text-white flex flex-col items-center justify-center w-full h-full bg-upload rounded-lg"
                        >
                            <div className="flex justify-center">
                                <div className="animate-bounce">
                                    <ArrowFatLineUp size={50} color="#fff" />
                                </div>
                            </div>
                            <span className="font-bold text-lg md:text-2xl">
                                Upload your files
                            </span>
                        </button>
                    </div>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                className="fixed bottom-0 left-0 w-full h-5/6 bg-white z-50 overflow-y-auto rounded-t-2xl"
                                key="info"
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 50,
                                }}
                            >
                                <div className="flex justify-between px-5 py-4">
                                    <h1 className="font-bold text-2xl text-black">
                                        Upload Pengembalian
                                    </h1>
                                    <CloseButton
                                        size="lg"
                                        onClick={() => setOpen(!isOpen)}
                                    />
                                </div>
                                {filteredRentals.map((rental, index) => {
                                    const dateReturn = returns.find(
                                        (date) =>
                                            date.rent_date === rental.rent_date
                                    );
                                    return (
                                        <div className="flex-col flex px-5 gap-4">
                                            <div className="flex flex-col self-center">
                                                <h1 className="font-bold text-lg">
                                                    Preview Upload
                                                </h1>
                                                <div className="border-2 border-blue-300 w-32 h-32 overflow-hidden rounded-md">
                                                    {(data.file[index] ? (
                                                        <img
                                                            src={URL.createObjectURL(
                                                                data.file[index]
                                                            )}
                                                            className="w-full h-full object-cover"
                                                            alt="file upload sementara"
                                                        />
                                                    ) : null) ||
                                                        (dateReturn?.photo
                                                            ? returns
                                                                  .filter(
                                                                      (ret) =>
                                                                          ret.rent_date ===
                                                                          rental.rent_date
                                                                  )
                                                                  .map(
                                                                      (ret) => (
                                                                          <img
                                                                              src={`/storage/photos/${ret.photo}`}
                                                                              className="w-full h-full object-cover"
                                                                              alt="file upload yang sudah di acc"
                                                                          />
                                                                      )
                                                                  )
                                                            : null)}
                                                </div>
                                            </div>
                                            <div className="flex flex-col max-h-full gap-2 text-base font-medium">
                                                <h1>
                                                    Nama Item:{" "}
                                                    <span>{rental.item.name}</span>
                                                </h1>
                                                <h1>
                                                    Tangal Peminjaman:{" "}
                                                    <span>
                                                        {rental.rent_date.slice(
                                                            0,
                                                            10
                                                        )}
                                                    </span>
                                                </h1>
                                                <h1>
                                                    Tangal Pengembalian:{" "}
                                                    <span>
                                                        {rental.return_date}
                                                    </span>
                                                </h1>
                                                {!dateReturn?.photo ? (
                                                    <label
                                                        htmlFor="file"
                                                        className="flex w-10 bg-blue-300 py-2 rounded-md cursor-pointer justify-center items-center font-bold hover:bg-blue-400 transition-colors duration-200 ease-in"
                                                    >
                                                        <UploadSimple
                                                            size={20}
                                                            color="#fff"
                                                        />
                                                        <input
                                                            id="file"
                                                            name="file"
                                                            type="file"
                                                            onChange={(e) =>
                                                                handleFileChange(
                                                                    e,
                                                                    index
                                                                )
                                                            }
                                                            className="hidden"
                                                        />
                                                    </label>
                                                ) : (
                                                    <div className="border border-blue-300 py-2 w-10 flex justify-center hover:bg-blue-300 transition-colors duration-200 ease-in">
                                                        <Minus size={20} />
                                                    </div>
                                                )}
                                                <Button
                                                    bgColor="blue.500"
                                                    textColor="white"
                                                    _hover={{
                                                        background: "blue.400",
                                                    }}
                                                    type="submit"
                                                    onClick={(e) =>
                                                        handleRefund(
                                                            e,
                                                            rental.item.id,
                                                            rental.rent_date,
                                                            index
                                                        )
                                                    }
                                                    isDisabled={
                                                        dateReturn?.photo
                                                            ? true
                                                            : false
                                                    }
                                                >
                                                    {isLoading[index] ? (
                                                        <Spinner />
                                                    ) : (
                                                        <>
                                                            {dateReturn?.photo ? (
                                                                dateReturn?.status ? (
                                                                    "Pengembalian diterima!"
                                                                ) : (
                                                                    "Tunggu admin!"
                                                                )
                                                            ) : (
                                                                <>
                                                                    <PaperPlaneRight
                                                                        size={
                                                                            20
                                                                        }
                                                                    />
                                                                    Kirim
                                                                </>
                                                            )}
                                                        </>
                                                    )}
                                                </Button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </section>
            </div>
        </>
    );
};

export default Pengembalian;

{
    /* <table className="bg-white shadow-xl rounded-lg overflow-hidden text-xs md:text-lg min-w-min">
                        <thead className="bg-blue-300 text-left">
                            <tr className="divide-x-2 divide-blue-400">
                                <th className="px-4 py-2 md:w-10">No.</th>
                                <th className="px-4 py-2 md:w-60">Item</th>
                                <th className="px-4 py-2 md:w-20">Upload</th>
                                <th className="px-4 py-2">Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rentals.map((ren, idx) => {
                                if (
                                    auth.user.id === ren.user_id &&
                                    ren.status
                                ) {
                                    return (
                                        <TableRow
                                            key={ren.id}
                                            ren={ren}
                                            idx={idx}
                                            data={data}
                                            handleFileChange={handleFileChange}
                                            handleRefund={handleRefund}
                                            isLoading={isLoading}
                                            handleButtonInfo={handleButtonInfo}
                                            isInfoOpen={isInfoOpen}
                                            returns={returns}
                                            infoLoading={infoLoading}
                                        />
                                    );
                                }
                            })}
                        </tbody>
                    </table> */
}
