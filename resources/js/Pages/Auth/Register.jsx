import { Head, Link, router, usePage } from "@inertiajs/react";
import Wave from "react-wavify";
import {
    FormControl,
    FormErrorMessage,
    Input,
    VStack,
    Button,
    FormLabel,
    Box,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import Alert from "@/Components/Fragments/Alert";
import BackgroundImage from "../../../asset/background-gudang.jpeg";
import { ArrowLeft } from "@phosphor-icons/react";

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
            password: yup.string().required("Password is required"),
            confirmpassword: yup
                .string()
                .oneOf([yup.ref("password"), null], "Passwords must match"),
        }),
    });

    const handleFormInput = (event) => {
        formik.setFieldValue(event.target.name, event.target.value);
    };
    return (
        <>
            <Head title="Register" />
            <div className="w-full h-screen relative">
                <div className="absolute w-full h-screen flex items-center justify-center xl:items-start xl:justify-normal">
                    <div className="xl:w-3/5 min-h-full relative">
                        <img
                            src={BackgroundImage}
                            className="object-cover w-full h-screen"
                        />
                        <div className="absolute top-0 w-full h-screen">
                            <div className="flex flex-col justify-between text-white h-full xl:bg-gradient-to-t from-orange-400 px-10 py-8 3xl:pb-20 pr-[10%]">
                                <Box
                                    as={Link}
                                    href="/"
                                    className="flex items-center gap-2 hover:bg-white hover:text-orange-300 w-min p-2 rounded-lg transition-all duration-200 ease-in"
                                >
                                    <ArrowLeft size={30} />
                                    <h1 className="text-xl font-bold">Back</h1>
                                </Box>
                                <div className="hidden xl:flex flex-col gap-10 3xl:gap-20 wfull">
                                    <h1 className="font-bold text-4xl 3xl:text-6xl">
                                        Warehouse Management SMKN 7 Semarang
                                    </h1>
                                    <p className="3xl:text-xl">
                                        Welcome to Warehouse Management SMKN 7
                                        Semarang, the leading solution for
                                        storage and distribution needs. We
                                        provide modern warehouse services that
                                        are efficient, secure and well-managed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute xl:static xl:w-2/5 xl:min-h-full p-5 xl:py-20 3xl:py-52 xl:px-7 rounded-lg backdrop-blur-md xl:backdrop-blur-0 shadow-orange-300 shadow-xl">
                        <div className="w-full p-5 text-white xl:text-black flex items-center flex-col">
                            <h1 className="font-bold text-4xl 2xl:text-6xl mb-2">
                                Ready to Sign In?
                            </h1>
                            <p className="font-light text-lg mb-5 2xl:mb-10">
                                Enter your username, nis, and password!
                            </p>
                            <form
                                onSubmit={formik.handleSubmit}
                                className="w-full"
                            >
                                <VStack spacing={5}>
                                    <div className="flex flex-col gap-3 md:flex-row 2xl:flex-col w-full">
                                        <div className="flex flex-col gap-4 md:gap-2 md:w-1/2 2xl:w-full">
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
                                                    value={
                                                        formik.values.username
                                                    }
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
                                            <FormControl
                                                isInvalid={
                                                    formik.errors.nis &&
                                                    formik.touched.nis
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
                                        <div className="flex flex-col gap-4 md:gap-2 md:w-1/2 2xl:w-full">
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
                                                    value={
                                                        formik.values.password
                                                    }
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
                                                    formik.errors
                                                        .confirmpassword &&
                                                    formik.touched
                                                        .confirmpassword
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
                                                    {
                                                        formik.errors
                                                            .confirmpassword
                                                    }
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
                                                base: "orange",
                                                xl: "white",
                                            },
                                        }}
                                        w="full"
                                    >
                                        Register
                                    </Button>
                                    {flash.error && (
                                        <Alert
                                            variant="error"
                                            message={flash.error}
                                        />
                                    )}
                                </VStack>
                                <p className="text-center text-base mt-5">
                                    Sudah punya akun?{" "}
                                    <Link
                                        href="/login"
                                        className="font-bold hover:underline"
                                    >
                                        Sign In
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;

// <div
//     className="font-fira text-slate-50"
//     style={{
//         backgroundImage: `url(${BackgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         height: "100vh",
//     }}
// >
//     <div className="w-full h-screen flex justify-center items-center px-10">
//         <div className="h-2/3 md:w-1/2 2xl:w-[30%]">
//             <div className="w-full p-5 rounded-lg backdrop-blur-lg border border-zinc-400 shadow-lg shadow-zinc-300">
//                 <h1 className="font-bold text-4xl 2xl:text-6xl mb-2">
//                     Registrasi Akun
//                 </h1>
//                 <p className="font-light text-lg mb-5 2xl:mb-10">
//                     Selamat datang, Ayo masukkan identitasmu!.
//                 </p>
//                 <form onSubmit={formik.handleSubmit}>
//                     <VStack spacing={5}>
//                         <div className="flex flex-col gap-3 md:flex-row 2xl:flex-col w-full">
//                             <div className="flex flex-col gap-4 md:gap-2 md:w-1/2 2xl:w-full">
//                                 <FormControl
//                                     isInvalid={
//                                         formik.errors.username &&
//                                         formik.touched.username
//                                     }
//                                 >
//                                     <FormLabel
//                                         display={{
//                                             base: "none",
//                                             md: "block",
//                                         }}
//                                     >
//                                         Username
//                                     </FormLabel>
//                                     <Input
//                                         onChange={handleFormInput}
//                                         value={
//                                             formik.values.username
//                                         }
//                                         name="username"
//                                         placeholder="Username"
//                                         _placeholder={{
//                                             color: "whiteAlpha.900",
//                                         }}
//                                     />
//                                     <FormErrorMessage>
//                                         {formik.errors.username}
//                                     </FormErrorMessage>
//                                 </FormControl>
//                                 <FormControl
//                                     isInvalid={
//                                         formik.errors.nis &&
//                                         formik.touched.nis
//                                     }
//                                 >
//                                     <FormLabel
//                                         display={{
//                                             base: "none",
//                                             md: "block",
//                                         }}
//                                     >
//                                         NIS
//                                     </FormLabel>
//                                     <Input
//                                         onChange={handleFormInput}
//                                         value={formik.values.nis}
//                                         name="nis"
//                                         placeholder="NIS"
//                                         _placeholder={{
//                                             color: "whiteAlpha.900",
//                                         }}
//                                     />
//                                     <FormErrorMessage>
//                                         {formik.errors.nis}
//                                     </FormErrorMessage>
//                                 </FormControl>
//                                 <FormControl
//                                     isInvalid={
//                                         formik.errors.kelas &&
//                                         formik.touched.kelas
//                                     }
//                                 >
//                                     <FormLabel
//                                         display={{
//                                             base: "none",
//                                             md: "block",
//                                         }}
//                                     >
//                                         Kelas
//                                     </FormLabel>
//                                     <Input
//                                         onChange={handleFormInput}
//                                         value={formik.values.kelas}
//                                         name="kelas"
//                                         placeholder="Kelas"
//                                         _placeholder={{
//                                             color: "whiteAlpha.900",
//                                         }}
//                                     />
//                                     <FormErrorMessage>
//                                         {formik.errors.kelas}
//                                     </FormErrorMessage>
//                                 </FormControl>
//                             </div>
//                             <div className="flex flex-col gap-4 md:gap-2 md:w-1/2 2xl:w-full">
//                                 <FormControl
//                                     isInvalid={
//                                         formik.errors.password &&
//                                         formik.touched.password
//                                     }
//                                 >
//                                     <FormLabel
//                                         display={{
//                                             base: "none",
//                                             md: "block",
//                                         }}
//                                     >
//                                         Password
//                                     </FormLabel>
//                                     <Input
//                                         onChange={handleFormInput}
//                                         value={
//                                             formik.values.password
//                                         }
//                                         name="password"
//                                         type="password"
//                                         placeholder="Password"
//                                         _placeholder={{
//                                             color: "whiteAlpha.900",
//                                         }}
//                                     />
//                                     <FormErrorMessage>
//                                         {formik.errors.password}
//                                     </FormErrorMessage>
//                                 </FormControl>
//                                 <FormControl
//                                     isInvalid={
//                                         formik.errors
//                                             .confirmpassword &&
//                                         formik.touched
//                                             .confirmpassword
//                                     }
//                                 >
//                                     <FormLabel
//                                         display={{
//                                             base: "none",
//                                             md: "block",
//                                         }}
//                                     >
//                                         Confirm Password
//                                     </FormLabel>
//                                     <Input
//                                         name="confirmpassword"
//                                         type="password"
//                                         placeholder="Confirm Password"
//                                         _placeholder={{
//                                             color: "whiteAlpha.900",
//                                         }}
//                                     />
//                                     <FormErrorMessage>
//                                         {
//                                             formik.errors
//                                                 .confirmpassword
//                                         }
//                                     </FormErrorMessage>
//                                 </FormControl>
//                             </div>
//                         </div>
//                         <Button
//                             type="submit"
//                             colorScheme="gray"
//                             w="full"
//                             _hover={{ bg: 'whiteAlpha.700',textColor: 'whiteAlpha.900' }}
//                         >
//                             Register
//                         </Button>
//                         {flash.error && (
//                             <Alert
//                                 variant="error"
//                                 message={flash.error}
//                             />
//                         )}
//                     </VStack>
//                     <p className="text-center text-base mt-5">
//                         Sudah punya akun?{" "}
//                         <Link
//                             href="/"
//                             className="font-bold hover:underline"
//                         >
//                             Sign In
//                         </Link>
//                     </p>
//                 </form>
//             </div>
//             {/* <div>
//                 <div className="left-0 right-0 bottom-0 h-auto flex absolute">
//                     <Wave
//                         fill="#adb5bd"
//                         paused={false}
//                         opacity="0.30"
//                         options={{
//                             height: 50,
//                             amplitude: 100,
//                             speed: 0.2,
//                             points: 3,
//                         }}
//                     />
//                 </div>
//                 <div className="left-0 right-0 bottom-0 h-auto flex absolute">
//                     <Wave
//                         fill="#dee2e6"
//                         opacity="0.80"
//                         paused={false}
//                         options={{
//                             height: 100,
//                             amplitude: 80,
//                             speed: 0.3,
//                             points: 2,
//                         }}
//                     />
//                 </div>
//                 <div className="left-0 right-0 bottom-0 h-auto flex absolute">
//                     <Wave
//                         fill="#ced4da"
//                         paused={false}
//                         opacity="0.5"
//                         options={{
//                             height: 65,
//                             amplitude: 70,
//                             speed: 0.17,
//                             points: 4,
//                         }}
//                     />
//                 </div>
//             </div> */}
//         </div>
//     </div>
// </div>
