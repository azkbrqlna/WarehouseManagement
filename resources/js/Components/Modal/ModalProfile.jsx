import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Stack,
    Flex,
    Text,
    Avatar,
    Button,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogBody,
} from "@chakra-ui/react";

const ModalProfile = ({
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
    initial
}) => {
    return (
        <>
            <Modal isOpen={isModalOpen} onClose={onModalClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader pb='0'>Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack align="center" paddingBottom="40px">
                            <Flex
                                p="20px"
                                alignItems="center"
                                direction="column"
                            >
                                <Flex flexDirection="column" mb="20px" gap='10px'>
                                    <div
                                        className="w-12 h-12 rounded-full self-center flex justify-center items-center border-2 border-border_azka bg-azka"
                                    >
                                        <span className="font-bold text-base text-white">
                                            {initial}
                                        </span>
                                    </div>
                                    <Text
                                        fontWeight="600"
                                        textAlign="center"
                                        fontSize="xl"
                                    >
                                        {user}
                                    </Text>
                                    <Text
                                        color="gray.400"
                                        textAlign="center"
                                        fontSize="sm"
                                        fontWeight="500"
                                    >
                                        {kelas}
                                    </Text>
                                </Flex>
                                <Flex
                                    paddingBottom="20px"
                                    justify="center"
                                    gap="30px"
                                    w="100%"
                                    px="36px"
                                >
                                    <Flex flexDirection="column">
                                        <Text
                                            fontWeight="600"
                                            fontSize="xl"
                                            textAlign="center"
                                        >
                                            {peminjaman}
                                        </Text>
                                        <Text color="gray.400" fontWeight="500">
                                            Peminjaman
                                        </Text>
                                    </Flex>
                                    <Flex flexDirection="column">
                                        <Text
                                            fontWeight="600"
                                            fontSize="xl"
                                            textAlign="center"
                                        >
                                            {pengembalian}
                                        </Text>
                                        <Text color="gray.400" fontWeight="500">
                                            Pengembalian
                                        </Text>
                                    </Flex>
                                </Flex>
                                <Button
                                    onClick={onAlertDialogOpen}
                                    p="2"
                                    borderWidth="1px"
                                    borderRadius="lg"
                                    w="100%"
                                    textAlign="center"
                                >
                                    Log Out
                                </Button>
                                <AlertDialog
                                    isOpen={isAlertDialogOpen}
                                    leastDestructiveRef={cancelRef}
                                    onClose={onAlertDialogClose}
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
                            </Flex>
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ModalProfile;
