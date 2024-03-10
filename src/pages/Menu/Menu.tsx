import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import styles from "./Menu.module.css";
import { PREFIX } from "../../helpers/API";
import { Product } from "../../interfaces/product.interface";
import { ChangeEvent, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import MenuList from "./MenuList/MenuList";

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [filter, setFilter] = useState<string>();

  useEffect(() => {
    getMenu(filter);
  }, [filter]);

  const getMenu = async (name?: string) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get<Product[]>(`${PREFIX}/products`, {
        params: {
          name,
        },
      });
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      if (error instanceof AxiosError) {
        setError(error.message);
      }
      setIsLoading(false);
      return;
    }
  };

  const updateFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <div className={styles["head"]}>
        <Header>Меню</Header>
        <Search onChange={updateFilter} />
      </div>
      <div>
        {error && <>{error}</>}
        {!isLoading && products.length > 0 && <MenuList products={products} />}
        {isLoading && <>Загружаем продукты...</>}
        {!isLoading && products.length === 0 && <>Не найдено</>}
      </div>
    </>
  );
};

export default Menu;
