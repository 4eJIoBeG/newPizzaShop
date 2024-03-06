import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <div>
        <Link to="/">Меню</Link>
        <Link to="/cart">Корзина</Link>
      </div>
      Cart
    </div>
  );
};

export default Cart;
