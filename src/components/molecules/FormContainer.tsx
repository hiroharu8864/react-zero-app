import { FC, memo, ReactNode } from "react";
import styled from "styled-components";

type Props = {
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

/**Todo */
const SInput = styled.input``;

export const FormContainer: FC<Props> = memo((Props) => {
  return (
    <>
      <SFormContainer>
        <div>
          <label>Name: </label>
          <input></input>
        </div>
        <div>
          <label>Name: </label>
          <input></input>
        </div>
        <div>
          <label>Name: </label>
          <input></input>
        </div>
      </SFormContainer>
    </>
  );
});
