import React, { FC, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Theme, ThemeContext } from "../../../App";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 4rem 0;
  background: #e4e4e4;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
`;
const Column = styled.div``;

const FormContainer: FC = () => {
  const context = useContext<Theme>(ThemeContext);

  return (
    <Section>
      <Content></Content>
    </Section>
  );
};

FormContainer.propTypes = {};

export default FormContainer;
