import "./styles.css";
import { Header } from "../src/components/atoms/layout/Header";
import { FormContainer } from "../src/components/molecules/FormContainer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <FormContainer />
    </div>
  );
}
