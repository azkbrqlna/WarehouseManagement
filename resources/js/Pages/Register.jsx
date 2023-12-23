import { Head, Link, router } from "@inertiajs/react";
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

const Register = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            nis: "",
            class: "",
            password: "",
            confirmpassword: ""
        },
        onSubmit: (values) => {
            console.log(values);
            router.visit("/home");
            // const { username, nis, password } = formik.values;

            // router.post("/", {
            //     username,
            //     nis,
            //     class,
            //     password,
            //     confirmpassword
            // });

            // formik.setFieldValue("username", "");
            // formik.setFieldValue("nis", "");
            // formik.setFieldValue("class", "");
            // formik.setFieldValue("password", "");
            // formik.setFieldValue("confirmpassword", "");
        },
        validationSchema: yup.object().shape({
            username: yup.string().required("Username is required"),
            nis: yup.string().required("NIS is required").min(10).max(10),
            class: yup.string().required("Class is required"),
            password: yup.string().required("Password is required"),
            confirmpassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match")
        })
    });

    const handleFormInput = (event) => {
        formik.setFieldValue(event.target.name, event.target.value);
    };
    return (
        <>
            <Head title="Register" />
            <div className="bg-zinc-800 font-fira text-slate-50">
                <div className="w-full h-screen flex justify-center items-center px-10">
                    <div className="h-2/3">
                        <div className="w-full">
                            <h1 className="font-bold text-4xl 2xl:text-6xl mb-2">
                                Register account
                            </h1>
                            <p className="font-light text-lg 2xl:mb-10">
                                Welcome, Please enter your edentity.
                            </p>
                            <form onSubmit={formik.handleSubmit}>
                                <VStack spacing={3}>
                                    <FormControl isInvalid={formik.errors.username}>
                                        <FormLabel>Username</FormLabel>
                                        <Input
                                            onChange={handleFormInput}
                                            value={formik.values.username}
                                            name="username"
                                            placeholder="Masukan Username"
                                        />
                                        <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
                                    </FormControl>

                                    <FormControl isInvalid={formik.errors.nis}>
                                        <FormLabel>NIS</FormLabel>
                                        <Input
                                            onChange={handleFormInput}
                                            value={formik.values.nis}
                                            name="nis"
                                            placeholder="Masukan NIS"
                                        />
                                        <FormErrorMessage>{formik.errors.nis}</FormErrorMessage>
                                    </FormControl>
                                    <FormControl isInvalid={formik.errors.class}>
                                        <FormLabel>Kelas</FormLabel>
                                        <Input
                                            onChange={handleFormInput}
                                            value={formik.values.class}
                                            name="class"
                                            placeholder="Masukan Kelas"
                                        />
                                        <FormErrorMessage>{formik.errors.class}</FormErrorMessage>
                                    </FormControl>

                                    <FormControl isInvalid={formik.errors.password}>
                                        <FormLabel>Password</FormLabel>
                                        <Input
                                            onChange={handleFormInput}
                                            value={formik.values.password}
                                            name="password"
                                            type="password"
                                            placeholder="*****"
                                        />
                                        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                                    </FormControl>
                                    <FormControl isInvalid={formik.errors.confirmpassword}>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <Input
                                            onChange={handleFormInput}
                                            value={formik.values.confirmpassword}
                                            name="confirmpassword"
                                            type="password"
                                            placeholder="*****"
                                        />
                                        <FormErrorMessage>{formik.errors.confirmpassword}</FormErrorMessage>
                                    </FormControl>
                                    <Button type="submit" colorScheme="gray" w="full">Login</Button>
                                </VStack>
                                <p className="text-center text-base mt-5">
                                    Already have an account?{" "}
                                    <Link
                                        href="/"
                                        className="font-bold underline hover:text-zinc-400 relative z-10"
                                    >
                                        Sign In
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

export default Register;
