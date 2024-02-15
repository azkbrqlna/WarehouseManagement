import { Link, router, usePage } from "@inertiajs/react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    VStack,
    Button,
    Box,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import Alert from "@/Components/Fragments/Alert";
import AuthLayout from "@/Layouts/AuthLayout";

export default function LoginPage() {
    const { flash } = usePage().props;
    const formik = useFormik({
        initialValues: {
            username: "",
            nis: "",
            password: "",
        },
        onSubmit: () => {
            const { username, nis, password } = formik.values;

            router.post("/login", {
                username,
                nis,
                password,
            });
        },
        validationSchema: yup.object().shape({
            username: yup.string().required("Username is required"),
            nis: yup.string().required("NIS is required").min(10).max(10),
            password: yup.string().required("Password is required"),
        }),
    });

    const handleFormInput = (event) => {
        formik.setFieldValue(event.target.name, event.target.value);
    };
    return (
        <AuthLayout endpoint='Login'>
            <h1 className="font-bold text-3xl md:text-3xl 3xl:6xl mb-2 capitalize">
                Silahkan masukan akun anda!
            </h1>
            <p className="font-light text-lg mb-5 2xl:mb-10 md:text-base">
                Masukkan Username, NIS, dan Password anda
            </p>
            <form onSubmit={formik.handleSubmit} className="w-full">
                <VStack spacing={{ base: 3, md: 5 }}>
                    <FormControl
                        isInvalid={
                            formik.errors.username && formik.touched.username
                        }
                    >
                        <FormLabel>Username</FormLabel>
                        <Input
                            onChange={handleFormInput}
                            value={formik.values.username}
                            name="username"
                            placeholder="Masukkan Username"
                            _placeholder={{
                                color: {
                                    base: "white",
                                    xl: "gray.500",
                                },
                                opacity: 0.5,
                            }}
                        />
                        <FormErrorMessage>
                            {formik.errors.username}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl
                        isInvalid={formik.errors.nis && formik.touched.nis}
                    >
                        <FormLabel>NIS</FormLabel>
                        <Input
                            onChange={handleFormInput}
                            value={formik.values.nis}
                            name="nis"
                            placeholder="Masukkan NIS"
                            _placeholder={{
                                color: {
                                    base: "white",
                                    xl: "gray.500",
                                },
                                opacity: 0.5,
                            }}
                        />
                        <FormErrorMessage>{formik.errors.nis}</FormErrorMessage>
                    </FormControl>

                    <FormControl
                        isInvalid={
                            formik.errors.password && formik.touched.password
                        }
                    >
                        <FormLabel>Password</FormLabel>
                        <Input
                            onChange={handleFormInput}
                            value={formik.values.password}
                            name="password"
                            type="password"
                            placeholder="*****"
                            _placeholder={{
                                color: {
                                    base: "white",
                                    xl: "gray.500",
                                },
                                opacity: 0.5,
                            }}
                        />
                        <FormErrorMessage>
                            {formik.errors.password}
                        </FormErrorMessage>
                    </FormControl>
                    <Button
                        type="submit"
                        border={{ base: "1px", xl: "0" }}
                        bg={{
                            base: "transparent",
                            xl: "black",
                        }}
                        textColor="white"
                        _hover={{
                            bg: {
                                base: "white",
                                xl: "blackAlpha.800",
                            },
                            textColor: {
                                base: "gray.600",
                                xl: "white",
                            },
                        }}
                        w="full"
                    >
                        Login
                    </Button>
                    {flash.error && (
                        <Alert variant="error" message={flash.error} />
                    )}
                </VStack>
                <p className="text-center text-base mt-5">
                    Belum punya akun?{" "}
                    <Link
                        href="/register"
                        className="font-bold hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
            </form>
        </AuthLayout>
    );
}
