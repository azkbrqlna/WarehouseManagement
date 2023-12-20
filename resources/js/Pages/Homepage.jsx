import { Head, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";

const Homepage = () => {
    const { data, setData, post } = useForm({
        username: "",
        nis: "",
        password: "",
    });

    const onSubmit = () => {
        post(route("login"));
    };

    const onChange = (e) => {
        setData(e.target.name, e.target.value);
    };
    return (
        <>
            <Head title="Homepage" />
            <div className="flex justify-center items-center min-h-screen bg-neutral-100">
                <div className="shadow-lg rounded-lg px-10 py-5 text-zinc-600 w-1/4 bg-white">
                    <h1 className="font-bold text-4xl">LOGIN</h1>
                    <p className="text-xl font-semibold">Please login</p>
                    <div className="mt-5">
                        <form onSubmit={onSubmit}>
                            {/* USERNAME */}
                            <InputLabel
                                htmlFor="username"
                                value="Username"
                                className="mt-2"
                            />
                            <TextInput
                                id="username"
                                name="username"
                                value={data.username}
                                isFocused={true}
                                onChange={onChange}
                                className="w-full font-medium"
                                placeholder="Masukan Username"
                            />

                            {/* NIS */}
                            <InputLabel
                                htmlFor="nis"
                                value="NIS"
                                className="mt-2"
                            />
                            <TextInput
                                id="nis"
                                name="nis"
                                value={data.nis}
                                isFocused={true}
                                onChange={onChange}
                                className="w-full font-medium"
                                placeholder="Masukan NIS"
                            />

                            {/* PASSWORD */}
                            <InputLabel
                                htmlFor="password"
                                value="Password"
                                className="mt-2"
                            />
                            <TextInput
                                id="password"
                                name="password"
                                type="password"
                                value={data.password}
                                isFocused={true}
                                onChange={onChange}
                                className="w-full font-medium"
                                placeholder="*****"
                            />

                            <PrimaryButton className="mt-4">
                                Login
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homepage;
