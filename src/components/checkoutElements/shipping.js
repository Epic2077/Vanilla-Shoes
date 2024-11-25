import { findUserById } from "../../api/users";
import { El } from "../../utils/create-element";

export default async function shipping() {
  const userId =
    localStorage.getItem("userId") || sessionStorage.getItem("userId");

  if (!userId) {
    router.navigate("/Login");
    return [];
  }
  const user = await findUserById(userId);
  console.log("Fetched userL", user);

  const userOrders = user.orders || [];

  const allHaveShipping = userOrders.every((order) => order.shipping);

  if (allHaveShipping) {
    console.log("All orders already have a shipping status.");
    return;
  }

  // Add missing `shipping` objects
  const updatedOrders = userOrders.map((order) => ({
    ...order,
    shipping: order.shipping || "Pending", // Add a default shipping object
  }));

  console.log("Updated orders:", updatedOrders);

  // Send updated orders to the server
  const response = await fetch(`http://localhost:3000/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ orders: updatedOrders }),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to update orders: ${response.status} ${response.statusText}`
    );
  }

  const shippingPending = userOrders.every(
    (order) => order.shipping === "Pending"
  );

  if (shippingPending) {
  }

  const shippingContainer = El({
    element: "div",
    children: [],
    className: "",
    id: "shippingContainer",
  });
  return shippingContainer;
}
