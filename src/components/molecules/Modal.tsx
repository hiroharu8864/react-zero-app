import { FC, memo, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  ok: () => void;
  ng: () => void;
  children: ReactNode;
};

const SModal = styled.div`
  margin: auto;
  background-color: pink;
  padding: 20px;
  border-radius: 8px;
  height: 100px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SOuterModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SButton = styled.button`
  height: 24px;
  width: 80px;
`;

export const Modal: FC<Props> = memo((Props) => {
  const { ok, ng } = Props;

  return (
    <>
      <SOuterModal>
        <SModal>
          <span>Delete ?</span>
          <div>
            <SButton onClick={ng}>NO</SButton>
            <SButton onClick={ok}>YES</SButton>
          </div>
        </SModal>
      </SOuterModal>
    </>
  );
});
