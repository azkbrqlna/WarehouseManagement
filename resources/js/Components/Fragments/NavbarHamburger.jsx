import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Flex,
} from "@chakra-ui/react";
import ListHamburger from "../ListNavbar/ListHamburger";

const NavbarHamburger = ({ isOpen, onClose, btnRef, onToggle }) => {
    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton fontSize='20px' onClick={onToggle} />
                    <DrawerBody pt="100px">
                        <Flex h="100%" justifyContent="center">
                            <ul className="flex flex-col gap-5 w-full">
                                <ListHamburger href="/home">Home</ListHamburger>
                                <ListHamburger href="/peminjaman">
                                    Peminjaman
                                </ListHamburger>
                                <ListHamburger href="/pengembalian">
                                    Pengembalian
                                </ListHamburger>
                                <ListHamburger href="/pengembalian">
                                    Pengembalian
                                </ListHamburger>
                                <ListHamburger href="/about">
                                    About
                                </ListHamburger>
                            </ul>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default NavbarHamburger;
