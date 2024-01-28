import { Head, Link, router, usePage } from "@inertiajs/react";
import Wave from "react-wavify";
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
import BackgroundImage from "../../../asset/background-gudang.jpeg";
import LoginIlustrator from "../../../asset/login_ilustrator.png";
import {
    ArrowArcLeft,
    ArrowLeft,
    ArrowLineDownLeft,
    House,
} from "@phosphor-icons/react";

// const FirstPage = () => {
//     const { flash } = usePage().props;

//     const formik = useFormik({
//         initialValues: {
//             username: "",
//             nis: "",
//             password: "",
//         },
//         onSubmit: () => {
//             const { username, nis, password } = formik.values;

//             router.post("/", {
//                 username,
//                 nis,
//                 password,
//             });
//         },
//         validationSchema: yup.object().shape({
//             username: yup.string().required("Username is required"),
//             nis: yup.string().required("NIS is required").min(10).max(10),
//             password: yup.string().required("Password is required"),
//         }),
//     });

//     const handleFormInput = (event) => {
//         formik.setFieldValue(event.target.name, event.target.value);
//     };

//     return (
//         <>
//             <Head title="Login" />
//             <div
//                 className="font-fira text-white"
//                 style={{
//                     backgroundImage: `url(${BackgroundImage})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     backgroundRepeat: "no-repeat",
//                     height: "100vh",
//                 }}
//             >
//                 <div className="w-full h-screen flex justify-center items-center pt-10  px-10">
//                     <div className="md:w-[35%] 2xl:w-[30%]">
//                         <div className="w-full p-5 rounded-lg backdrop-blur-lg border border-zinc-400 shadow-lg shadow-zinc-300">
//                             <h1 className="font-bold text-4xl 2xl:text-6xl mb-2">
//                                 Hai! Login Dulu Ya
//                             </h1>
//                             <p className="font-light text-lg mb-5 2xl:mb-10">
//                                 Masukkan Nama, Nis, dan Password!
//                             </p>
//                             <form onSubmit={formik.handleSubmit}>
//                                 <VStack spacing={3}>
//                                     <FormControl
//                                         isInvalid={
//                                             formik.errors.username &&
//                                             formik.touched.username
//                                         }
//                                     >
//                                         <FormLabel>Username</FormLabel>
//                                         <Input
//                                             onChange={handleFormInput}
//                                             value={formik.values.username}
//                                             name="username"
//                                             placeholder="Masukkan Username"
//                                             _placeholder={{ color: 'whiteAlpha.900' }}
//                                         />
//                                         <FormErrorMessage>
//                                             {formik.errors.username}
//                                         </FormErrorMessage>
//                                     </FormControl>

//                                     <FormControl
//                                         isInvalid={
//                                             formik.errors.nis &&
//                                             formik.touched.nis
//                                         }
//                                     >
//                                         <FormLabel>NIS</FormLabel>
//                                         <Input
//                                             onChange={handleFormInput}
//                                             value={formik.values.nis}
//                                             name="nis"
//                                             placeholder="Masukkan NIS"
//                                             _placeholder={{ color: 'whiteAlpha.900' }}
//                                         />
//                                         <FormErrorMessage>
//                                             {formik.errors.nis}
//                                         </FormErrorMessage>
//                                     </FormControl>

//                                     <FormControl
//                                         isInvalid={
//                                             formik.errors.password &&
//                                             formik.touched.password
//                                         }
//                                     >
//                                         <FormLabel>Password</FormLabel>
//                                         <Input
//                                             onChange={handleFormInput}
//                                             value={formik.values.password}
//                                             name="password"
//                                             type="password"
//                                             placeholder="*****"
//                                             _placeholder={{ color: 'whiteAlpha.900' }}
//                                         />
//                                         <FormErrorMessage>
//                                             {formik.errors.password}
//                                         </FormErrorMessage>
//                                     </FormControl>
//                                     <Button
//                                         type="submit"
//                                         colorScheme="gray"
//                                         _hover={{ bg: 'whiteAlpha.700',textColor: 'whiteAlpha.900' }}
//                                         w="full"
//                                     >
//                                         Login
//                                     </Button>
//                                     {flash.error && (
//                                         <Alert
//                                             variant="error"
//                                             message={flash.error}
//                                         />
//                                     )}
//                                 </VStack>
//                                 <p className="text-center text-base mt-5">
//                                     Belum punya akun?{" "}
//                                     <Link
//                                         href="/register"
//                                         className="font-bold hover:underline"
//                                     >
//                                         Sign Up
//                                     </Link>
//                                 </p>
//                             </form>
//                         </div>
//                         {/* <div>
//                             <div className="left-0 right-0 bottom-0 h-auto flex absolute">
//                                 <Wave
//                                     fill="#adb5bd"
//                                     paused={false}
//                                     opacity="0.30"
//                                     options={{
//                                         height: 50,
//                                         amplitude: 100,
//                                         speed: 0.2,
//                                         points: 3,
//                                     }}
//                                 />
//                             </div>
//                             <div className="left-0 right-0 bottom-0 h-auto flex absolute">
//                                 <Wave
//                                     fill="#dee2e6"
//                                     opacity="0.80"
//                                     paused={false}
//                                     options={{
//                                         height: 100,
//                                         amplitude: 80,
//                                         speed: 0.3,
//                                         points: 2,
//                                     }}
//                                 />
//                             </div>
//                             <div className="left-0 right-0 bottom-0 h-auto flex absolute">
//                                 <Wave
//                                     fill="#ced4da"
//                                     paused={false}
//                                     opacity="0.5"
//                                     options={{
//                                         height: 65,
//                                         amplitude: 70,
//                                         speed: 0.17,
//                                         points: 4,
//                                     }}
//                                 />
//                             </div>
//                         </div> */}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default FirstPage;

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
                                            placeholder="Enter Username"
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
                                        <FormLabel>NIS</FormLabel>
                                        <Input
                                            onChange={handleFormInput}
                                            value={formik.values.nis}
                                            name="nis"
                                            placeholder="Enter NIS"
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
                                                base: "orange",
                                                xl: "white",
                                            },
                                        }}
                                        w="full"
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
                                    Don't have an account?{" "}
                                    <Link
                                        href="/register"
                                        className="font-bold hover:underline"
                                    >
                                        Sign Up
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
