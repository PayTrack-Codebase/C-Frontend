import { Flex, Divider, Text } from "@chakra-ui/react";
import React from "react";

const Journey = () => {
  return (
    <Flex
      h={{ base: "1201px", sm: "707px" }}
      p={{
        base: "72px 16px",
        sm: "40px 30px",
        md: "50px 40px",
        lg: "60px 68px",
        xl: "100px 88px",
      }}
    >
      <Flex
        flexDirection="column"
        gap={{ base: "16px", sm: "10px", md: "14px", lg: "18px" }}
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
            THE JOURNEY
          </Text>
        </Flex>

        <Flex>
          <Text
            color="#3E214F"
            fontWeight="700"
            fontSize={{ base: "24px", sm: "27px", md: "36px" }}
            lineHeight={{ base: "30px", sm: "35px", md: "45px" }}
          >
            Our TrackPay story
          </Text>
        </Flex>

        <Flex gap="20px" flexDirection={{ base: "column", sm: "row" }}>
          <Flex
            flexDirection="column"
            w={{ base: "100%", sm: "50%" }}
            gap={{ base: "15px", md: "25px", xl: "30px" }}
          >
            <Flex
              flexDirection="column"
              gap={{ base: "24px", sm: "10px", xl: "24px" }}
            >
              <Text
                color="#3E214F"
                fontWeight="600"
                fontSize={{ base: "16px", md: "18px" }}
                lineHeight={{ base: "24px", sm: "20px", md: "28px" }}
              >
                Revolutionising Loan Tracking and Payments for a Seamless
                Financial Experience.
              </Text>

              <Text
                color="#747474"
                fontWeight="500"
                fontSize={{ base: "14px", md: "16px" }}
                lineHeight={{ base: "28px", sm: "25px", lg: "32px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                tincidunt elit tempor, ullamcorper magna non, tempor quam.
                Vivamus magna est, vulputate non finibus non, tristique ut est.
                Nunc et porttitor lectus. Sed eleifend sem tristique fringilla
                pulvinar. In porta est diam, in blandit odio sagittis et. Nulla
                vulputate ultricies ligula id ultrices. Morbi quis urna porta,
                rhoncus metus a, lacinia ligula. Phasellus dignissim ligula a
                dui tempus, nec suscipit nisl posuere.
              </Text>
            </Flex>

            <Flex
              flexDirection="column"
              gap={{ base: "24px", sm: "10px", xl: "24px" }}
            >
              <Text
                color="#3E214F"
                fontWeight="600"
                fontSize="18px"
                lineHeight="28px"
              >
                Our Mission
              </Text>

              <Text
                color="#747474"
                fontWeight="500"
                fontSize={{ base: "14px", md: "16px" }}
                lineHeight={{ base: "28px", sm: "25px", lg: "32px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                tincidunt elit tempor, ullamcorper magna non, tempor quam.
                Vivamus magna est, vulputate non finibus non, tristique ut est.
                Nunc et porttitor lectus.
              </Text>
            </Flex>
          </Flex>

          <Flex
            flexDirection="column"
            w={{ base: "100%", sm: "50%" }}
            gap={{ base: "24px", sm: "15px", md: "25px", xl: "30px" }}
          >
            <Flex flexDirection="column">
              <Text
                color="#747474"
                fontWeight="500"
                fontSize={{ base: "14px", md: "16px" }}
                lineHeight={{base:"28px", sm: "25px", lg: "32px" }}
              >
                Sed eleifend sem tristique fringilla pulvinar. In porta est
                diam, in blandit odio sagittis et. Nulla vulputate ultricies
                ligula id ultrices. Morbi quis urna porta, rhoncus metus a,
                lacinia ligula. Phasellus dignissim ligula a dui tempus, nec
                suscipit nisl posuere.
              </Text>
            </Flex>

            <Flex
              flexDirection="column"
              gap={{ base: "24px", sm: "10px", xl: "24px" }}
            >
              <Text
                color="#3E214F"
                fontWeight="600"
                fontSize="18px"
                lineHeight="28px"
              >
                Our vision
              </Text>

              <Text
                color="#747474"
                fontWeight="500"
                fontSize={{ base: "14px", md: "16px" }}
                lineHeight={{ base: "28px", sm: "25px", lg: "32px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                tincidunt elit tempor, ullamcorper magna non, tempor quam.
                Vivamus magna est, vulputate non finibus non, tristique ut est.
                Nunc et porttitor lectus.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Journey;
