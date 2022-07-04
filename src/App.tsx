import { useState } from "react";
import "./styles.css";
import { Header } from "../src/components/atoms/layout/Header";
import { FormContainer } from "../src/components/molecules/FormContainer";

export default function App() {
  type ListItem = {
    id: string;
    content: { name: string; price: number; date: Date };
  };
  const [listItems, setListItems] = useState<ListItem[]>([]);

  return (
    <div className="App">
      <Header />
      <FormContainer />
    </div>
  );
}
