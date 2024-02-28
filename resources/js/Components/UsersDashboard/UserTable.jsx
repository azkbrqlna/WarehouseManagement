import React from "react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import AlertDelete from "../Fragments/AlertDelete";
import Action from "../../../asset/triple-point.png";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

export default function UserTable({
    user,
    onAlertDialogOpen,
    isAlertDialogOpen,
    onAlertDialogClose,
    handleClick,
    handleEditClick
}) {
    return (
        <tr className="divide-x-2 divide-neutral-300" key={user.id}>
            <td className="px-4 py-2">{user.username}</td>
            <td className="px-4 py-2">{user.nis}</td>
            <td className="px-4 py-2">{user.kelas}</td>
            <td className="px-4 py-2">User</td>
            <td className="px-4 py-2">
                <Menu>
                    <MenuButton>
                        <img src={Action} className="w-4" />
                    </MenuButton>
                    <MenuList>
                        <MenuItem
                            icon={<EditIcon />}
                            onClick={() => handleEditClick(user)}
                        >
                            Edit
                        </MenuItem>
                        <MenuItem
                            icon={<DeleteIcon />}
                            onClick={onAlertDialogOpen}
                        >
                            Delete
                        </MenuItem>
                    </MenuList>
                </Menu>
            </td>
            <AlertDelete
                isAlertDialogOpen={isAlertDialogOpen}
                onAlertDialogClose={onAlertDialogClose}
                data={user}
                handleClick={handleClick}
                alertHeader="Delete User"
                alertBody="Are you sure? You will lose data for this user."
            />
        </tr>
    );
}
