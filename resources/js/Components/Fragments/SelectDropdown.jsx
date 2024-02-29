import { CaretDown, CheckCircle } from "@phosphor-icons/react";
import React from "react";

const SelectDropdown = ({
    rentals,
    returns,
    auth,
    selectedValue,
    handleOptionSelect,
    isOpen,
    toggleDropdown,
}) => {
    return (
        <div className="relative">
            <div className="mt-2">
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className="relative w-full cursor-pointer rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                >
                    <span className="flex items-center">
                        <span className="ml-3 block truncate">
                            {selectedValue.itemName || "Select an option"}
                        </span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <CaretDown size={20} />
                    </span>
                </button>

                {isOpen && (
                    <ul className="absolute z-10 mt-1 max-h-56 w-full cursor-pointer overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {rentals.map((rental) => {
                            const isReturned = returns.some((ret) => ret.rent_date === rental.rent_date && !ret.status)
                            return (
                                rental.user_id === auth.user.id &&
                                rental.status &&
                                isReturned && (
                                    <li
                                        key={rental.id}
                                        className={`text-gray-800 select-none py-2 pl-3 pr-10 hover:bg-slate-100 ${
                                            rental.rent_date ===
                                            selectedValue.rent_date
                                                ? "font-bold text-black"
                                                : "font-normal"
                                        }`}
                                        onClick={() =>
                                            handleOptionSelect(rental)
                                        }
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="ml-3 block truncate">
                                                {rental.item.name}
                                            </span>
                                            {rental.rent_date ===
                                                selectedValue.rent_date && (
                                                <CheckCircle size={25} />
                                            )}
                                        </div>
                                    </li>
                                )
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SelectDropdown;
