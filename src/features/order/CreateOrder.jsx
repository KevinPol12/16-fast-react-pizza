import { useState } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>
      {
        //Step 1/3: To use React-router-dom actions}
        /*We first use the Form component from "react-router-dom", pass the 
      method "POST", and optionally the action path. */
      }
      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          {/*Within a form, we wont have the user list item by item what they want to 
          purchase, but instead we carry the cart information into a form field as 
          hidden so it is automatically included in the form submittion.  */}
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button>Order now</button>
        </div>
      </Form>
    </div>
  );
}

//Step 2/3: To use React-router-dom actions
/*Once the form already has a method and the action was optionally passed, then
we receive the "request" submitted by the form and extract its data */
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  /*Here we just reformat the form's output into the data format in which the
  API requests the data to be so it doesnt return errors on our POST request*/
  const order = {
    ...data,
    priority: data.priority === "on",
    cart: JSON.parse(data.cart),
  };
  const newOrder = await createOrder(order);
  /*The navigate cant be used here within this action, so we can instead return
  the redirect method oferred by react-router-dom for this specific scenarios */
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
