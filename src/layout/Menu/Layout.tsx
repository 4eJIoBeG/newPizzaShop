import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Button from "../../components/Button/Button";

export const Layout = () => {
  return (
    <div className={styles["layout"]}>
      <div className={styles["sidebar"]}>
        <div className={styles["user"]}>
          <img className={styles["avatar"]} src="/avatar.jpg" alt="avatar" />
          <div className={styles["name"]}>SCP Foundation</div>
          <div className={styles["email"]}>SCP@Foundation.com</div>
        </div>
        <div className={styles["menu"]}>
          <Link to="/" className={styles["link"]}>
            <img src="/menu.svg" alt="menu-icon" />
            Меню
          </Link>
          <Link to="/cart" className={styles["link"]}>
            <img src="/cart.svg" alt="cart-icon" /> Корзина
          </Link>
        </div>
        <Button className={styles["exit"]}>
          <img src="/exit.svg" alt="exit" />
          Выход
        </Button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
