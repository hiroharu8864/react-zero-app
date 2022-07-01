import { FC, memo, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const SCard = styled.div`
  border-radius: 4px;
  box-shadow: 2px 2px 4px rgb(93, 93, 93);
`;

export const Card: FC<Props> = memo((Props) => {
  const { children } = Props;
  return (
    <>
      <SCard>{children}</SCard>
    </>
  );
});
