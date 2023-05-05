import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Teams } from "../data";

const Team = () => {
  return (
    <Flex
      bgColor="#E6767A"
      p={{
        base: "72px 16px",
        sm: "40px",
        md: "70px 50px",
        lg: "60px 68px",
        xl: "100px 88px",
      }}
      justifyContent="center"
      flexDirection="column"
      gap="30px"
    >
      <Flex flexDirection="column" gap="8px" alignItems="center">
        <Text
          color="#3E214F"
          fontWeight="700"
          fontSize="36px"
          lineHeight="45px"
        >
          Our Team
        </Text>

        <Text
          color="#3E214F"
          fontWeight="500"
          fontSize="24px"
          lineHeight="24px"
          textAlign="center"
          marginTop="5%"
        >
          Meet our amazing team
        </Text>
      </Flex>

      <Flex>
        <Flex flexWrap="wrap" justifyContent="center" gap="20px">
          {Teams.map((ele, index) => {
            return (
              <Flex
                flexDirection="column"
                gap="16px"
                alignItems="center"
                justifyContent="center"
                key={index}
                width={{ base: "300px", sm: "250px", lg: "270px", xl: "300px" }}
              >
                <Image src={ele.image} alt="" />
                <Flex flexDirection="column" textAlign="center" gap="8px">
                  <Text
                    color="#3E214F"
                    fontWeight="700"
                    fontSize="18px"
                    lineHeight="24px"
                  >
                    {ele.name}
                  </Text>
                  <Text
                    color="#FFFFFF"
                    fontWeight="700"
                    fontSize="14px"
                    lineHeight="24px"
                  >
                    {ele.role}
                  </Text>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Team;
