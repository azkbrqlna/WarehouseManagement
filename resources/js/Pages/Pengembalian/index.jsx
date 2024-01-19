import Navbar from "@/Layouts/Navbar";
import { Button } from "@chakra-ui/react";
import { Head, router, useForm } from "@inertiajs/react";
import { UploadSimple } from "@phosphor-icons/react";
import { useState } from "react";
import Headroom from "react-headroom";

const Pengembalian = () => {
    const [isBorder, setBorder] = useState(false);
    const borderChange = () => {
        setBorder(window.scrollY > 110 ? true : false);
    };
    window.addEventListener("scroll", borderChange);

    const { data, setData } = useForm({
        file_upload: "",
    });
    const handleRefund = (e) => {
        e.preventDefault();
        router.post("/")
    };
    return (
        <>
            <Head title="Pengembalian" />
            <div className="bg-zinc-800 pb-5 min-h-screen">
                <Headroom>
                    <div
                        className={`bg-zinc-800 z-10 ${
                            isBorder ? "border-b-2 border-zinc-500" : ""
                        }`}
                    >
                        <Navbar />
                    </div>
                </Headroom>
                <section className="px-10 py-5">
                    <div className="flex justify-center">
                        <h1 className="font-bold text-md text-zinc-400">
                            Upload foto barang yang hendak anda kembalikan!
                        </h1>
                    </div>
                </section>
                <div className="w-full h-96 px-10">
                    <form onSubmit={handleRefund}>
                        <label
                            htmlFor="refund"
                            className="flex flex-col w-full bg-zinc-400 h-80 border-2 border-dashed border-zinc-800 justify-center items-center cursor-pointer"
                        >
                            <input
                                type="file"
                                id="refund"
                                className="hidden"
                                onChange={(e) =>
                                    setData("file", e.target.files[0])
                                }
                            />
                            <UploadSimple size={35} />
                            <p className="font-medium">Upload Foto!</p>
                        </label>
                        <Button
                            mt="10px"
                            w="full"
                            bg="whiteAlpha.600"
                            type="submit"
                        >
                            Kirim
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Pengembalian;
