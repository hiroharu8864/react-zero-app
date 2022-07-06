import { ChangeEvent, FC, memo, ReactNode, useState } from "react";
import styled from "styled-components";

type Props = {
  onSubmit: (data: { name: string; price: number; date: Date }) => void;
  children: ReactNode;
};

const SFormContainer = styled.div`
  margin: auto;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  width: 70%;
  align-items: center;
  box-shadow: 2px 2px 4px rgb(93, 93, 93);
  background-color: rgb(242, 200, 200);
  border-radius: 4px;
  padding: 20px 0px;
`;

const SInput = styled.input`
  height: 32px;
  margin-top: 4px;
  margin-bottom: 4px;
  width: 300px;
  border-radius: 4px;
  border: none;
`;

const SButton = styled.button`
  margin-top: 24px;
  color: #ffffff;
  background-color: #cc6633;
  padding: 8px 40px;
  border: none;
  border-radius: 1000px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

/** style={invalidStyle} */
const invalidStyle = {
  backgroundColor: "rgb(254, 155, 155)",
  border: "2px",
  borderColor: "rgb(172, 59, 18)",
  color: "rgb(252, 33, 33)"
};

export const FormContainer: FC<Props> = memo((Props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState("");

  const { children, onSubmit } = Props;

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    const priceNum = Number(event.target.value);
    setPrice(priceNum);
  };
  const onChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };
  const onClickRegister = () => {
    const data = { name, price, date: new Date(date) };
    onSubmit(data);
  };

  return (
    <>
      <SFormContainer>
        <div>
          <label>Name: </label>
          <SInput value={name} onChange={onChangeName}></SInput>
        </div>
        <div>
          <label>Price: </label>
          <SInput type="number" value={price} onChange={onChangePrice}></SInput>
        </div>
        <div>
          <label>Date: </label>
          <SInput type="date" value={date} onChange={onChangeDate}></SInput>
        </div>
        <SButton onClick={onClickRegister}>Regist</SButton>
      </SFormContainer>
    </>
  );
});
