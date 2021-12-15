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
`;

const Content = styled.div`
  width: ${(props: any) => props["data-max-width"]};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    object-fit: contain;
    width: 60px;
    margin: 1rem 0;
  }
  & h3 {
    margin: 0.4rem 0;
    text-align: center;
  }
  & p {
    margin: 0.4rem 0;
    text-align: center;
    max-width: 70%;
  }
`;

const Grid: FC = () => {
  const context = useContext<Theme>(ThemeContext);

  const DATA: Array<{ title: string; text: string; img: string }> = [
    {
      title: "Capital That Fits Your Needs",
      img: "https://ik.imagekit.io/usam13ogl7u/money_l6T9GFUtP7K.png",
      text: `Borrow as little as $5,000 
up to $1,000,000. Loan 
Amounts To Fit Your Needs.`,
    },
    {
      title: "Grow, Don't Just Owe",
      img: "https://ik.imagekit.io/usam13ogl7u/growth_WnS3wxS0q.png",
      text: `Flexible Payment Options and 
Customer Loyalty Benefits Makes 
Jackson Grant Capital The Right 
Choice For All Your Funding Needs.`,
    },
    {
      title: "A Company You Can Trust",
      img: "https://ik.imagekit.io/usam13ogl7u/honesty_q_HvwTKHX.png",
      text: `We dont charge any 
advance fees or money up front 
to qualify and receive a loan.`,
    },
  ];
  return (
    <Section>
      <Content data-max-width={context.maxWidth}>
        {DATA.map(
          (
            gridItem: { title: string; text: string; img: string },
            i: number
          ) => {
            return (
              <Item key={i}>
                <img src={gridItem.img} alt="icon" />
                <h3>{gridItem.title}</h3>
                <p>{gridItem.text}</p>
              </Item>
            );
          }
        )}
      </Content>
    </Section>
  );
};

Grid.propTypes = {};

export default Grid;
