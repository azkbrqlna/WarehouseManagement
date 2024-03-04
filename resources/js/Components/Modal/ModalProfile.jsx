import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Stack,
    Button,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogBody,
} from "@chakra-ui/react";

export default function ModalProfile({
    isModalOpen,
    onModalClose,
    onAlertDialogClose,
    onAlertDialogOpen,
    cancelRef,
    isAlertDialogOpen,
    onLogOut,
    user,
    kelas,
    peminjaman,
    pengembalian,
    initial,
}) {
    return (
        <>
            <Modal
                isOpen={isModalOpen}
                onClose={onModalClose}
                size={{ base: "xs", md: "sm" }}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader pb="0">Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack align="center" paddingBottom="20px">
                            <div className="flex items-center flex-col">
                                <div className="flex flex-col gap-2">
                                    <div className="w-12 h-12 rounded-full self-center flex justify-center items-center border-2 border-border_azka bg-azka">
                                        <span className="font-bold text-base text-white">
                                            {initial}
                                        </span>
                                    </div>
                                    <p className="font-bold text-center text-xl">
                                        {user}
                                    </p>
                                    <p className="font-medium text-gray-400 text-center text-sm">
                                        {kelas}
                                    </p>
                                </div>
                                <div className="flex justify-center gap-7 w-full px-9 pb-5">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-xl text-center">
                                            {peminjaman}
                                        </span>
                                        <p className="text-gray-400 font-medium">
                                            Peminjaman
                                        </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-xl text-center">
                                            {pengembalian}
                                        </span>
                                        <p className="text-gray-400 font-medium">
                                            Pengembalian
                                        </p>
                                    </div>
                                </div>
                                <button
                                    className="p-1 w-4/5 md:w-full bg-gray-200 rounded-lg text-center text-black"
                                    onClick={onAlertDialogOpen}
                                >
                                    Log Out
                                </button>
                                <a
                                    href="/riwayat"
                                    className="mt-2 w-4/5 md:w-full rounded-lg bg-gray-200 text-base p-1 text-center text-black"
                                >
                                    Riwayat Peminjaman
                                </a>
                                <AlertDialog
                                    isOpen={isAlertDialogOpen}
                                    leastDestructiveRef={cancelRef}
                                    onClose={onAlertDialogClose}
                                    size={{ base: "xs", md: "sm" }}
                                >
                                    <AlertDialogOverlay>
                                        <AlertDialogContent>
                                            <AlertDialogHeader
                                                fontSize="lg"
                                                fontWeight="bold"
                                            >
                                                Log Out
                                            </AlertDialogHeader>

                                            <AlertDialogBody>
                                                You want to Log Out?
                                            </AlertDialogBody>

                                            <AlertDialogFooter>
                                                <Button
                                                    ref={cancelRef}
                                                    onClick={onAlertDialogClose}
                                                >
                                                    Cancel
                                                </Button>
                                                <Button
                                                    colorScheme="red"
                                                    onClick={onLogOut}
                                                    ml={3}
                                                >
                                                    Log Out
                                                </Button>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialogOverlay>
                                </AlertDialog>
                            </div>
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
