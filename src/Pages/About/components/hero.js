import React from "react";
import { Button, Divider, Flex, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      bgColor="#3E214F"
      h={{ base: "623px", sm: "450px", md: "500px", lg: "554px" }}
      p={{
        base: "72px 16px",
        sm: "40px",
        md: "70px 50px",
        lg: "60px 68px",
        xl: "100px 88px",
      }}
    >
      <Flex
        w={{base:"100%", sm: "90%", lg: "80%", xl: "73%" }}
        flexDirection="column"
        gap={{base:"24px",sm:"18px"}}
      >
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
            fontSize={{ base: "12px", sm: "14px" }}
            lineHeight={{ base: "15px", sm: "18px" }}
            letterSpacing="0.16em"
          >
            ABOUT TRACKPAY
          </Text>
        </Flex>

        <Flex>
          <Text
            color="#FFFFFF"
            fontWeight="700"
            fontSize={{ base: "32px", sm: "35px", md: "40px", lg: "48px" }}
            lineHeight={{ base: "48px", sm: "40px", md: "60px" }}
          >
            Empowering financial control: Our mission to simplify loan tracking
            and payments.
          </Text>
        </Flex>

        <Flex>
          <Text
            color="#D8D3DC"
            fontWeight="400"
            fontSize={{ base: "16px", sm: "18px" }}
            lineHeight={{ base: "26px", sm: "30px" }}
          >
            Provide a secure and easy way to pay for goods and services using QR
            payments instead of using the traditional payment methods.
          </Text>
        </Flex>

        <Button
          h="48px"
          bgColor="#E6767A"
          color="#3E214F"
          w={{ base: "100%", sm: "127px" }}
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
