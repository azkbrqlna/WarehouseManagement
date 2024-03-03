import TableRow from "@/Components/Fragments/TablePengembalian";
import Navbar from "@/Layouts/Navbar";
import {
    Button,
    CloseButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spinner,
    useToast,
} from "@chakra-ui/react";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import {
    ArrowFatLineUp,
    Bell,
    Minus,
    PaperPlaneRight,
    UploadSimple,
} from "@phosphor-icons/react";
import { useState } from "react";
import Headroom from "react-headroom";
import { AnimatePresence, motion } from "framer-motion";
import SelectDropdown from "@/Components/Fragments/SelectDropdown";
import { formatDateMonthYear } from "@/Components/Fragments/ListStyle";

const Pengembalian = ({
    rentals,
    auth,
    returns,
    rental_count,
    return_count,
    initial,
}) => {
    const toast = useToast();
    const [selectedValue, setSelectedValue] = useState({});
    const [isOpen, setOpen] = useState(false);
    const [isSelect, setSelect] = useState(false);
    const [isBorder, setBorder] = useState(false);
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

    let acceptData = 1;
    const MenuAccept = returns.map((returning) => {
        const currentDate = new Date();
        const returnDate = new Date(returning.actual_return_date);
        const diffTime = currentDate.getTime() - returnDate.getTime();
        const diffDay = Math.ceil(diffTime / (1000 * 3600 * 24));
        if (diffDay > 7) {
            return null;
        }
        return (
            auth.user.id === returning.user_id &&
            returning.status && (
                <tr
                    key={returning.id}
                    className="bg-white hover:bg-gray-100 divide-x divide-gray-100 text-gray-700 text-[11px]"
                >
                    <td className="px-4 py-2 whitespace-nowrap">
                        {returning.item.name}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                        {formatDateMonthYear(returning.actual_return_date)}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                        {returning.status && "Diterima"}
                    </td>
                </tr>
            )
        );
    });

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
                        <Navbar
                            peminjaman={rental_count}
                            pengembalian={return_count}
                            initial={initial}
                        />
                    </div>
                </Headroom>
                <section className="md:px-14 px-10 py-5 space-y-10 md:flex gap-20 justify-center items-center relative">
                    <div className="hidden md:block absolute w-[1100px] h-[1100px] bg-white -bottom-[570px] md:-bottom-[620px] -right-[570px] rotate-[45deg] -z-0" />
                    <div className="space-y-5 md:w-1/2">
                        <h1 className="text-xl md:text-4xl 3xl:text-6xl font-bold text-white">
                            Pengembalian Barang Warehouse Management SMKN 7
                            Semarang
                        </h1>
                        <div className="text-white space-y-2">
                            <p className="font-bold md:text-xl">
                                Pilih Nama Item
                            </p>
                            <div className="flex items-end">
                                <div className="flex-1">
                                    <SelectDropdown
                                        returns={returns}
                                        rentals={rentals}
                                        auth={auth}
                                        selectedValue={selectedValue}
                                        handleOptionSelect={handleOptionSelect}
                                        isOpen={isSelect}
                                        toggleDropdown={() =>
                                            setSelect(!isSelect)
                                        }
                                    />
                                </div>
                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        width="10px"
                                        bg="transparent"
                                        _active={{ bg: "transparent" }}
                                        _hover={{ bg: "transparent" }}
                                    >
                                        <div className="absolute bottom-0 left-4">
                                            <Bell size={36} color="#fff" />
                                            {returns.map((returning) => {
                                                return auth.user.id ===
                                                    returning.user_id &&
                                                    returning.status ? (
                                                    <div
                                                        className="rounded-full bg-white w-4 h-4 flex justify-center items-center absolute bottom-4 left-4"
                                                        key={returning.id}
                                                    >
                                                        <p className="text-azka text-xs">
                                                            {acceptData++}
                                                        </p>
                                                    </div>
                                                ) : (
                                                    ""
                                                );
                                            })}
                                        </div>
                                    </MenuButton>
                                    <MenuList zIndex={2}>
                                        <MenuItem>
                                            <table className="min-w-full bg-white shadow-md rounded-lg">
                                                <thead className="bg-gray-200">
                                                    <tr className="divide-x divide-gray-50">
                                                        <th className="px-4 py-2 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                                                            Item
                                                        </th>
                                                        <th className="px-4 py-2 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                                                            Tanggal
                                                        </th>
                                                        <th className="px-4 py-2 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                                                            Keterangan
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>{MenuAccept}</tbody>
                                            </table>
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:flex items-center md:h-96 h-60 rounded-md z-0">
                        <button
                            onClick={() => setOpen(!isOpen)}
                            className="text-white flex flex-col items-center justify-center w-full h-48 xl:h-60 3xl:h-[275px] bg-upload rounded-lg"
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
                                        <div
                                            key={rental.id}
                                            className="flex-col flex px-5 gap-4"
                                        >
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
                                                <div className="flex mb-4">
                                                    <div className="font-semibold space-y-3 w-1/2">
                                                        <h2>Nama Item</h2>
                                                        <h2>
                                                            Tanggal Peminjaman
                                                        </h2>
                                                        <h2>
                                                            Tanggal Pengembalian
                                                        </h2>
                                                    </div>
                                                    <div className="space-y-3 w-1/2">
                                                        <h2 className="truncate">
                                                            {rental.item.name}
                                                        </h2>
                                                        <h2>
                                                            {formatDateMonthYear(
                                                                rental.rent_date
                                                            )}
                                                        </h2>
                                                        <h2 className="truncate">
                                                            {formatDateMonthYear(
                                                                rental.return_date
                                                            )}
                                                        </h2>
                                                    </div>
                                                </div>
                                                {!dateReturn?.photo ? (
                                                    <label
                                                        htmlFor="file"
                                                        className="flex mx-auto w-1/3 bg-blue-300 py-2 rounded-md cursor-pointer justify-center items-center font-bold hover:bg-blue-400 transition-colors duration-200 ease-in"
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
