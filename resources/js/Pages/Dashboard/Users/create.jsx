import Dashboardlayout from "@/Layouts/DashboardLayout";
import { useToast } from "@chakra-ui/react";
import { Head, useForm } from "@inertiajs/react";

export default function CreateUserDashboard() {
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
