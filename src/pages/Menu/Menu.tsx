import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles["head"]}>
      <Header>Меню</Header>
      <Search />
    </div>
  );
};

export default Menu;
