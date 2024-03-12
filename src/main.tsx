import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Error from "./pages/Error/Error";
import { Layout } from "./layout/Menu/Layout";
import Product from "./components/Product/Product";
import axios from "axios";
import { PREFIX } from "./helpers/API";
import AuthLayout from "./layout/Auth/Auth.layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import RequireAuth from "./helpers/RequireAuth";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Success from "./pages/Success/Success";
import Menu from "./pages/Menu/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
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
          const { data } = await axios.get(`${PREFIX}/products/${params.id}`);
          return data;
        },
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
