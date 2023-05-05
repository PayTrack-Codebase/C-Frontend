import React, { useState, useEffect } from "react";
import { Flex, Divider, Text, Textarea, Button } from "@chakra-ui/react";
import InputComponent from "./components/Input";
import Checked from "../../assets/Checked.svg";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [companyName, setCompanyName] = useState("");
  // const [companyType, setComapanyType] = useState("");
  // const [password, setPassword] = useState("");
  // const [password1, setPassword1] = useState("");
  const [btnDisabled, setBtnDisabled] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== ""
      // companyName !== "" &&
      // companyType !== "" &&
      // password !== "" &&
      // password === password1
    ) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [
    firstName,
    lastName,
    email,
    // companyName,
    // companyType,
    // password,
    // password1,
  ]);

  // const HandleSubmit = () => {
  //   setProgress(2);
  // };
  return (
    <Flex
      p={{
        base: "72px 16px",
        sm: "40px",
        md: "70px 50px",
        lg: "60px 68px",
        xl: "100px 84px",
      }}
      flexDirection="column"
      gap={{ base: "24px", sm: "18px" }}
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
          CONTACT US
        </Text>
      </Flex>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "25px", md: "50px" }}
      >
        <Flex w={{ base: "100%", md: "45%", lg: "50%", xl: "55%" }}>
          <Flex flexDirection="column" gap="16px">
            <Text
              color="#3E214F"
              fontWeight="700"
              fontSize={{
                base: "32px",
                sm: "30px",
                lg: "35px",
                xl: "48px",
              }}
              lineHeight={{ base: "40px", lg: "60px" }}
            >
              Contact our support team
            </Text>

            <Text
              color="#747474"
              fontWeight="400"
              fontSize={{ base: "16px", sm: "13px", lg: "15px", xl: "18px" }}
              lineHeight={{ base: "26px", sm: "30px" }}
            >
              Got a question? Want to learn more about us? Get in touch.
            </Text>
          </Flex>
        </Flex>

        <Flex
          w={{ sm: "100%", md: "55%", lg: "50%", xl: "45%" }}
          flexDirection="column"
          gap="16px"
        >
          <Text
            color="#3E214F"
            fontWeight="700"
            fontSize={{ base: "16px", sm: "18px" }}
            lineHeight={{ base: "24px", sm: "24px" }}
          >
            Contact support by phone
          </Text>

          <Flex
            justifyContent="space-between"
            p="10px 0px"
            borderBottom="1px solid #E5E5E5"
          >
            <Text
              color="#747474"
              fontWeight="500"
              fontSize={{ base: "14px", sm: "16px" }}
              lineHeight={{ base: "22px", sm: "24px" }}
            >
              Support number
            </Text>

            <Text
              color="#3E214F"
              fontWeight="700"
              fontSize={{ base: "14px", sm: "18px" }}
              lineHeight={{ base: "22px", sm: "30px" }}
            >
              +234 808 547 2417
            </Text>
          </Flex>

          <Text
            color="#3E214F"
            fontWeight="700"
            fontSize={{ base: "16px", sm: "18px" }}
            lineHeight={{ base: "24px", sm: "30px" }}
          >
            Submit your inquiry
          </Text>

          <Text
            color="#747474"
            fontWeight="500"
            fontSize={{ base: "14px" }}
            lineHeight={{ base: "24px" }}
          >
            Kindly fill this form with your details about your inquiries and we
            would respond shortly.
          </Text>

          {submitted ? (
            <Flex
              h="119px"
              border="1px solid #E5E5E5"
              borderRadius="8px"
              padding="24px"
              alignItems="flex-start"
              gap="20px"
            >
              <img src={Checked} alt="" />
              <Flex flexDirection="column" gap="16px" p="5px">
                <Text
                  color="#000000"
                  fontWeight="600"
                  fontSize={{ base: "16px", sm: "16px" }}
                  lineHeight={{ base: "24px", sm: "20px" }}
                >
                  Thank you for contacting us
                </Text>
                <Text
                  color="#747474"
                  fontWeight="500"
                  fontSize={{ base: "16px", sm: "14px" }}
                  lineHeight={{ base: "24px", sm: "24px" }}
                >
                  We would get back to you as soon as possible.
                </Text>
              </Flex>
            </Flex>
          ) : (
            <Flex flexDirection="column">
              <Flex
                flexDirection={{ base: "column", sm: "row" }}
                justifyContent="space-between"
                gap="20px"
              >
                <InputComponent label="Firstname" type="text" />

                <InputComponent label="Lastname" type="text" />
              </Flex>

              <InputComponent label="Email" type="email" />

              <InputComponent label="Phone number" type="number" />

              <InputComponent label="How did you hear about us?" type="text" />

              <Flex flexDirection="column" width="100%" gap="8px">
                <Flex gap="4px">
                  <Text
                    color="#2E1818"
                    fontWeight="600"
                    fontSize={{ base: "14px" }}
                    lineHeight={{ base: "22px" }}
                  >
                    Your inquiry
                  </Text>
                  <Text color="#ff0000">*</Text>
                </Flex>

                <Textarea
                  height="56px"
                  border="1px solid #E0E0E0"
                  borderRadius="8px"
                  size="lg"
                />
              </Flex>

              <Flex gap="10px" alignItems="center">
                <input type="checkbox" style={{ fontSize: "20px" }} />

                <Text
                  color="#3E214F"
                  fontWeight="500"
                  fontSize={{ base: "14px" }}
                  lineHeight={{ base: "19px" }}
                >
                  Check this box to receive marketing updates about Trackpay’s
                  products, services, events and content.
                </Text>
              </Flex>

              <Button
                m="25px 0px 0px"
                h="54px"
                bgColor="#E6767A"
                color="#3E214F"
                w={{ base: "100%" }}
                borderRadius="8px"
                fontWeight="600"
                fontSize="16px"
                lineHeight="20px"
              >
                Submit
              </Button>

              <Text
                color="#3E214F"
                fontWeight="500"
                fontSize={{ base: "12px" }}
                lineHeight={{ base: "17px" }}
                textAlign="center"
              >
                By submitting this form, i acknowledged the Privacy Policy
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;
