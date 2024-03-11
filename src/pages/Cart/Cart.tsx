import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { RootState } from "../../store/store";
import CartItem from "../../components/CartItem/CartItem";
import { useEffect, useState } from "react";
import { Product } from "../../interfaces/product.interface";
import axios from "axios";
import { PREFIX } from "../../helpers/API";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const items = useSelector((state: RootState) => state.cart.items);

  const getItem = async (id: number) => {
    const { data } = await axios.get(`${PREFIX}/products/${id}`);
    return data;
  };

  const loadAllItems = async () => {
    const result = await Promise.all(items.map((item) => getItem(item.id)));
    setCartProducts(result);
  };
  useEffect(() => {
    loadAllItems();
  }, [items]);

  return (
    <>
      <Header>Корзина</Header>
      {items.map((item) => {
        const product = cartProducts.find((prod) => prod.id === item.id);
        if (!product) {
          return;
        }
        return <CartItem count={item.count} {...product} />;
      })}
    </>
  );
};

export default Cart;
