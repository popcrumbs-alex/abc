import { darken } from "polished";
import { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../../../App";
import { scrollIntoView } from "../../../utilities/scrollIntoView";

const fadeUp = keyframes`
0% {
  transform: translate3d(5vw,5vw,0);
  opacity:0.2;
}
50% {
  transform: translate3d(-2vw,-2vw,0);
  opacity:.6;
}
100% {
  transform: translate3d(0vw,0vw,0);
  opacity:1;
}`;

const slideFromLeft = keyframes`
0%{
  transform:translateX(-5vw);
  opacity:0.2;
}
50% {
  transform:translate(2vw);
  opacity:.6;
}
100%{
  transform:translate(0);
  opacity:1;
}`;

const HeroContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.color};
  padding: 4rem 0;
  position: relative;
`;
const Background = styled.div`
  background: ${(props) => props.color};
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  display: block;
  height: 75vh;
`;
const Content = styled.div`
  width: ${(props: any) => props["data-max-width"]};
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`;

const Row = styled.div`
  display: flex;
  animation: ${slideFromLeft} 1s linear forwards;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  & h1 {
    margin: 0.4rem 0;
    color: ${(props) => props.color};
    font-size: 3rem;
  }
  & h2 {
    margin: 0.4rem 0;
    color: ${(props) => darken(0.1, props.color || "#fff")};
  }
  & p {
    margin: 0.4rem 0;
    color: ${(props) => darken(0.2, props.color || "#fff")};
    font-style: italic;
  }
`;
const Button = styled.button`
  background: ${(props) => props.color};
  color: #fff;
  padding: 1rem;
  width: 200px;
  border-radius: 120px;
  text-transform: uppercase;
  border: 0;
  align-self: flex-start;
  margin-top: 1rem;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background: ${(props) => darken(0.12, props.color || "")};
  }
`;

const ImagesRow = styled.div`
  display: flex;
  margin-top: 2rem;
`;
const Image = styled.img`
  object-fit: cover;
  width: 320px;
  animation: ${fadeUp}
    ${(props: { "data-anim-time": string }) => props["data-anim-time"]} linear
    forwards;
`;
const DecoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  bottom: 35%;
`;
const Decoration = styled.div`
  background: ${(props) => props.color};
  width: 100%;
  height: 3px;
  opacity: 0.2;
  margin: 0.5rem 0;
`;

const Hero = () => {
  const context = useContext(ThemeContext);
  const heroImgs: Array<{ src: string; aTime: number }> = [
    {
      src: "https://ik.imagekit.io/usam13ogl7u/pexels-jopwell-1325725_yLLT-TZLSb-.jpg?updatedAt=1639592358649",
      aTime: 1,
    },
    {
      src: "https://ik.imagekit.io/usam13ogl7u/pexels-amina-filkins-5414000_5Fid93Abvra.jpg?updatedAt=1639592388569",
      aTime: 1.3,
    },
    {
      src: "https://ik.imagekit.io/usam13ogl7u/pexels-anna-shvets-5710738__1__uqsbCaE5U.jpg?updatedAt=1639592358746",
      aTime: 1.6,
    },
  ];
  return (
    <HeroContainer>
      <Background color={context.main}>
        <DecoContainer>
          {[1, 2, 3].map((_, index) => (
            <Decoration color={context.accent} key={index} />
          ))}
        </DecoContainer>
      </Background>
      <Content
        data-max-width={context.maxWidth}
        data-mobile-width={context.mobileWidth}
      >
        <Row>
          <Column color={context.light}>
            <h1>Run & grow your business</h1>
            <h2>
              We specialize in offering working capital loans for businesses
            </h2>
            <p>
              No Credit OK, No Collateral Needed. When Your Bank Says No,
              Jackson Grant Says Yes!.
            </p>
          </Column>
          <Column>
            <Button
              color={context.accent}
              onClick={() => scrollIntoView(context.formSection)}
            >
              See If you qualify <FaArrowRight />
            </Button>
          </Column>
        </Row>
        <ImagesRow>
          {heroImgs.map(
            ({ src, aTime }: { src: string; aTime: number }, key: number) => {
              return <Image src={src} key={key} data-anim-time={`${aTime}s`} />;
            }
          )}
        </ImagesRow>
      </Content>
    </HeroContainer>
  );
};

export default Hero;
