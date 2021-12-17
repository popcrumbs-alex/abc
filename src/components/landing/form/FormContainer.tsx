import React, { FC, useContext, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Theme, ThemeContext } from "../../../App";
import { darken } from "polished";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 4rem 0;
  background: #e4e4e4;
  position: relative;
  overflow: hidden;
`;

const BGDecoration = styled.div`
  position: absolute;
  width: 100%;
  background: url(https://ik.imagekit.io/usam13ogl7u/shape__zV7kUp5K7.png?updatedAt=1639681424114);
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
  display: block;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: ${(props: any) => props["data-max-width"]};
  justify-content: center;
  position: relative;
  z-index: 1;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  & h1 {
    color: #fff;
    font-size: 5rem;
    font-weight: 300;
  }
`;

const FormBox = styled.div`
  background: #fff;
  box-shadow: 0 1px 20px #eeeeee44;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  min-width: 30vw;
`;

const Formy = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const InputRow = styled.div`
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.color};
  padding: 0.6rem;
  border-radius: 1px;
`;

const Label = styled.label`
  color: #666;
  font-size: 0.7rem;
`;

const Input = styled.input`
  background: #efefef88;
  padding: 0.6rem 0;
  margin: 0.3rem 0;
  text-indent: 10px;
  border: 0;
`;

const Select = styled.select`
  background: #efefef88;
  padding: 0.6rem 0;
  text-indent: 10px;
  margin: 0.3rem 0;
  border: 0;
`;

const Option = styled.option``;

const Submit = styled.button`
  padding: 0.8rem;
  background: ${(props) => props.color};
  color: #fff;
  border: 2px solid ${(props) => darken(0.05, props.color || "")};
  border-radius: 2px;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  &:hover {
    cursor: pointer;
  }
`;

interface Form_Data {
  loanAmount: string;
  timeInBusiness: string;
  currentMonthlySales: string;
  email: string;
}
interface Input_Data {
  label: string;
  value: string;
  isRequired: boolean;
  name: string;
  type: string;
  options: string[] | undefined;
}

interface FormParams {
  context: Theme;
}

const FormContainer: FC = () => {
  const context = useContext<Theme>(ThemeContext);

  return (
    <Section>
      <BGDecoration />
      <Content data-max-width={context.maxWidth}>
        <Column>
          <Form context={context} />
        </Column>
        <Column>
          <h1>
            See If
            <br /> You <br />
            Qualify
          </h1>
        </Column>
      </Content>
    </Section>
  );
};

const Form: Function = ({ context }: FormParams) => {
  const [inputs, setData] = useState<Form_Data>({
    currentMonthlySales: "",
    email: "",
    timeInBusiness: "",
    loanAmount: "",
  });

  const { currentMonthlySales, loanAmount, email, timeInBusiness } = inputs;

  const onChange = (
    e: React.FormEvent<HTMLSelectElement> | React.FormEvent<HTMLInputElement>
  ) => setData({ ...inputs, [e.currentTarget.name]: e.currentTarget.value });

  console.log("inputs!", inputs);

  const DATA: Array<Input_Data> = [
    {
      label: "Current Monthly Sales",
      value: currentMonthlySales,
      isRequired: true,
      name: "currentMonthlySales",
      type: "select",
      options: [
        "$0-$5,000",
        "$5,000-$10,000",
        "$10,000-$15,000",
        "$15,000-$25,000",
        "$25,000-$50,000",
        "$50,000-$75,000",
        "$75,000-$100,000",
        "$100,000-$200,000",
        "$200,000plus",
      ],
    },
    {
      label: "Actual Time In Business",
      value: timeInBusiness,
      isRequired: true,
      name: "timeInBusiness",
      type: "select",
      options: [
        "6-12 Months",
        "Under 6 Months",
        "1-2 Years",
        "2-4 years",
        "Over 4 Years",
        "Not Yet Generating Sales",
      ],
    },
    {
      label: "Loan Amount Requested",
      value: loanAmount,
      isRequired: true,
      name: "loanAmount",
      type: "select",
      options: [
        "$0-$5,000",
        "$5,000 - $10,000",
        "$10,000 - $15,000",
        "$15,000 - $25,000",
        "$25,000 - $50,000",
        "$50,000 - $75,000",
        "$75,000 - $100,000",
        "$100,000 - $200,000",
        "$200,000 plus",
      ],
    },
    {
      label: "Email",
      value: email,
      isRequired: true,
      name: "email",
      type: "email",
      options: [],
    },
  ];
  return (
    <FormBox>
      <Formy>
        {DATA.map((item: Input_Data, key: number) => {
          return (
            <InputRow key={key + 1000} color={context.secondary}>
              <Label>{item.label}</Label>
              {item.type === "select" && (
                <Select
                  value={item.value}
                  name={item.name}
                  onChange={onChange}
                  required={item.isRequired ? true : false}
                >
                  {item.options?.map((opt: string, key: number) => {
                    return (
                      <Option key={Math.random() * key + 100} value={opt}>
                        {opt}
                      </Option>
                    );
                  })}
                </Select>
              )}
              {item.type === "email" && (
                <Input
                  type={item.type}
                  value={item.value}
                  name={item.name}
                  onChange={(e) => onChange(e)}
                  placeholder={item.label}
                  required={item.isRequired ? true : false}
                />
              )}
              {item.type === "text" && (
                <Input
                  type={item.type}
                  value={item.value}
                  name={item.name}
                  onChange={(e) => onChange(e)}
                  placeholder={item.label}
                  required={item.isRequired ? true : false}
                />
              )}
            </InputRow>
          );
        })}
        <Submit color={context.secondary}>Submit</Submit>
      </Formy>
    </FormBox>
  );
};

export default FormContainer;
