import React, { FC, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Theme, ThemeContext } from "../../../App";

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.color};
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ColumnInner = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;
const Question = styled.h4`
  color: ${(props) => props.color};
  font-size: 1.5rem;
  margin: 0.4rem 0;
`;
const Tag = styled.h2`
  color: ${(props) => props.color};
  font-size: 2rem;
  line-height: 1.5;
  margin: 0.4rem 0;
`;
const Text = styled.p`
  color: #eee;
  line-height: 2;
  margin: 0.4rem 0;
`;
const Img = styled.img`
  object-fit: contain;
  max-width: 600px;
  align-self: flex-end;
`;
const About: FC = () => {
  const context = useContext<Theme>(ThemeContext);
  return (
    <Section color={context.main}>
      <Content>
        <Column>
          <ColumnInner>
            <Question color={context.accent}>Why Choose Us?</Question>
            <Tag color={context.light}>
              The American Business Capital Experience
            </Tag>
            <Text>
              We work with you to find a loan program that works best for you
              and your business. Regardless of personal credit we can help you.
              If your business does over $5000 a month in total revenue we can
              help get the money you need to grow.
            </Text>
          </ColumnInner>
        </Column>
        <Column>
          <Img src="https://ik.imagekit.io/usam13ogl7u/pexels-jopwell-2422293_97qtxmofh.jpg?updatedAt=1639599414712" />
        </Column>
      </Content>
    </Section>
  );
};

About.propTypes = {};

export default About;
