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
import { Head, useForm, usePage } from "@inertiajs/react";
import Alert from "@/Components/Fragments/Alert";

export default function CreateUserDashboard() {
    const { flash } = usePage().props;
    const { data, setData, post } = useForm({
        username: "",
        kelas: "",
        nis: "",
        role: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Data yang dikirim", data);
        post("/user/create");
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
                                onChange={(e) =>
                                    setData("username", e.target.value)
                                }
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>NIS</FormLabel>
                            <Input
                                type="number"
                                name="nis"
                                value={data.nis}
                                onChange={(e) => setData("nis", e.target.value)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Kelas</FormLabel>
                            <Input
                                type="text"
                                name="kelas"
                                value={data.kelas}
                                onChange={(e) =>
                                    setData("kelas", e.target.value)
                                }
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Role</FormLabel>
                            <Select
                                name="role"
                                value={data.role}
                                onChange={(e) =>
                                    setData("role", e.target.value)
                                }
                            >
                                <option value="">Role</option>
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
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
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
                        {flash.error && (
                            <Alert variant="error" message={flash.error} />
                        )}
                    </form>
                </section>
            </DashboardLayout>
        </>
    );
}
