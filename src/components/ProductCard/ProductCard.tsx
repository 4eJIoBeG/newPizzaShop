import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { ProductCardProps } from "./ProductCard.props";
import { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { cartActions } from "../../store/cart.slice";

const ProductCard = (props: ProductCardProps) => {
  const { id, name, price, description, rating, image } = props;
  const dispatch = useDispatch<AppDispatch>();

  const add = (event: MouseEvent) => {
    event.preventDefault();
    dispatch(cartActions.add(id));
  };

  return (
    <Link to={`/product/${id}`} className={styles["link"]}>
      <div className={styles["card"]}>
        <div
          className={styles["header"]}
          style={{ backgroundImage: `url('${image}')` }}
        >
          <div className={styles["price"]}>
            {price}&nbsp;
            <span className={styles["currency"]}>₽</span>
          </div>
          <button className={styles["add-to-cart"]} onClick={add}>
            <img src="/shop.svg" alt="add-to-cart-icon" />
          </button>
          <div className={styles["rating"]}>
            {rating}&nbsp;
            <img src="/star.svg" alt="star" />
          </div>
        </div>
        <div className={styles["info"]}>
          <div className={styles["title"]}>{name}</div>
          <div className={styles["description"]}>{description}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
