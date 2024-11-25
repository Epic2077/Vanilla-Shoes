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
  console.log("Fetched user:", user);

  const userOrders = user.orders || [];

  const allHaveShipping = userOrders.every((order) => order.shipping);

  if (allHaveShipping) {
    console.log("All orders already have a shipping status.");
  } else {
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

    console.log("Orders updated successfully.");
  }

  // Re-fetch the user to ensure updated data
  const updatedUser = await findUserById(userId);
  const updatedOrders = updatedUser.orders || [];

  // Check if all orders are pending
  const shippingPending = updatedOrders.every(
    (order) => order.shipping === "Pending"
  );

  // Create shipping content based on the status
  let shippingContent;
  if (shippingPending) {
    shippingContent = El({
      element: "div",
      children: [
        El({
          element: "img",
          src: "../../../src/assets/icons/truck.svg",
          className: "w-[35px]",
        }),
        El({
          element: "h2",
          children: "Choose Shipping Type",
          className: "text-[18px] font-semibold",
        }),
        El({
          element: "img",
          src: "../../../src/assets/icons/right-arrow.svg",
          className: "w-[25px] ml-auto",
        }),
      ],
      className: "w-full p-5 bg-white items-center rounded-[20px] flex gap-4",
    });
  } else {
    shippingContent = El({
      element: "div",
      children: ["Shipping statuses are mixed or complete."],
      className: "w-full p-4 bg-white text-center ",
    });
  }

  // Create and return the shipping container
  const shippingContainer = El({
    element: "div",
    children: [shippingContent],
    className: "",
    id: "shippingContainer",
  });

  return shippingContainer;
}
