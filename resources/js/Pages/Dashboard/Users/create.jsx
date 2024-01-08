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
import { Head, useForm, usePage } from "@inertiajs/react";
import Alert from "@/Components/Fragments/Alert";

export default function CreateUserDashboard({ flash }) {
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
                    title: "Berhasil menambahkan user",
                    status: "success",
                });
            },
            onError: () => {
                toast({
                    title: "Gagal menambahkan user",
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
                <section className="bg-white p-4 rounded-md mt-5">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-3 2xl:space-y-7"
                    >
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
                            <FormErrorMessage>{errors.nis}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={errors.kelas}>
                            <FormLabel>Kelas</FormLabel>
                            <Input
                                type="text"
                                name="kelas"
                                value={data.kelas}
                                onChange={handleChange}
                            />
                            <FormErrorMessage>{errors.kelas}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.role_id}>
                            <FormLabel>Role</FormLabel>
                            <Select
                                name="role_id"
                                value={data.role_id}
                                onChange={handleChange}
                            >
                                <option value="">Role</option>
                                <option value="1">Admin</option>
                                <option value="2">User</option>
                            </Select>
                        </FormControl>
                        <FormControl isInvalid={errors.password}>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPassword ? "text" : "password"}
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
                        <Button type="submit" colorScheme="teal">
                            Create User
                        </Button>
                    </form>
                </section>
            </DashboardLayout>
        </>
    );
}
