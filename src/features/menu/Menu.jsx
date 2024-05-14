import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  //Step 3/3 - To use the react-router-dom Loader
  /*With useLoaderData we will get access to the data we passed within the route
  as the loader.*/
  const menu = useLoaderData();
  return (
    <ul className="divide-y-2 divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

//Step 1/3 - To use the react-router-dom Loader
/*We declare and export the loader function that will fetch the data we need
in this same component */
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
