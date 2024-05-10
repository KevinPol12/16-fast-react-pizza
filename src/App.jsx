//https://reactrouter.com/en/main/routers/create-browser-router - routing + fetching capabilities
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Order, { loader as orderLoader } from "./features/order/Order";
import Home from "./ui/Home";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      //Step 2/3 - To use the react-router-dom Loader
      /*We import the loader along with the Component, and rename the loader
      to avoid multiple loaders with the same name - then we pass it to that 
      route as the loader */
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      { path: "/order/new", element: <CreateOrder /> },
      {
        path: "/order/:orderID",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
