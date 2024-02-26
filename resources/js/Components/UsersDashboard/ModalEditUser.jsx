import React from "react";
import ModalEditDashboard from "../Form/ModalDashboard/Modal";
import UserForm from "./UserForm";

export default function ModalEditUser({
    isEdit,
    selected,
    onModalClose,
    name,
    id,
    handleSubmit,
    data,
    errors,
    handleChange,
    handleShowPassword,
    showPassword,
}) {
    return (
        <ModalEditDashboard
            isEdit={isEdit}
            selected={selected}
            onModalClose={onModalClose}
            name={name}
            id={id}
        >
            <UserForm
                handleSubmit={handleSubmit}
                data={data}
                errors={errors}
                handleChange={handleChange}
                handleShowPassword={handleShowPassword}
                showPassword={showPassword}
                id={id}
            />
        </ModalEditDashboard>
    );
}
