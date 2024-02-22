import {
    Box,
    FormControl,
    FormLabel,
    Input,
    NumberInput,
    NumberInputField,
} from "@chakra-ui/react";
import { UploadSimple } from "@phosphor-icons/react";
import React from "react";

export default function ItemForm({
    onSubmit,
    handleChange,
    data,
    id,
    setData,
}) {
    return (
        <div className="flex gap-4">
            <form
                onSubmit={onSubmit}
                id={id}
                className="space-y-3 2xl:space-y-7 w-1/2"
            >
                <FormControl>
                    <FormLabel>Name of Item</FormLabel>
                    <Input
                        type="text"
                        name="name"
                        value={data.name || ""}
                        onChange={handleChange}
                        placeholder="Input name of item"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Quantity</FormLabel>
                    <NumberInput>
                        <NumberInputField
                            name="total_item"
                            value={data.total_item || ""}
                            onChange={handleChange}
                            placeholder="Input Quantity"
                        />
                    </NumberInput>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="file_upload">
                        Input Item Picture
                    </FormLabel>
                    <FormLabel
                        htmlFor="file_upload"
                        display="flex"
                        borderWidth="2px"
                        borderColor="#000"
                        _groupHover={{ background: "#000" }}
                        transition="background 0.3s ease-in-out"
                        borderRadius="10px"
                        w="full"
                        p="10px"
                        cursor="pointer"
                        justifyContent="center"
                        alignItems="center"
                        fontSize="700"
                    >
                        <Box as={UploadSimple} size={30} color="#888" transition="color 0.3s ease-in-out" />
                        <Input
                            id="file_upload"
                            name="file"
                            type="file"
                            display="none"
                            onChange={(e) => setData("file", e.target.files[0])}
                        />
                    </FormLabel>
                </FormControl>
            </form>
            <div className="w-1/2 flex">
                {data.file && (
                    <div className="mx-auto">
                        <h1 className="text-base font-semibold">
                            Preview Gambar:{" "}
                        </h1>
                        <figure className="w-60 h-60 border overflow-hidden">
                            <img
                                src={URL.createObjectURL(data.file)}
                                className="w-full h-full object-cover"
                            />
                        </figure>
                    </div>
                )}
            </div>
        </div>
    );
}
