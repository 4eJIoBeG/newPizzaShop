import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <div>
        <Link to="/">Меню</Link>
        <Link to="/cart">Корзина</Link>
      </div>
      Menu
    </div>
  );
};

export default Menu;
