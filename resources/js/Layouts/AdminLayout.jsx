import { Head, Link } from "@inertiajs/react";
import Sidebar from "./Sidebar";
import { Button } from "@chakra-ui/react";

export default function AdminLayout({
    icon: Icon,
    children,
    title,
    content,
    href,
}) {
    return (
        <>
            <Head title={title} />
            <div className="w-full h-screen flex bg-main">
                <Sidebar />
                <main className="h-screen w-full bg-main px-8 py-16">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-2xl">{title}</h1>
                        <Link
                            href={href}
                            className="px-3 py-1 bg-black hover:bg-neutral-700 text-white text-sm rounded-md flex items-center gap-2"
                        >
                            <Icon size={20} />
                            <span>{content}</span>
                        </Link>
                    </div>
                    {children}
                </main>
            </div>
        </>
    );
}
