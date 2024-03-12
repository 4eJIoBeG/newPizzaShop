import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";
import Button from "../../components/Button/Button";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, userActions } from "../../store/user.slice";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";

export const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const profile = useSelector((state: RootState) => state.user.profile);
  const items = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const logout = () => {
    dispatch(userActions.logout());
    navigate("/auth/login");
  };
  return (
    <div className={styles["layout"]}>
      <div className={styles["sidebar"]}>
        <div className={styles["user"]}>
          <img className={styles["avatar"]} src="/scp.png" alt="avatar" />
          <div className={styles["name"]}>{profile?.name}</div>
          <div className={styles["email"]}>{profile?.email}</div>
        </div>
        <div className={styles["menu"]}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(styles["link"], {
                [styles.active]: isActive,
              })
            }
          >
            <img src="/menu.svg" alt="menu-icon" />
            Меню
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              cn(styles["link"], {
                [styles.active]: isActive,
              })
            }
          >
            <img src="/cart.svg" alt="cart-icon" /> Корзина
            {items.length === 0 ? (
              <span className={styles["empty-cart-count"]}></span>
            ) : (
              <span className={styles["cart-count"]}>
                {items.reduce((acc, item) => (acc += item.count), 0)}
              </span>
            )}
          </NavLink>
        </div>
        <Button className={styles["exit"]} onClick={logout}>
          <img src="/exit.svg" alt="exit" />
          Выход
        </Button>
      </div>
      <div className={styles["content"]}>
        <Outlet />
      </div>
    </div>
  );
};
