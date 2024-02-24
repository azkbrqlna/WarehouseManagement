import { X } from "@phosphor-icons/react";
import React from "react";
import ItemForm from "./ItemForm";

export default function ModalEditItem({
    isEditModal,
    selectedItem,
    data,
    setData,
    errors,
    handleChangeEdit,
    onModalClose,
    onSubmit,
}) {
    return (
        isEditModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
                <div className="relative p-4 w-full max-w-2xl">
                    <div className="relative bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between py-3 px-4 rounded-t">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Edit Item of {selectedItem && selectedItem.name}
                            </h3>
                            <button
                                onClick={onModalClose}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-4 md:p-5 space-y-4">
                            <ItemForm
                                id="edit_item"
                                data={data}
                                setData={setData}
                                errors={errors}
                                handleChange={handleChangeEdit}
                                onSubmit={onSubmit}
                            />
                        </div>
                        <div className="flex items-center justify-end py-2 px-4">
                            <button
                                type="submit"
                                form="edit_item"
                                className="text-white bg-black hover:bg-zinc-800 focus:ring-2 focus:outline-none focus:ring-zinc-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Edit Item
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}
