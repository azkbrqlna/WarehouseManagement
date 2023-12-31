import Dashboardlayout from "@/Layouts/DashboardLayout";
import { useToast } from "@chakra-ui/react";
import { Head, useForm } from "@inertiajs/react";

export default function CreateUserDashboard() {
    const { data, setData, errors, processing, post } = useForm({
        username: "",
        nis: "",
        kelas: "",
        password: "",
    });

    const handleSubmit = (e) => {
        const toast = useToast();
        e.preventDefault();
        post(route("users.store"), {
            onSuccess: toast({
                title: "User berhasil dibuat",
                status: "success",
            }),
            onError: toast({
                title: "User gagal dibuat",
                status: "error",
            }),
        });
    };
    return (
        <>
            <Head title="Create User" />
            <Dashboardlayout title="Create User">
                <section>
                    <h1>Buat User</h1>
                </section>
            </Dashboardlayout>
        </>
    );
}
