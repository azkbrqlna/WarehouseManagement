import { Button, CloseButton, Progress, Spinner } from "@chakra-ui/react";
import {
    CheckCircle,
    Minus,
    MinusCircle,
    PaperPlaneRight,
    UploadSimple,
} from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { React, Fragment } from "react";

export default function TableRow({
    ren,
    idx,
    returns,
    isInfoOpen,
    data,
    handleButtonInfo,
    handleFileChange,
    handleRefund,
    isLoading,
}) {
    const dateReturn = returns.find((date) => date.rent_date === ren.rent_date);
    return (
        <Fragment key={ren.id}>
            <tr className="divide-x-2 divide-blue-400">
                <td className="px-4 py-2">{idx + 1}.</td>
                <td className="px-4 py-2">{ren.item.name}</td>
                <td className="px-4 py-2">
                    <button
                        onClick={() => handleButtonInfo(idx)}
                        className="flex mx-auto justify-center px-2 py-1 border border-blue-300 rounded-lg hover:bg-blue-300 transition-all duration-200 ease-in"
                    >
                        <UploadSimple size={20} />
                    </button>
                </td>
                <td className="px-4 py-3">
                    {dateReturn?.photo ? (
                        dateReturn?.status ? (
                            <div className="flex justify-center">
                                <CheckCircle size={25} color="#38A169" />
                            </div>
                        ) : (
                            <Progress size="xs" isIndeterminate />
                        )
                    ) : (
                        <div className="flex justify-center">
                            <MinusCircle size={25} color="#E53E3E" />
                        </div>
                    )}
                </td>
            </tr>
            <AnimatePresence>
                {isInfoOpen[idx] && (
                    <motion.div
                        className="fixed bottom-0 left-0 w-full h-[85%] bg-white z-50 overflow-y-auto rounded-t-2xl"
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
                        <div className="flex justify-between px-3 py-2">
                            <h1 className="font-bold text-2xl text-black">
                                Upload Pengembalian
                            </h1>
                            <CloseButton
                                size="lg"
                                onClick={() => handleButtonInfo(idx)}
                            />
                        </div>
                        <div className="flex-col flex px-5 gap-4">
                            <div className="flex flex-col self-center">
                                <h1 className="font-bold text-lg">
                                    Preview Upload
                                </h1>
                                <div className="border-2 border-blue-300 w-32 h-32 overflow-hidden rounded-md">
                                    {(data.file[idx] ? (
                                        <img
                                            src={URL.createObjectURL(
                                                data.file[idx]
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
                                                          ren.rent_date
                                                  )
                                                  .map((ret) => (
                                                      <img
                                                          src={`/storage/photos/${ret.photo}`}
                                                          className="w-full h-full object-cover"
                                                          alt="file upload yang sudah di acc"
                                                      />
                                                  ))
                                            : null)}
                                </div>
                            </div>
                            <div className="flex flex-col max-h-full gap-2 text-base font-medium">
                                <h1>
                                    Nama Item: <span>{ren.item.name}</span>
                                </h1>
                                <h1>
                                    Tangal Peminjaman:{" "}
                                    <span>{ren.rent_date.slice(0, 10)}</span>
                                </h1>
                                <h1>
                                    Tangal Pengembalian:{" "}
                                    <span>{ren.return_date}</span>
                                </h1>
                                {!dateReturn?.photo ? (
                                    <label
                                        htmlFor="file"
                                        className="flex w-10 bg-blue-300 py-2 rounded-md cursor-pointer justify-center items-center font-bold hover:bg-blue-400 transition-colors duration-200 ease-in"
                                    >
                                        <UploadSimple size={20} color="#fff" />
                                        <input
                                            id="file"
                                            name="file"
                                            type="file"
                                            onChange={(e) =>
                                                handleFileChange(e, idx)
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
                                            ren.item.id,
                                            ren.rent_date,
                                            idx
                                        )
                                    }
                                    isDisabled={
                                        dateReturn?.photo ? true : false
                                    }
                                >
                                    {isLoading[idx] ? (
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
                                                        size={20}
                                                    />
                                                    Kirim
                                                </>
                                            )}
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Fragment>
    );
}
