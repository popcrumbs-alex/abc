import { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../../../App";
import { scrollIntoView } from "../../../utilities/scrollIntoView";

const slideDown = keyframes`
0%{
  transform:translateY(-5vh);
  opacity:0.2;
}
50% {
  transform: translateY(2vh);
  opacity:.5;
}
100% {
  transform:translateY(0vh);
  opacity:1;
}`;

const NavBar = styled.nav`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  padding: ${(props: { "data-padding-dynamic": string }) =>
    props["data-padding-dynamic"]};
  z-index: 999;
  background: ${(props) => props.color};
  transition: all 0.3s ease-in-out;
  animation: ${slideDown} 1.4s linear forwards;
`;

const NavInner = styled.div`
  width: ${(props: any) => props["data-max-width"]};
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background: transparent;
  border: 2px solid ${(props) => props.color};
  color: ${(props) => props.color};
  border-radius: 120px;
  padding: 0.4rem 0.7rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background: ${(props) => props.color};
    color: ${(props: any) => props["data-hover-color"]};
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.color};
  & h2 {
    margin: 0 2rem 0 0;
    &:hover {
      cursor: pointer;
    }
  }
  & p {
    margin: 0 2rem 0 0;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Nav = () => {
  const context = useContext(ThemeContext);

  const [isScrolling, setScrolling] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", (e) => {
        if (window.scrollY > 100 && !isScrolling) {
          setScrolling(true);
        } else if (window.scrollY < 100 && isScrolling) {
          setScrolling(false);
        }
      });
    }

    return () => window.removeEventListener("scroll", (e) => {});
  }, [window, isScrolling]);

  const scrollToTop = () =>
    typeof window !== "undefined"
      ? window.scroll({ top: 0, behavior: "smooth" })
      : null;

  return (
    <NavBar
      color={context.main}
      data-padding-dynamic={isScrolling ? ".8rem 0" : "2rem 0"}
      style={{
        boxShadow: `${isScrolling ? "0 1px 5px #00000033" : "0 0 0 0 #000"}`,
      }}
    >
      <NavInner
        data-max-width={context.maxWidth}
        data-mobile-width={context.mobileWidth}
      >
        <Links color={context.light}>
          <h2 onClick={scrollToTop}>americanbusinesscapital</h2>
          <p onClick={() => scrollIntoView(context.servicesRef)}>Services</p>
          <p onClick={() => scrollIntoView(context.testimonialsRef)}>
            Testimonials
          </p>
        </Links>
        <Button
          color={context.light}
          data-hover-color={context.main}
          onClick={() => scrollIntoView(context.formSection)}
        >
          Get Started
        </Button>
      </NavInner>
    </NavBar>
  );
};

Nav.propTypes = {};

export default Nav;
