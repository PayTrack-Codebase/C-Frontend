import { Flex, Divider, Text } from "@chakra-ui/react";
import React from "react";

const Journey = () => {
  return (
    <Flex h="707px" p="72px 100px">
      <Flex flexDirection="column" gap="18px">
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
            THE JOURNEY
          </Text>
        </Flex>

        <Flex>
          <Text
            color="#3E214F"
            fontWeight="700"
            fontSize="36px"
            lineHeight="45px"
          >
            Our TrackPay story
          </Text>
        </Flex>

        <Flex gap="20px">
          <Flex flexDirection="column" w="50%" gap="30px">
            <Flex flexDirection="column" gap="24px">
              <Text
                color="#3E214F"
                fontWeight="600"
                fontSize="18px"
                lineHeight="28px"
              >
                Revolutionising Loan Tracking and Payments for a Seamless
                Financial Experience.
              </Text>

              <Text
                color="#747474"
                fontWeight="500"
                fontSize="16px"
                lineHeight="32px"
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

            <Flex flexDirection="column" gap="24px">
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
                fontSize="16px"
                lineHeight="32px"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                tincidunt elit tempor, ullamcorper magna non, tempor quam.
                Vivamus magna est, vulputate non finibus non, tristique ut est.
                Nunc et porttitor lectus.
              </Text>
            </Flex>
          </Flex>

          <Flex flexDirection="column" w="50%" gap="30px">
            <Flex flexDirection="column" >
              <Text
                color="#747474"
                fontWeight="500"
                fontSize="16px"
                lineHeight="32px"
              >
                Sed eleifend sem tristique fringilla pulvinar. In porta est
                diam, in blandit odio sagittis et. Nulla vulputate ultricies
                ligula id ultrices. Morbi quis urna porta, rhoncus metus a,
                lacinia ligula. Phasellus dignissim ligula a dui tempus, nec
                suscipit nisl posuere.
              </Text>
            </Flex>

            <Flex flexDirection="column" gap="20px">
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
                fontSize="16px"
                lineHeight="32px"
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
