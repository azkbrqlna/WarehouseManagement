import {
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    Button,
} from "@chakra-ui/react";
import React from "react";

export default function AlertDeleteUser({
    isAlertDialogOpen,
    onAlertDialogClose,
    user,
    handleClick,
}) {
    return (
        <AlertDialog isOpen={isAlertDialogOpen} onClose={onAlertDialogClose}>
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Delete User
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        Are you sure? You will lose data for this user.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button onClick={onAlertDialogClose}>Cancel</Button>
                        <Button
                            colorScheme="red"
                            onClick={() => handleClick(user.slug)}
                            ml={3}
                        >
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
}
