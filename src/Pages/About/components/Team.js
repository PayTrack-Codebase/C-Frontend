import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Teams } from "../data";

const Team = () => {
  return (
    <Flex
      //   h="849px"
      bgColor="#E6767A"
      p="72px 100px"
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
          color="#313131"
          fontWeight="500"
          fontSize="14px"
          lineHeight="24px"
          textAlign="center"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          tincidunt elit tempor, <br /> ullamcorper magna non, tempor quam.
        </Text>
      </Flex>

      <Flex>
        <Flex flexWrap="wrap" gap="30px" justifyContent="center">
          {Teams.map((ele, index) => {
            return (
              <Flex
                flexDirection="column"
                gap="16px"
                alignItems="center"
                justifyContent="center"
                key={index}
                width="300px"
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
