import React from "react";
import { Trash } from "@phosphor-icons/react";
import AlertDelete from "../Fragments/AlertDelete";

export default function UserTable({
    users,
    onAlertDialogOpen,
    isAlertDialogOpen,
    onAlertDialogClose,
    handleClick,
}) {
    return (
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden text-xs">
            <thead className="bg-neutral-200 text-left">
                <tr className="divide-x-2 divide-neutral-300">
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">NIS</th>
                    <th className="px-4 py-2">Class</th>
                    <th className="px-4 py-2 w-10">Role</th>
                    <th className="px-4 py-2 w-10">Action</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {users?.data.map((user) => (
                    <tr className="divide-x-2 divide-neutral-300" key={user.id}>
                        <td className="px-4 py-2">{user.username}</td>
                        <td className="px-4 py-2">{user.nis}</td>
                        <td className="px-4 py-2">{user.kelas}</td>
                        <td className="px-4 py-2">User</td>
                        <td className="px-4 py-2">
                            <button onClick={onAlertDialogOpen}>
                                <Trash size={20} color="#E53E3E" />
                            </button>
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
                ))}
            </tbody>
        </table>
    );
}
