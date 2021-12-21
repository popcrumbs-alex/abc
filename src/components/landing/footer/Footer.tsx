import React, { FC, useContext } from "react";
import styled from "styled-components";
import { Theme, ThemeContext } from "../../../App";

const Section = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 4rem 0;
`;
const Content = styled.div`
  width: ${(props: { "data-max-width": string }) => props["data-max-width"]};
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  & h3 {
    color: #666;
  }
  & p {
    line-height: 1.8;
    color: #999;
    font-size: 0.9rem;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Footer: FC = () => {
  const context = useContext<Theme>(ThemeContext);
  return (
    <Section>
      <Content data-max-width={context.maxWidth}>
        <Row>
          <Column>
            <h3>americanbusinesscapital</h3>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </Column>
          <Column>
            <h3>Quick Links</h3>
            <p>Business Capital</p>
            <p>Advantages</p>
            <p>Resources</p>
          </Column>
          <Column>
            <p>Logo</p>
          </Column>
        </Row>
        <Row>
          <Column>
            <h3>
              All Rights reserved. <br />
              ©American Business Capital {new Date().getFullYear()}
            </h3>
            <p>
              American Buisness Capital is not a direct lender. By submitting
              your information on this website you agree to be matched with an
              approved lender who services your area and type of business. You
              are providing express consent to receive your free rate quote from
              American Buisness Capital and/or its affiliates by phone and or
              text to the phone number and/or email you submitted in the above
              form regardless of any listing on the national do not call list.
              You agree that your submission authorizes contact to fulfill your
              request for a business loan. Contact us at
              info@AmericanBuisnessCapital.org
            </p>
          </Column>
        </Row>
      </Content>
    </Section>
  );
};

Footer.propTypes = {};

export default Footer;
