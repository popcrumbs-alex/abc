import { useContext, useMemo } from "react";
import { scrollIntoView } from "../../../utilities/scrollIntoView";
import styled from "styled-components";
import { ThemeContext } from "../../../App";
import { useInView } from "react-intersection-observer";

const Section = styled.section`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Tag = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.color};
`;
const Content = styled.div`
  display: flex;
  width: ${(props: any) => props["data-max-width"]};
  flex-direction: column;
  align-items: center;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;
const Step = styled.div`
  box-shadow: 0 1px 20px #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background: url(${(props: any) => props["data-set-bg"]});
  background-size: cover;
  background-position: center;
  position: relative;
  min-height: 350px;
  width: 400px;
`;
const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #ffffff;
  opacity: 0.9;
  align-items: center;
  height: 40%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const StepBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 1rem;
  & h3 {
    color: ${(props) => props.color};
    font-size: 1.2rem;
    margin: 0.2rem 0;
  }
  & p {
    line-height: 2;
    color: #222;
    max-width: 80%;
    margin: 0.2rem 0;
    font-size: 0.9rem;
  }
`;
const Button = styled.button`
  background: transparent;
  color: ${(props) => props.color};
  border: 2px solid ${(props) => props.color};
  padding: 1rem 2rem;
  margin: 2rem 0;
  border-radius: 120px;
  max-width: 240px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background: ${(props) => props.color};
    color: #fff;
  }
`;
const DATA: Array<{ title: string; text: string; bgImg: string }> = [
  {
    title: "Step 1:",
    text: `
        Apply Online To See If 
        You Qualify`,
    bgImg:
      "https://ik.imagekit.io/usam13ogl7u/pexels-andrea-piacquadio-941572_1__mgQ6OMA3ijG.jpg?updatedAt=1639597782265",
  },
  {
    title: "Step 2:",
    text: `
        If Qualified Funds are Deposited 
        Within 48 Hours To Your 
        Business Bank Account`,
    bgImg:
      "https://ik.imagekit.io/usam13ogl7u/andre-taissin-5OUMf1Mr5pU-unsplash_54OkRL2iR.jpg?updatedAt=1639598508199",
  },
  {
    title: "Step 3:",
    text: `
        Use The Money 
        Immediately To Grow 
        Your Business`,
    bgImg:
      "https://ik.imagekit.io/usam13ogl7u/visual-stories-micheile-lZ_4nPFKcV8-unsplash_RrhESm5119W.jpg?updatedAt=1639598635123",
  },
];

const Steps = () => {
  const context = useContext(ThemeContext);
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  useMemo(() => {
    if (inView) {
    }
  }, [inView]);

  return (
    <Section ref={ref}>
      <Content data-max-width={context.maxWidth}>
        <Tag color={context.main}>Simple and Easy Business Loans</Tag>
        <Row>
          {DATA.map(
            (
              stepData: { text: string; title: string; bgImg: string },
              i: number
            ) => {
              return (
                <Step key={i} data-set-bg={stepData.bgImg}>
                  <StepContent>
                    <StepBox color={context.main}>
                      <h3>{stepData.title}</h3> <p>{stepData.text}</p>{" "}
                    </StepBox>
                  </StepContent>
                </Step>
              );
            }
          )}
        </Row>
        <Button
          color={context.accent}
          onClick={() => scrollIntoView(context.formSection)}
        >
          Click Here To Get Started
        </Button>
      </Content>
    </Section>
  );
};

Steps.propTypes = {};

export default Steps;
