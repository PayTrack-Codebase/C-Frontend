import React from "react";
import { Button, Divider, Flex, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex bgColor="#3E214F" h="554px" p="100px 88px">
      <Flex w="73%" flexDirection="column" gap="18px">
        <Flex gap="12px" alignItems="center">
          <Divider
            orientation="horizontal"
            width="64px"
            height="2px"
            bgColor="#E6767A"
            color="#E6767A"
          />
          <Text
            color="#E6767A"
            fontWeight="700"
            fontSize="14px"
            lineHeight="18px"
            letterSpacing="0.16em"
          >
            ABOUT TRACKPAY
          </Text>
        </Flex>

        <Flex>
          <Text
            color="#FFFFFF"
            fontWeight="700"
            fontSize="48px"
            lineHeight="60px"
          >
            Empowering financial control: Our mission to simplify loan tracking
            and payments.
          </Text>
        </Flex>

        <Flex>
          <Text
            color="#D8D3DC"
            fontWeight="400"
            fontSize="18px"
            lineHeight="30px"
          >
            Provide a secure and easy way to pay for goods and services using QR
            payments instead of using the traditional payment methods.
          </Text>
        </Flex>

        <Button
          h="48px"
          bgColor="#E6767A"
          color="#3E214F"
          w="127px"
          borderRadius="8px"
          fontWeight="600"
          fontSize="14px"
          lineHeight="18px"
        >
          Let’s Talk
        </Button>
      </Flex>
    </Flex>
  );
};

export default Hero;
