import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputRightElement,
    InputGroup,
    Select,
} from "@chakra-ui/react";
import React from "react";

export default function UserForm({
    handleSubmit,
    data,
    errors,
    handleChange,
    handleShowPassword,
    showPassword,
    id
}) {
    return (
        <form
            onSubmit={handleSubmit}
            id={id}
            className="flex flex-col space-y-4"
        >
            <div className="flex gap-7">
                <div className="flex flex-col w-1/2 gap-4">
                    <FormControl isInvalid={errors.username}>
                        <FormLabel>Username</FormLabel>
                        <Input
                            type="text"
                            name="username"
                            value={data.username}
                            onChange={handleChange}
                        />
                        <FormErrorMessage>{errors.username}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.nis}>
                        <FormLabel>NIS</FormLabel>
                        <Input
                            type="number"
                            name="nis"
                            value={data.nis}
                            onChange={handleChange}
                        />
                        <FormErrorMessage>{errors.nis}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.kelas}>
                        <FormLabel>Class</FormLabel>
                        <Input
                            type="text"
                            name="kelas"
                            value={data.kelas}
                            onChange={handleChange}
                        />
                        <FormErrorMessage>{errors.kelas}</FormErrorMessage>
                    </FormControl>
                </div>
                <div className="flex flex-col w-1/2 gap-4">
                    <FormControl isInvalid={errors.role_id}>
                        <FormLabel>Role</FormLabel>
                        <Select
                            name="role_id"
                            value={data.role_id}
                            onChange={handleChange}
                        >
                            <option value="" className="hidden"></option>
                            <option value="1">Admin</option>
                            <option value="2">User</option>
                        </Select>
                    </FormControl>
                    <FormControl isInvalid={errors.password}>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <Input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={data.password}
                                onChange={handleChange}
                            />
                            <InputRightElement width="4rem">
                                <Button
                                    bg="black"
                                    color="white"
                                    _hover={{
                                        bg: "gray",
                                        color: "black",
                                    }}
                                    h="1.5rem"
                                    size="sm"
                                    onClick={handleShowPassword}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>
                </div>
            </div>
        </form>
    );
}
