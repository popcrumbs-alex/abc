import { useContext, useRef } from "react";
import { scrollIntoView } from "../../../utilities/scrollIntoView";
import styled from "styled-components";
import { Theme, ThemeContext } from "../../../App";
import { FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000;
  padding: 4rem 0;
`;
const Content = styled.div`
  width: ${(props: { "data-max-width": string }) => props["data-max-width"]};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Row = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin: 4rem 0;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & img {
    object-fit: contain;
    max-width: 500px;
  }
  & h2 {
    color: ${(props) => props.color};
    font-size: 2rem;
  }
  & p {
    color: ${(props) => props.color};
    max-width: 60%;
    line-height: 2;
  }
`;
const Heading = styled.h1`
  color: ${(props) => props.color};
  font-size: 2.5rem;
`;
const Divider = styled.span`
  display: flex;
  height: 5px;
  width: 50px;
  background: ${(props) => props.color};
`;
const Btn = styled.button`
  color: #fff;
  border: 2px solid ${(props) => props.color};
  border-radius: 120px;
  font-size: 0.8rem;
  width: 150px;
  padding: 1rem 0rem;
  background: transparent;
  vertical-align: middle;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background: ${(props) => props.color};
  }
`;

const Programs = () => {
  const context = useContext<Theme>(ThemeContext);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      context.setServiceRef(ref.current);
    }
  }, [ref.current]);
  return (
    <Section ref={ref}>
      <Content data-max-width={context.maxWidth}>
        <Heading color={context.light}>Our Programs</Heading>
        <Row>
          <Column>
            <img
              src="https://ik.imagekit.io/usam13ogl7u/pexels-tim-mossholder-3345876_8lrcFvmL1.jpg?updatedAt=1640013138646"
              alt="shop"
            />
          </Column>
          <Column color={context.light}>
            <h2>Small Business Loan</h2>
            <Divider color={context.accent} />
            <p>Funding for your small business. Quick approvals.</p>
            <Btn
              color={context.accent}
              onClick={() => scrollIntoView(context.formSection)}
            >
              Apply Now <FaArrowRight />
            </Btn>
          </Column>
        </Row>
        <Row>
          <Column color={context.light}>
            <h2>Merchant Cash Advance</h2>
            <Divider color={context.accent} />
            <p>
              Based off your business sales get up to $1,000,000 loaned in 72
              hours with bad or no credit
            </p>
            <Btn
              color={context.accent}
              onClick={() => scrollIntoView(context.formSection)}
            >
              Apply Now <FaArrowRight />
            </Btn>
          </Column>
          <Column>
            <img
              src="https://ik.imagekit.io/usam13ogl7u/patrick-tomasso-fMntI8HAAB8-unsplash_n4gyGxW3H.jpg?updatedAt=1640013138662"
              alt="shoppp"
            />
          </Column>
        </Row>
      </Content>
    </Section>
  );
};

Programs.propTypes = {};

export default Programs;
