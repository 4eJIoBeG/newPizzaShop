import { Route, Routes } from "react-router-dom";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <>
      <Button onClick={() => console.log("click")}>Кнопка</Button>
      <Button onClick={() => console.log("click")} appearence="big">
        Кнопка
      </Button>
      <Input placeholder="E-Mail" />
      <div>
        <a href="/">Меню</a>
        <a href="/cart">Корзина</a>
      </div>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
