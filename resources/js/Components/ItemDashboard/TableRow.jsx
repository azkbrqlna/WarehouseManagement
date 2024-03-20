import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList, Switch } from "@chakra-ui/react";
import Action from "../../../asset/triple-point.png";
import React from "react";
import AlertDelete from "../Fragments/AlertDelete";

export default function TableRow({
    item,
    index,
    handleSwitch,
    handleEditClick,
    onAlertDialogOpen,
    isAlertDialogOpen,
    onAlertDialogClose,
    handleClick,
}) {
    return (
        <tr key={item.id} className="divide-x-2 divide-neutral-300">
            <td className="px-2 py-1 text-center">{index + 1 + "."}</td>
            <td className="px-2 py-1">{item.name}</td>
            <td className="px-2 py-1 text-center">
                <Switch
                    size="md"
                    isChecked={item.status}
                    onChange={() => handleSwitch(item.id, !item.status)}
                />
            </td>
            <td className="px-2 py-1 text-center">{item.total_item}</td>
            <td className="px-2 py-1 text-center">{item.jenis}</td>
            <td className="px-2 py-1 text-center">
                <Menu>
                    <MenuButton>
                        <img src={Action} className="w-4" />
                    </MenuButton>
                    <MenuList>
                        <MenuItem
                            icon={<EditIcon />}
                            onClick={() => handleEditClick(item)}
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
                <AlertDelete
                    isAlertDialogOpen={isAlertDialogOpen}
                    onAlertDialogClose={onAlertDialogClose}
                    data={item}
                    handleClick={handleClick}
                    alertHeader="Delete Item"
                    alertBody="Are you sure? You will lose data for this item."
                />
            </td>
        </tr>
    );
}
