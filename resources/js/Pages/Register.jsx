import { Head, Link } from "@inertiajs/react";
import Wave from "react-wavify";
import InputForm from "@/Components/Form/InputForm";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Register = () => {
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
                            <form>
                                <InputForm
                                    htmlFor="username"
                                    name="username"
                                    type="text"
                                    placeholder="Masukan Nama"
                                >
                                    Username
                                </InputForm>
                                <InputForm
                                    htmlFor="nis"
                                    name="nis"
                                    type="text"
                                    placeholder="Masukan NIS"
                                >
                                    NIS
                                </InputForm>
                                <InputForm
                                    htmlFor="class"
                                    name="class"
                                    type="text"
                                    placeholder="Masukan Kelas"
                                >
                                    Kelas
                                </InputForm>
                                <InputForm
                                    htmlFor="password"
                                    name="password"
                                    type="password"
                                    placeholder="*****"
                                >
                                    Password
                                </InputForm>
                                <InputForm
                                    htmlFor="confirmpassword"
                                    name="confirmpassword"
                                    type="password"
                                    placeholder="*****"
                                >
                                    Confirm Password
                                </InputForm>
                                <button
                                    type="submit"
                                    className="w-full my-4 bg-gradient-to-r from-transparent border-zinc-400 text-white uppercase px-8 py-2 rounded-md transition-all duration-200 ease-out font-semibold cursor-pointer border-2 tracking-wide shadow-md hover:from-zinc-700 hover:to-zinc-300 hover:bg-gradient-to-l hover:border-zinc-800 hover:text-zinc-800 z-10 relative"
                                >
                                    REGISTER
                                </button>
                                <p className="text-center text-base">
                                    Already have an account? <Link href="/" className="font-bold underline hover:text-zinc-400 relative z-10">Sign In</Link>
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
