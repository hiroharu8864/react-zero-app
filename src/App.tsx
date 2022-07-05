import { useState } from "react";
import "./styles.css";
import { Header } from "../src/components/atoms/layout/Header";
import { FormContainer } from "../src/components/molecules/FormContainer";
import { ListContainer } from "../src/components/molecules/ListContainer";

export default function App() {
  type ListItem = {
    id: string;
    content: { name: string; price: number; date: Date };
  };
  const [listItems, setListItems] = useState<ListItem[]>([]);

  const onClick = (data: { name: string; price: number; date: Date }) => {
    const listItem = { id: Math.random().toString(), content: data };
    setListItems((prevListItem) => [...prevListItem, listItem]);
    console.log("register now!");
  };
  const deleteListItem = (id: string) => {
    setListItems(listItems.filter((item) => item.id != id));
  };

  return (
    <div className="App">
      <Header />
      <FormContainer onSubmit={onClick} />
      <ListContainer onClickDelete={deleteListItem} listItems={listItems} />
    </div>
  );
}
