import { X } from "@phosphor-icons/react";
import React from "react";

export default function ModalEditDashboard({
    isEdit,
    selected,
    onModalClose,
    name,
    id,
    children
}) {
    return (
        isEdit && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
                <div className="relative p-4 w-full max-w-2xl">
                    <div className="relative bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between py-3 px-4 rounded-t">
                            <h3 className="text-xl font-semibold text-gray-900">
                                {`Edit ${name} of ${selected}`}
                            </h3>
                            <button
                                onClick={onModalClose}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-4 md:p-5 space-y-4">
                            {children}
                        </div>
                        <div className="flex items-center justify-end py-2 px-4">
                            <button
                                type="submit"
                                form={id}
                                className="text-white bg-black hover:bg-zinc-800 focus:ring-2 focus:outline-none focus:ring-zinc-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Edit {name}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}
