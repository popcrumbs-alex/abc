import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Nav from "../components/landing/nav/Nav";
import Hero from "../components/landing/hero/hero";
import Steps from "../components/landing/steps/Steps";
import About from "../components/landing/about/About";
import Grid from "../components/landing/about/Grid";
import FormContainer from "../components/landing/form/FormContainer";
import Testimonials from "../components/landing/testimonials/Testimonials";

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Landing = () => {
  return (
    <PageContainer>
      <Nav />
      <Hero />
      <Steps />
      <About />
      <Grid />
      <FormContainer />
      <Testimonials />
    </PageContainer>
  );
};

Landing.propTypes = {};

export default Landing;
