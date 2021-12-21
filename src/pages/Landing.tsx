import styled from "styled-components";
import Nav from "../components/landing/nav/Nav";
import Hero from "../components/landing/hero/hero";
import Steps from "../components/landing/steps/Steps";
import About from "../components/landing/about/About";
import Grid from "../components/landing/about/Grid";
import FormContainer from "../components/landing/form/FormContainer";
import Testimonials from "../components/landing/testimonials/Testimonials";
import Programs from "../components/landing/programs/Programs";
import { FC } from "react";
import Footer from "../components/landing/footer/Footer";

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Landing: FC = () => {
  return (
    <PageContainer>
      <Nav />
      <Hero />
      <Steps />
      <About />
      <Grid />
      <FormContainer />
      <Testimonials />
      <Programs />
      <Footer />
    </PageContainer>
  );
};

Landing.propTypes = {};

export default Landing;
