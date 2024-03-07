import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { RouterProvider, createBrowserRouter, defer } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Error from "./pages/Error/Error";
import { Layout } from "./layout/Menu/Layout";
import Product from "./components/Product/Product";
import axios from "axios";
import { PREFIX } from "./helpers/API";

const Menu = lazy(() => import("./pages/Menu/Menu"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<>Загрузка...</>}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <Product />,
        errorElement: <>Ошибка</>,
        loader: async ({ params }) => {
          // return defer({
          //   data: axios
          //     .get(`${PREFIX}/products/${params.id}`)
          //     .then((data) => data)
          //     .catch((error) => console.log(error.message)),
          // });
          const { data } = await axios.get(`${PREFIX}/products/${params.id}`);
          return data;
        },
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
