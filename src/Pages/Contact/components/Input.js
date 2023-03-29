import { Flex, Text, Input } from "@chakra-ui/react";
import React from "react";

const InputComponent = ({ label, type }) => {
  return (
    <Flex flexDirection="column" width="100%" gap="8px">
      <Flex gap="4px">
        <Text
          color="#2E1818"
          fontWeight="600"
          fontSize={{ base: "14px" }}
          lineHeight={{ base: "22px" }}
        >
          {label}
        </Text>
        <Text color="#ff0000">*</Text>
      </Flex>

      <Input
        variant="outline"
        type={type}
        height="56px"
        border="1px solid #E0E0E0"
        borderRadius="8px"
      />
    </Flex>
  );
};

export default InputComponent;
