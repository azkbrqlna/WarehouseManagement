import { useState } from "react";
import {
    Select,
    Input,
    Button,
    FormControl,
    FormLabel,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head, useForm } from "@inertiajs/react";

export default function CreateUserDashboard() {
    const { data, setData, post } = useForm({
        username: "",
        kelas: "",
        nis: "",
        role: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/users/create");
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
                        <FormControl>
                            <FormLabel>Username</FormLabel>
                            <Input
                                type="text"
                                name="username"
                                value={data.username}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>NIS</FormLabel>
                            <Input
                                type="number"
                                name="nis"
                                value={data.nis}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Kelas</FormLabel>
                            <Input
                                type="text"
                                name="kelas"
                                value={data.kelas}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Role</FormLabel>
                            <Select
                                name="role"
                                value={data.role}
                                onChange={handleChange}
                            >
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </Select>
                        </FormControl>
                        <FormControl>
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
