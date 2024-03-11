import styles from "./CartItem.module.css";
import { CartItemProps } from "./CartItem.props";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { cartActions } from "../../store/cart.slice";

const CartItem = (props: CartItemProps) => {
  const { id, name, price, image, count } = props;
  const dispatch = useDispatch<AppDispatch>();

  const remove = () => {
    dispatch(cartActions.remove(id));
  };
  const decrease = () => {
    dispatch(cartActions.decrease(id));
  };
  const increase = () => {
    dispatch(cartActions.increase(id));
  };

  return (
    <div className={styles["item"]}>
      <div
        className={styles["image"]}
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      <div className={styles["description"]}>
        <div className={styles["name"]}>{name}</div>
        <span className={styles["currency"]}>{price}&nbsp;₽</span>
      </div>
      <div className={styles["actions"]}>
        <button className={styles["decrease"]} onClick={decrease}>
          <img src="/minus.svg" alt="decrease-item" />
        </button>
        <div>{count}</div>
        <button className={styles["increase"]} onClick={increase}>
          <img src="/plus.svg" alt="increase-item" />
        </button>
        <button className={styles["remove"]} onClick={remove}>
          <img src="/remove.svg" alt="remove-item" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
