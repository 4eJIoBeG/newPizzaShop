import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div>
        <Link to="/">Меню</Link>
        <Link to="/cart">Корзина</Link>
      </div>
      Error
    </div>
  );
};

export default Error;
