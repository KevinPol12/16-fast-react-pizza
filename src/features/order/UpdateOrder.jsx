import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    /*Step 1/3 - Updating an order using an action */
    /*Setting up the <fetcher.Form/> which will allow us to build an action that won't redirect the user to another page but staying and refetching the updated data from the api once our PATCHed data is sent to the api, so we get the latest updates back */
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary"> Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

/*Step 2/3 - Updating an order using an action */
/*This action will be executed once the form is triggered*/
export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderID, data);
  return null;
}
