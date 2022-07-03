import { FC, memo, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88px;
  width: 100%;
  background-color: rgb(157, 186, 240);
`;

export const Header: FC<Props> = memo((Props) => {
  return (
    <>
      <SContainer>
        <SHeader>
          <h1>Expenses Check</h1>
        </SHeader>
      </SContainer>
    </>
  );
});
