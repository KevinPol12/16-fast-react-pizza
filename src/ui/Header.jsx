import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <div>
      <Link to="/">Fast React Co.</Link>
      <SearchOrder />
      <p>Kevin</p>
    </div>
  );
}

export default Header;
