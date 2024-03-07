import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import Search from "../../components/Search/Search";
import styles from "./Menu.module.css";
import { PREFIX } from "../../helpers/API";
import { Product } from "../../interfaces/product.interface";
import { useEffect, useState } from "react";
import axios from "axios";

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getMenu = async () => {
    try {
      const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
      setProducts(data);
    } catch (error) {
      console.error(error);
      return;
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <div className={styles["head"]}>
        <Header>Меню</Header>
        <Search />
      </div>
      <div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.ingredients.join(", ")}
            price={product.price}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>
    </>
  );
};

export default Menu;
