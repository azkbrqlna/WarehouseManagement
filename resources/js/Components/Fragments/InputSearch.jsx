import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import React from "react";

export default function InputSearch() {
    return (
        <div>
            <InputGroup color="red" size="sm">
                <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.300" />}
                />
                <Input type="text" placeholder="Search" />
            </InputGroup>
        </div>
    );
}
