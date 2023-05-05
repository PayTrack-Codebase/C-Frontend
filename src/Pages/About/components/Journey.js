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
            fontSize={{ base: "14px", sm: "16px" }}
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
            fontSize={{ base: "32px", sm: "27px", md: "36px" }}
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
                fontSize={{ base: "20px", md: "18px" }}
                lineHeight={{ base: "24px", sm: "20px", md: "28px" }}
                marginTop="5%"
              >
                Revolutionising Loan Tracking and Payments for a Seamless
                Financial Experience.
              </Text>

              <Text
                color="#747474"
                fontWeight="500"
                fontSize={{ base: "16px", md: "20px" }}
                lineHeight={{ base: "28px", sm: "25px", lg: "32px" }}
              >
                Building a fast, secure and sustainable technology that will cut
                across all sectors and most especially help to eliminate loan
                defaults giving both the lender and SME’s great oppurtunity to
                grow and increase thier business and also making it easy for
                businesses to carry out transactions in a fast, simple and
                efficient manner with the QR code technology.
              </Text>
            </Flex>

            <Flex
              flexDirection="column"
              gap={{ base: "24px", sm: "10px", xl: "24px" }}
            >
              <Text
                color="#3E214F"
                fontWeight="600"
                fontSize="24px"
                lineHeight="28px"
                marginTop="5%"
              >
                Our Mission
              </Text>

              <Text
                color="#747474"
                fontWeight="500"
                fontSize={{ base: "16px", md: "20px" }}
                lineHeight={{ base: "28px", sm: "25px", lg: "32px" }}
              >
                To bring about growth and sustainability in the financial sector
                especially when it comes to loan offerings and payment of goods
                and services.
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
                fontSize={{ base: "16px", md: "20px" }}
                lineHeight={{ base: "28px", sm: "25px", lg: "32px" }}
              >
                Growing to be a world class tech company which provides
                solutions to their customer and help in solving current issues
                and challenges which are in the financial and business sector.
              </Text>
            </Flex>

            <Flex
              flexDirection="column"
              gap={{ base: "24px", sm: "10px", xl: "24px" }}
            >
              <Text
                color="#3E214F"
                fontWeight="600"
                fontSize="24px"
                lineHeight="28px"
                marginTop="3%"
              >
                Our vision
              </Text>

              <Text
                color="#747474"
                fontWeight="500"
                fontSize={{ base: "16px", md: "20px" }}
                lineHeight={{ base: "28px", sm: "25px", lg: "32px" }}
              >
                Our vision is to leverage technology to provide transparency and
                accountability in the lending process. We want to empower
                lenders to identify high-risk borrowers before granting loans
                and enable borrowers to manage their loan obligations
                effectively. By doing so, we aim to reduce the level of loan
                defaults in the financial sector and promote financial
                stability.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Journey;
