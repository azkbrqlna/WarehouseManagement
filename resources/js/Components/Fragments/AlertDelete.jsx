import React from "react";
import {
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    Button,
} from "@chakra-ui/react";

export default function AlertDelete({
    isAlertDialogOpen,
    onAlertDialogClose,
    handleClick,
    alertBody,
    alertHeader,
    data,
}) {
    return (
        <AlertDialog isOpen={isAlertDialogOpen} onClose={onAlertDialogClose}>
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        {alertHeader}
                    </AlertDialogHeader>

                    <AlertDialogBody>{alertBody}</AlertDialogBody>

                    <AlertDialogFooter>
                        <Button onClick={onAlertDialogClose}>Cancel</Button>
                        <Button
                            colorScheme="red"
                            onClick={() => handleClick(data.id)}
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
