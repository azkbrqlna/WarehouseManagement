import { useState } from "react";
import {
    Select,
    Input,
    Button,
    FormControl,
    FormLabel,
    InputGroup,
    InputRightElement,
    useToast,
    FormErrorMessage,
} from "@chakra-ui/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { ArrowLeft } from "@phosphor-icons/react";

export default function CreateUserDashboard() {
    const toast = useToast();
    const { data, setData, post, errors } = useForm({
        username: "",
        kelas: "",
        nis: "",
        role_id: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/user/create", {
            onSuccess: () => {
                toast({
                    title: "Berhasil membuat user!",
                    status: "success",
                });
            },
            onError: () => {
                toast({
                    title: "Mohon cek lagi!",
                    status: "error",
                });
            },
        });
    };

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Head title="Create User" />
            <DashboardLayout title="Create User">
                <div className="flex justify-end">
                    <Button
                        as={Link}
                        href="/users"
                        className="mt-5"
                        bg="#7371E2"
                        _hover={{ background: "#8E8FFA" }}
                        textColor="white"
                    >
                        <ArrowLeft size={24} />
                        Kembali
                    </Button>
                </div>
                <section className="bg-white p-4 rounded-md mt-5">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col space-y-4"
                    >
                        <div className="flex gap-7">
                            <div className="flex flex-col w-1/2 gap-4">
                                <FormControl isInvalid={errors.username}>
                                    <FormLabel>Username</FormLabel>
                                    <Input
                                        type="text"
                                        name="username"
                                        value={data.username}
                                        onChange={handleChange}
                                    />
                                    <FormErrorMessage>
                                        {errors.username}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={errors.nis}>
                                    <FormLabel>NIS</FormLabel>
                                    <Input
                                        type="number"
                                        name="nis"
                                        value={data.nis}
                                        onChange={handleChange}
                                    />
                                    <FormErrorMessage>
                                        {errors.nis}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={errors.kelas}>
                                    <FormLabel>Kelas</FormLabel>
                                    <Input
                                        type="text"
                                        name="kelas"
                                        value={data.kelas}
                                        onChange={handleChange}
                                    />
                                    <FormErrorMessage>
                                        {errors.kelas}
                                    </FormErrorMessage>
                                </FormControl>
                            </div>
                            <div className="flex flex-col w-1/2 gap-4">
                                <FormControl isInvalid={errors.role_id}>
                                    <FormLabel>Role</FormLabel>
                                    <Select
                                        name="role_id"
                                        value={data.role_id}
                                        onChange={handleChange}
                                    >
                                        <option value=""></option>
                                        <option value="1">Admin</option>
                                        <option value="2">User</option>
                                    </Select>
                                </FormControl>
                                <FormControl isInvalid={errors.password}>
                                    <FormLabel>Password</FormLabel>
                                    <InputGroup>
                                        <Input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="password"
                                            value={data.password}
                                            onChange={handleChange}
                                        />
                                        <InputRightElement width="4rem">
                                            <Button
                                                bg="black"
                                                color="white"
                                                _hover={{
                                                    bg: "gray",
                                                    color: "black",
                                                }}
                                                h="1.5rem"
                                                size="sm"
                                                onClick={handleShowPassword}
                                            >
                                                {showPassword ? "Hide" : "Show"}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    <FormErrorMessage>
                                        {errors.password}
                                    </FormErrorMessage>
                                </FormControl>
                                <div className="flex justify-end mt-8">
                                    <Button
                                        type="submit"
                                        bg="#7371E2"
                                        _hover={{ background: "#8E8FFA" }}
                                        textColor="white"
                                    >
                                        Create User
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </DashboardLayout>
        </>
    );
}
