import {
    Badge,
    Stack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Flex,
    Text,
    useDisclosure,
    FormControl,
    FormLabel,
    Button,
    Textarea,
} from "@chakra-ui/react";

const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="bg-white rounded-lg gap-5 flex flex-col p-3 shadow-lg shadow-zinc-500">
            {children}
        </div>
    );
};

const Image = (props) => {
    const { image } = props;
    return (
        <div className="flex justify-center border-2 rounded-lg overflow-hidden w-44 h-4w-44">
            <img src={image} />
        </div>
    );
};

const Content = (props) => {
    const { barang, status, handleSubmitAlasan } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <h1 className="font-medium text-3xl text-zinc-800">{barang}</h1>
                <Stack w="70px">
                    <Badge colorScheme="green" textAlign="center">
                        {status}
                    </Badge>
                </Stack>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Alasan</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Stack align="center" paddingBottom="20px">
                                <Flex flexDirection="column" gap="20px">
                                    <Text>
                                        Barang yang anda pinjam harus
                                        menyertakan alasan yang jelas, agar dari
                                        pihak admin tidak ragu untuk meminjamkan
                                        alatnya kepada pihak peminjam.
                                    </Text>
                                    <form onSubmit={handleSubmitAlasan}>
                                        <FormControl>
                                            <FormLabel>
                                                Isi Alasan Anda:{" "}
                                            </FormLabel>
                                            <Textarea placeholder='Masukan alasan request' />
                                        </FormControl>
                                        <Button type="submit" mt="10px">Create Request</Button>
                                    </form>
                                </Flex>
                            </Stack>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </div>

            <button
                className="py-2 font-semibold rounded-lg border border-slate-200 text-zinc-800 hover:bg-zinc-800 hover:text-white hover:border-0"
                type="button"
                onClick={onOpen}
            >
                Add to request
            </button>
        </div>
    );
};

CardProduct.Image = Image;
CardProduct.Content = Content;

export default CardProduct;
