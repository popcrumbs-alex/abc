import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ThemeContext } from "../../../App";

const NavBar = styled.nav`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem 0;
  z-index: 999;
  background: ${(props) => props.color};
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
  padding: 0.5rem 1rem;
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

  return (
    <NavBar color={context.main}>
      <NavInner
        data-max-width={context.maxWidth}
        data-mobile-width={context.mobileWidth}
      >
        <Links color={context.light}>
          <h2>americanbusinesscapital</h2>
          <p>Services</p>
          <p>Testimonials</p>
        </Links>
        <Button color={context.light} data-hover-color={context.main}>
          Get Started
        </Button>
      </NavInner>
    </NavBar>
  );
};

Nav.propTypes = {};

export default Nav;
