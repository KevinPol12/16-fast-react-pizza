import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        {/*Here with the Outlet we can display our nested routes*/}
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
