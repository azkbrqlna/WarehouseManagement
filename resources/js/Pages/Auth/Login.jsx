import { Head, Link, router, usePage } from "@inertiajs/react";
import Wave from "react-wavify";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    VStack,
    Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import Alert from "@/Components/Fragments/Alert";

const FirstPage = () => {
    const { flash } = usePage().props;

    const formik = useFormik({
        initialValues: {
            username: "",
            nis: "",
            password: "",
        },
        onSubmit: () => {
            const { username, nis, password } = formik.values;

            router.post("/", {
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
        <>
            <Head title="Login" />
            <div className="bg-zinc-800 font-fira text-slate-50">
                <div className="w-full h-screen flex justify-center 2xl:items-center pt-10 2xl:pt-0 px-10">
                    <div className="md:w-[35%] 2xl:w-[30%]">
                        <div className="w-full">
                            <h1 className="font-bold text-4xl 2xl:text-6xl mb-2">
                                Hai! Login Dulu Ya
                            </h1>
                            <p className="font-light text-lg mb-5 2xl:mb-10">
                               Masukkan Nama, Nis, dan Password!
                            </p>
                            <form onSubmit={formik.handleSubmit}>
                                <VStack spacing={3}>
                                    <FormControl
                                        isInvalid={
                                            formik.errors.username &&
                                            formik.touched.username
                                        }
                                    >
                                        <FormLabel>Username</FormLabel>
                                        <Input
                                            onChange={handleFormInput}
                                            value={formik.values.username}
                                            name="username"
                                            placeholder="Masukkan Username"
                                        />
                                        <FormErrorMessage>
                                            {formik.errors.username}
                                        </FormErrorMessage>
                                    </FormControl>

                                    <FormControl
                                        isInvalid={
                                            formik.errors.nis &&
                                            formik.touched.nis
                                        }
                                    >
                                        <FormLabel>NIS</FormLabel>
                                        <Input
                                            onChange={handleFormInput}
                                            value={formik.values.nis}
                                            name="nis"
                                            placeholder="Masukkan NIS"
                                        />
                                        <FormErrorMessage>
                                            {formik.errors.nis}
                                        </FormErrorMessage>
                                    </FormControl>

                                    <FormControl
                                        isInvalid={
                                            formik.errors.password &&
                                            formik.touched.password
                                        }
                                    >
                                        <FormLabel>Password</FormLabel>
                                        <Input
                                            onChange={handleFormInput}
                                            value={formik.values.password}
                                            name="password"
                                            type="password"
                                            placeholder="*****"
                                        />
                                        <FormErrorMessage>
                                            {formik.errors.password}
                                        </FormErrorMessage>
                                    </FormControl>
                                    <Button
                                        type="submit"
                                        colorScheme="gray"
                                        w="full"
                                        zIndex={1}
                                    >
                                        Login
                                    </Button>
                                    {flash.error && (
                                        <Alert
                                            variant="error"
                                            message={flash.error}
                                        />
                                    )}
                                </VStack>
                                <p className="text-center text-base mt-5">
                                    Belum punya akun?{" "}
                                    <Link
                                        href="/register"
                                        className="font-bold underline hover:text-zinc-400 relative z-10"
                                    >
                                        Sign Up
                                    </Link>
                                </p>
                            </form>
                        </div>
                        <div>
                            <div className="left-0 right-0 bottom-0 h-auto flex absolute">
                                <Wave
                                    fill="#adb5bd"
                                    paused={false}
                                    opacity="0.30"
                                    options={{
                                        height: 50,
                                        amplitude: 100,
                                        speed: 0.2,
                                        points: 3,
                                    }}
                                />
                            </div>
                            <div className="left-0 right-0 bottom-0 h-auto flex absolute">
                                <Wave
                                    fill="#dee2e6"
                                    opacity="0.80"
                                    paused={false}
                                    options={{
                                        height: 100,
                                        amplitude: 80,
                                        speed: 0.3,
                                        points: 2,
                                    }}
                                />
                            </div>
                            <div className="left-0 right-0 bottom-0 h-auto flex absolute">
                                <Wave
                                    fill="#ced4da"
                                    paused={false}
                                    opacity="0.5"
                                    options={{
                                        height: 65,
                                        amplitude: 70,
                                        speed: 0.17,
                                        points: 4,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FirstPage;
