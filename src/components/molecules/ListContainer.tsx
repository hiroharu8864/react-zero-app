import { FC, memo, ReactNode } from "react";
import styled from "styled-components";

type ListItem = {
  id: string;
  content: { name: string; price: number; date: Date };
};
type Props = {
  listItems: ListItem[];
  onClickDelete: (id: string) => void;
};

const SOuterCard = styled.div`
  margin: auto;
  margin-top: 12px;
  background-color: rgb(200, 240, 220);
  width: 90%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SInnerCard = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
  width: 250px;
  background-color: rgb(240, 240, 230);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const SCardUl = styled.ul`
  padding: 0;
  list-style: none;
`;

const SButton = styled.button`
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

export const ListContainer: FC<Props> = memo((Props) => {
  const { listItems, onClickDelete } = Props;

  const onClickDeleteButton = (id: string) => {
    // console.log("id ", id);
    onClickDelete(id);
  };

  return (
    <>
      <SOuterCard>
        <SCardUl>
          {listItems.map((item) => {
            return (
              <SInnerCard>
                <li key={item.id}>
                  {item.content.name} {item.content.price}
                </li>
                <SButton onClick={() => onClickDeleteButton(item.id)}>
                  DELETE
                </SButton>
              </SInnerCard>
            );
          })}
        </SCardUl>
      </SOuterCard>
    </>
  );
});
