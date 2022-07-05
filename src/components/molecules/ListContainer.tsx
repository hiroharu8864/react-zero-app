import { FC, memo, ReactNode } from "react";
import styled from "styled-components";

type ListItem = {
  id: string;
  content: { name: string; price: number; date: Date };
};
type Props = {
  listItems: ListItem[];
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

export const ListContainer: FC<Props> = memo((Props) => {
  const { listItems } = Props;

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
              </SInnerCard>
            );
          })}
        </SCardUl>
      </SOuterCard>
    </>
  );
});
