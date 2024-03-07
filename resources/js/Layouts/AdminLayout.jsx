import { Head, Link } from "@inertiajs/react";
import Sidebar from "./Sidebar";
import {
    Modal,
    Button,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";

export default function AdminLayout({
    icon: Icon,
    children,
    title,
    content,
    isOpen,
    onOpen,
    onClose,
    modalBody,
    modalHeader,
    modalFooter,
}) {
    return (
        <>
            <Head title={title} />
            <div className="w-full h-screen flex bg-main">
                <Sidebar />
                <main className="h-screen w-full bg-main px-8 py-16 overflow-y-auto none-scrollbar">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-2xl">{title}</h1>
                        <Button
                            onClick={onOpen}
                            size='sm'
                            bg="black"
                            color="white"
                            gap="4px"
                            _hover={{ background: "blackAlpha.700" }}
                        >
                            <Icon size={20} />
                            <span>{content}</span>
                        </Button>

                        <Modal isOpen={isOpen} onClose={onClose} size="2xl">
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>{modalHeader}</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    {modalBody}
                                </ModalBody>

                                <ModalFooter>
                                    {modalFooter}
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </div>
                    {children}
                </main>
            </div>
        </>
    );
}
