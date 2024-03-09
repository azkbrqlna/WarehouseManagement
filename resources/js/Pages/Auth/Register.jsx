import { Head, Link, router, usePage } from "@inertiajs/react";
import {
    FormControl,
    FormErrorMessage,
    Input,
    VStack,
    Button,
    FormLabel,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import Alert from "@/Components/Fragments/Alert";
import AuthLayout from "@/Layouts/AuthLayout";

const Register = () => {
    const { flash } = usePage().props;
    const formik = useFormik({
        initialValues: {
            username: "",
            nis: "",
            kelas: "",
            password: "",
            confirmpassword: "",
        },
        onSubmit: () => {
            const { username, nis, kelas, password } = formik.values;

            router.post("/register", {
                username,
                nis,
                kelas,
                password,
            });
        },
        validationSchema: yup.object().shape({
            username: yup.string().required("Username is required"),
            nis: yup.string().required("NIS is required").min(10).max(10),
            kelas: yup.string().required("Class is required"),
            password: yup
                .string()
                .required("Password is required")
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    "Password must have lowercase, uppercase, number, special character, and 8 letter"
                ),
            confirmpassword: yup
                .string()
                .oneOf([yup.ref("password"), null], "Passwords must match"),
        }),
    });

    const handleFormInput = (event) => {
        formik.setFieldValue(event.target.name, event.target.value);
    };
    return (
        <AuthLayout endpoint="Register">
            <h1 className="font-bold text-2xl 2xl:text-3xl mb-2 capitalize">
                Silahkan daftarkan akun anda!
            </h1>
            <p className="font-light text-lg mb-5 2xl:mb-10 md:text-lg">
                Masukkan Username, NIS, Kelas, dan Password!
            </p>
            <form onSubmit={formik.handleSubmit} className="w-full">
                <VStack spacing={5}>
                    <div className="flex flex-col gap-3 2xl:flex-col w-full">
                        <div className="flex flex-col gap-4 md:gap-2 2xl:w-full">
                            <FormControl
                                isInvalid={
                                    formik.errors.username &&
                                    formik.touched.username
                                }
                            >
                                <FormLabel
                                    display={{
                                        base: "none",
                                        md: "block",
                                    }}
                                >
                                    Username
                                </FormLabel>
                                <Input
                                    onChange={handleFormInput}
                                    value={formik.values.username}
                                    name="username"
                                    placeholder="Username"
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
                            <div className="lg:flex gap-4 space-y-4 lg:space-y-0">
                                <FormControl
                                    isInvalid={
                                        formik.errors.nis && formik.touched.nis
                                    }
                                >
                                    <FormLabel
                                        display={{
                                            base: "none",
                                            md: "block",
                                        }}
                                    >
                                        NIS
                                    </FormLabel>
                                    <Input
                                        onChange={handleFormInput}
                                        value={formik.values.nis}
                                        name="nis"
                                        placeholder="NIS"
                                        _placeholder={{
                                            color: {
                                                base: "white",
                                                xl: "gray.500",
                                            },
                                            opacity: 0.5,
                                        }}
                                    />
                                    <FormErrorMessage>
                                        {formik.errors.nis}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl
                                    isInvalid={
                                        formik.errors.kelas &&
                                        formik.touched.kelas
                                    }
                                >
                                    <FormLabel
                                        display={{
                                            base: "none",
                                            md: "block",
                                        }}
                                    >
                                        Kelas
                                    </FormLabel>
                                    <Input
                                        onChange={handleFormInput}
                                        value={formik.values.kelas}
                                        name="kelas"
                                        placeholder="Kelas"
                                        _placeholder={{
                                            color: {
                                                base: "white",
                                                xl: "gray.500",
                                            },
                                            opacity: 0.5,
                                        }}
                                    />
                                    <FormErrorMessage>
                                        {formik.errors.kelas}
                                    </FormErrorMessage>
                                </FormControl>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-2 2xl:w-full">
                            <FormControl
                                isInvalid={
                                    formik.errors.password &&
                                    formik.touched.password
                                }
                            >
                                <FormLabel
                                    display={{
                                        base: "none",
                                        md: "block",
                                    }}
                                >
                                    Password
                                </FormLabel>
                                <Input
                                    onChange={handleFormInput}
                                    value={formik.values.password}
                                    name="password"
                                    type="password"
                                    placeholder="Password"
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
                            <FormControl
                                isInvalid={
                                    formik.errors.confirmpassword &&
                                    formik.touched.confirmpassword
                                }
                            >
                                <FormLabel
                                    display={{
                                        base: "none",
                                        md: "block",
                                    }}
                                >
                                    Confirm Password
                                </FormLabel>
                                <Input
                                    onChange={handleFormInput}
                                    value={formik.values.confirmpassword}
                                    name="confirmpassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                    _placeholder={{
                                        color: {
                                            base: "white",
                                            xl: "gray.500",
                                        },
                                        opacity: 0.5,
                                    }}
                                />
                                <FormErrorMessage>
                                    {formik.errors.confirmpassword}
                                </FormErrorMessage>
                            </FormControl>
                        </div>
                    </div>
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
                        Register
                    </Button>
                    {flash.error && (
                        <Alert variant="error" message={flash.error} />
                    )}
                </VStack>
                <p className="text-center text-base mt-5">
                    Sudah punya akun?{" "}
                    <Link href="/login" className="font-bold hover:underline">
                        Sign In
                    </Link>
                </p>
            </form>
        </AuthLayout>
    );
};

export default Register;
