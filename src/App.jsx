//https://reactrouter.com/en/main/routers/create-browser-router - routing + fetching capabilities
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as MenuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      //Step 2/3 - To use the react-router-dom Loader
      /*We import the loader along with the Component, and rename the loader
      to avoid multiple loaders with the same name - then we pass it to that 
      route as the loader */
      { path: "/menu", element: <Menu />, loader: MenuLoader },
      { path: "/cart", element: <Cart /> },
      { path: "/order/new", element: <CreateOrder /> },
      { path: "/order/:orderID", element: <Order /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
