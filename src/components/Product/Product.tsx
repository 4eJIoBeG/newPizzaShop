// import { Await, useLoaderData } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { Product } from "../../interfaces/product.interface";
// import { Suspense } from "react";

const Product = () => {
  // const data = useLoaderData() as { data: Product };
  const data = useLoaderData() as Product;
  return (
    // <>
    //   <Suspense fallback={"Загружаем..."}>
    //     <Await resolve={data.data}>
    //       {({ data }: { data: Product }) => <>Product: {data.name}</>}
    //     </Await>
    //   </Suspense>
    // </>
    <>Product: {data.name}</>
  );
};

export default Product;
