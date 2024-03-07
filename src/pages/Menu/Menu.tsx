import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import Search from "../../components/Search/Search";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <>
      <div className={styles["head"]}>
        <Header>Меню</Header>
        <Search />
      </div>
      <div>
        <ProductCard
          id={1}
          title="Наслаждение"
          description="Салями, руккола, помидоры, оливки"
          price={300}
          rating={4.5}
          image="/img.jpg"
        />
      </div>
    </>
  );
};

export default Menu;
