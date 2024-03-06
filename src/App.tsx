import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  return (
    <>
      <Button onClick={() => console.log("click")}>Кнопка</Button>
      <Button onClick={() => console.log("click")} appearence="big">
        Кнопка
      </Button>
      <Input placeholder="E-Mail" />
    </>
  );
}

export default App;
