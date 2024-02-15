import TableRow from "@/Components/Fragments/TablePengembalian";
import Navbar from "@/Layouts/Navbar";
import { useToast } from "@chakra-ui/react";
import { Head, router, useForm } from "@inertiajs/react";
import { useState } from "react";
import Headroom from "react-headroom";

const Pengembalian = ({ rentals, auth, returns }) => {
    const toast = useToast();
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
    window.addEventListener("scroll", borderChange);

    return (
        <>
            <Head title="Pengembalian" />
            <div className="bg-azka pb-5 min-h-screen">
                <Headroom>
                    <div
                        className={`bg-azka z-10 ${
                            isBorder ? "border-b-2 border-azka" : ""
                        }`}
                    >
                        <Navbar />
                    </div>
                </Headroom>
                <section className="px-10 py-5">
                    <div className="flex justify-center">
                        <h1 className="font-bold text-md text-white">
                            Upload foto barang yang hendak anda kembalikan!
                        </h1>
                    </div>
                </section>
                <div className="flex justify-center">
                    <table className="bg-white shadow-xl rounded-lg overflow-hidden text-xs md:text-lg min-w-min">
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
                    </table>
                </div>
            </div>
        </>
    );
};

export default Pengembalian;

{
    /* <Table bg="whiteAlpha.500" w="100px">
    <Thead>
        <Tr>
            <Th textColor="white">No.</Th>
            <Th textColor="white">Item</Th>
            <Th textColor="white" colSpan={2}>
                Tanggal Pengembalian
            </Th>
            <Th textColor="white" textAlign="center">
                Upload
            </Th>
            <Th textColor="white" textAlign="center">
                Preview
            </Th>
            <Th textColor="white" textAlign="center">
                Submit
            </Th>
        </Tr>
    </Thead>
    <Tbody>
        {rentals.map((refund, index) => {
            const dateReturn = returns.find(
                (date) =>
                    refund.rent_date === date.rent_date
            );
            if (
                auth.user.id === refund.user_id &&
                refund.status
            ) {
                return (
                    <Tr key={refund.id} textColor="white">
                        <Td>{index + 1}</Td>
                        <Td>{refund.item.name}</Td>
                        <Td colSpan={2}>
                            {refund.return_date}
                        </Td>
                        <Td>
                            {!dateReturn.photo ? (
                                <FormLabel
                                    htmlFor={`file_upload_${index}`}
                                    display="flex"
                                    bg="whiteAlpha.400"
                                    _hover={{
                                        background:
                                            "whiteAlpha.800",
                                    }}
                                    transition="background 0.3s ease-in-out"
                                    borderRadius="10px"
                                    w="140px"
                                    p="8px"
                                    cursor="pointer"
                                    justifyContent="center"
                                    alignItems="center"
                                    fontSize="700"
                                >
                                    <UploadSimple
                                        size={30}
                                    />
                                    <Input
                                        id={`file_upload_${index}`}
                                        name="file"
                                        type="file"
                                        display="none"
                                        onChange={(e) =>
                                            handleFileChange(
                                                e,
                                                index
                                            )
                                        }
                                    />
                                </FormLabel>
                            ) : (
                                <div className="h-full flex items-center justify-center">
                                    <Minus size={20} />
                                </div>
                            )}
                        </Td>
                        <Td>
                            {(data.file[index] ? (
                                <Box
                                    w="70px"
                                    h="70px"
                                    overflow="hidden"
                                >
                                    <img
                                        src={URL.createObjectURL(
                                            data.file[index]
                                        )}
                                        className="w-full h-full object-cover"
                                    />
                                </Box>
                            ) : null) ||
                                (dateReturn.photo
                                    ? returns
                                          .filter(
                                              (re) =>
                                                  re.rent_date ===
                                                  refund.rent_date
                                          )
                                          .map((re) => (
                                              <Box
                                                  key={
                                                      re.id
                                                  }
                                                  w="70px"
                                                  h="70px"
                                                  overflow="hidden"
                                              >
                                                  <img
                                                      src={`/storage/photos/${re.photo}`}
                                                      style={{
                                                          width: "100%",
                                                          height: "100%",
                                                          objectFit:
                                                              "cover",
                                                      }}
                                                  />
                                              </Box>
                                          ))
                                    : null)}
                        </Td>
                        <Td>
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
                                        refund.item.id,
                                        refund.rent_date,
                                        index
                                    )
                                }
                                isDisabled={
                                    dateReturn.photo
                                        ? true
                                        : false
                                }
                            >
                                {isLoading[index] ? (
                                    <Spinner />
                                ) : (
                                    <>
                                        {dateReturn.photo ? (
                                            dateReturn.status ? (
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
                        </Td>
                    </Tr>
                );
            }
        })}
    </Tbody>
</Table> */
}
