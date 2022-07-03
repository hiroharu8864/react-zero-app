import "./styles.css";
import { Card } from "../src/components/atoms/card/Card";
import { Header } from "../src/components/atoms/layout/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Card>test</Card>
    </div>
  );
}
