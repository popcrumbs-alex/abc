import { Ref, useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Theme, ThemeContext } from "../../../App";
import { DATA, DataParams } from "./testimonialArray";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 4rem 0;
`;

const Heading = styled.h1`
  color: ${(props) => props.color};
  width: ${(props: any) => props["data-max-width"]};
  font-size: 2rem;
`;
const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  width: ${(props: any) => props["data-max-width"]};
  max-width: 100%;
  overflow: hidden;
  scroll-snap-type: x mandatory;
  box-shadow: 0 1px 20px #eeeeee55;
`;

const TestimonialBox = styled.div`
  min-width: 100%;
  display: flex;
`;
const Arrows = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ArrowBtn = styled.button`
  background: transparent;
  border: 0;
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
  }
`;

const GridBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  scroll-snap-align: start;
  gap: 2rem;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  padding: 1rem;
  width: 400px;
`;
const Top = styled.div`
  display: flex;
`;
const Avatar = styled.img`
  object-fit: contain;
  width: 40px;
  margin-right: 1rem;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  & h4 {
    margin: 0.2rem 0;
  }
  & p {
    margin: 0.2rem 0;
    font-size: 0.9rem;
    font-style: italic;
    color: #999;
  }
`;

const Text = styled.p`
  color: #777;
  max-width: 90%;
  line-height: 1.6;
  font-size: 0.9rem;
`;

const Indexes = styled.div`
  display: flex;
  width:200px;
  margin-top:2rem;
  & span {
    height: 10px;
    width: 10px;
    border: 2px solid #333;
    border-radius: 200px;
    margin:0 1rem;s
    display:block;
    transition: all .5s ease-in-out;
  }
`;

const Testimonials = () => {
  const context = useContext<Theme>(ThemeContext);
  const [currentIndex, setIndex] = useState<number>(0);
  const [scrollWidth, setScrollWidth] = useState<number>(0);
  const [isScrolling, setScrolling] = useState<boolean>(false);
  const container = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);

  const handleScrollLeft = () => {
    let containerObj = container.current;
    if (!isScrolling) {
      if (containerObj !== null) {
        containerObj.style.transition = "all .5s ease";
        setScrollWidth((prevScrollWidth: number) =>
          containerObj
            ? prevScrollWidth + containerObj.clientWidth
            : prevScrollWidth
        );
        setScrolling(true);
        handleIndexChange(currentIndex - 1);
      }
    }
  };

  const handleScrollRight = () => {
    let containerObj = container.current;

    if (!isScrolling) {
      if (containerObj !== null) {
        containerObj.style.transition = "all .5s ease";
        setScrollWidth((prevScrollWidth: number) =>
          containerObj
            ? prevScrollWidth - containerObj.clientWidth
            : prevScrollWidth
        );
        setScrolling(true);
        handleIndexChange(currentIndex + 1);
      }
    }
  };

  const handleIndexChange = (index: number) => setIndex(index);

  const handleEndTransition = () => {
    setScrolling(false);

    let containerObj = container.current;

    if (containerObj) {
      if (currentIndex === DATA.length - 2 || currentIndex < 0) {
        containerObj.style.transition = "all 0s ease";
      }
      //if index is at the ending of visible data
      if (currentIndex > DATA.length - 3) {
        setScrollWidth(-containerObj.clientWidth);
        handleIndexChange(0);
      }
      //if starting point is first index, set to ending
      if (currentIndex < 0) {
        let end = -(containerObj.clientWidth * (DATA.length - 2));
        setScrollWidth(end);
        handleIndexChange(DATA.length - 3);
      }
    }
  };

  useEffect(() => {
    if (container.current) {
      //set the initial with to a starting point of 1 into the array
      //do not set the index to 1
      setScrollWidth(-container.current.clientWidth);
    }
  }, [container]);

  useEffect(() => {
    if (testimonialsRef.current) {
      console.log("test", testimonialsRef.current);
      context.setTestimonialsRef(testimonialsRef.current);
    }
  }, [testimonialsRef.current]);

  return (
    <Section ref={testimonialsRef}>
      <Heading color={context.main} data-max-width={context.maxWidth}>
        See what our clients say about us
      </Heading>
      <Main>
        <Arrows>
          <ArrowBtn onClick={() => handleScrollLeft()}>
            <FaChevronLeft />
          </ArrowBtn>
        </Arrows>
        <Content data-max-width={context.maxWidth}>
          <TestimonialBox
            ref={container}
            style={{
              transform: `translateX(${scrollWidth}px)`,
              transition: "all .5s ease-in-out",
            }}
            onTransitionEnd={(e) => handleEndTransition()}
          >
            {DATA.map((arr: DataParams[], key: number) => {
              return (
                <GridBox key={key + 92929}>
                  {arr.map((item: DataParams, index: number) => {
                    return (
                      <Box key={index}>
                        <Top>
                          <Avatar src={item.avatarUrl} />
                          <Name>
                            <h4>{item.name}</h4>
                            <p>{item.title}</p>
                          </Name>
                        </Top>
                        <Text>{item.quote}</Text>
                      </Box>
                    );
                  })}
                </GridBox>
              );
            })}
          </TestimonialBox>
        </Content>
        <Arrows>
          <ArrowBtn onClick={() => handleScrollRight()}>
            <FaChevronRight />
          </ArrowBtn>
        </Arrows>
      </Main>

      <Indexes>
        {DATA.slice(0, 3).map((e: any, key: number) =>
          currentIndex === key ? (
            <span key={key + 2345} style={{ background: "#333" }} />
          ) : (
            <span key={key + 2345}></span>
          )
        )}
      </Indexes>
    </Section>
  );
};

export default Testimonials;
