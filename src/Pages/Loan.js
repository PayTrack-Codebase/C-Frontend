import React from "react";
import { Link } from "react-router-dom";
import loanimg from "../assets/loanTrackingImg.svg";
import loan1 from "../assets/loan1.svg";
import loan2 from "../assets/loan2.svg";
import line from "../assets/line.svg";
import loan3 from "../assets/loan3.svg";
import subimg2 from "../assets/CC.svg";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import "./Styles/home.css";

const Loan = () => {
  return (
    <div>
      <div className="intro-section">
        <div className="info-div">
          <div className="withLine-QR">
            <img src={line} alt=""></img>
            <h3 className="loan-head">LOAN TRACKING SYSTEM</h3>
          </div>
          <h1>Loan tracking system for financial industries.</h1>
          <p>
            Provide a secure and easy and efficient way to track and monitor
            loans distributed to SME's and small businesses.
          </p>
          <button>
            <Link to="/trackpaytechnologies.com/contact" className="link">
              Contact Us
            </Link>
          </button>
        </div>

        <div className="image-div-loan">
          <img src={loanimg} alt=""></img>
        </div>
      </div>

      <div className="section2-heading">
        <div className="withline-gb">
          <div className="withLine">
            <img src={line} alt=""></img>
            <h3>BENEFITS</h3>
          </div>
        </div>
        <h2>Loan Tracking built to be evolutionary and secured</h2>
        <div className="section2">
          <div className="image-div">
            <img src={loan1} alt=""></img>
          </div>
          <div className="section2-content">
            <h4 className="intro1">
              Ability to halt transactions in case of breach of loan contracts
            </h4>
            <p className="intro2">
              The ability to halt invalid transactions before they are made is a
              very important tool for lenders to ensure that loans requested are
              used for the intended purpose.
            </p>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="section3-content">
          <h4 className="intro1">
            Collaborate with banks to easily give out loans to SMEs or startups.
          </h4>
          <p className="intro2">
            Collabrating with banks would be a very helpful way for startups to
            have access to loans and necessary funding they need to launch and
            grow their businesses.
          </p>
        </div>
        <div className="image-div">
          <img src={loan2} alt=""></img>
        </div>
      </div>

      <div className="section2 last-bt">
        <div className="image-div">
          <img src={loan3} alt=""></img>
        </div>
        <div className="section2-content">
          <h4 className="intro1">
            Ability to monitor and track processes involved for loan
            applications.
          </h4>
          <p className="intro2">
            With a seamlessly easy to use and secure system, banks and other
            financial institutions will have the ability to monitor disburesed
            loans and also track transaction processes in order to reduce loan
            defaults.
          </p>
        </div>
      </div>

      <div className="faq-section">
        <h2 className="faq-h">Frequently Asked Questions</h2>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  What is a Loan Tracking System?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              A Loan tracking system is a system built with the latest
              technologies in Finance and Block chain in order to effectively
              monitor, dispense and track loans which are provided by financial
              companies and banks.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  How does the loan tracking system work?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              The Loan tracking system basically works by monitoring and
              ensuring provided data and documentations are adhered to which
              limit the level of loan defaults and ensures scalability,
              transparency and efficiency.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Who needs the loan tracking system
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              The loan tracking system is a two end system which means both the
              financial company and SMEs will need the loan tracking system.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  How does the loan tracking system work?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              lorem est, gravida quis placerat ut, tristique nec purus. Cras
              ante orci, tempus eu nisi et, lobortis aliquam lacus. Curabitur
              venenatis nisi vel arcu scelerisque mattis. Donec blandit quis
              tortor ac fringilla. Mauris condimentum diam eget ultrices congue.
              Mauris est tortor, tempus eu eros nec, sagittis suscipit nibh.
              Vestibulum sodales quam risus, ut aliquet dolor sodales nec
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  How does the loan tracking system work?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              lorem est, gravida quis placerat ut, tristique nec purus. Cras
              ante orci, tempus eu nisi et, lobortis aliquam lacus. Curabitur
              venenatis nisi vel arcu scelerisque mattis. Donec blandit quis
              tortor ac fringilla. Mauris condimentum diam eget ultrices congue.
              Mauris est tortor, tempus eu eros nec, sagittis suscipit nibh.
              Vestibulum sodales quam risus, ut aliquet dolor sodales nec
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Loan;
