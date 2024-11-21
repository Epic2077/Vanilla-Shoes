import { baseUrl } from "./config";

export async function removeUserByName(name) {
  const response = await fetch(`${baseUrl}/users`);
  const users = await response.json();

  const user = users.find((p) => p.name);
  await fetch(user, {
    method: "DELETE",
  });
  console.log(`user with the id of ${id} was deleted`);
}
//fetch user list
export async function getUsers() {
  const response = await fetch(`${baseUrl}/users`);
  const users = await response.json();
  return users;
}

//find user by their id
export async function findUserById(id) {
  const response = await fetch(`${baseUrl}/users/${id}`);
  const user = await response.json();
  return user;
}

//add user to JSON
export async function addUser() {
  let userList = await users();
  let newId =
    userList.length > 0
      ? Math.max(...userList.map((user) => parseInt(user.id))) + 1
      : 1;
  //   let name = prompt("Enter a name: ");
  //   let email = prompt("Enter Email: ");
  //   let password = prompt("Enter Password: ");
  fetch(`${baseUrl}/users`, {
    method: "POST",
    body: JSON.stringify({
      id: `${newId}`,
      name: name,
      email: email,
      password: password,
      cart: [],
      orders: [],
      wishlist: [],
    }),
  });
}
// Add to cart
export async function addToCart(user, id, quantity, cost, color, size) {
  try {
    const response = await fetch(`${baseUrl}/users`);
    const foundUsers = await response.json();

    let foundUser = foundUsers.find((p) => p.name === user);
    await fetch(foundUser, {
      method: "POST", // Fixed typo
      headers: {
        "Content-Type": "application/json", // Added required header
      },
      body: JSON.stringify({
        cart: [
          {
            productId: id,
            productQuantity: quantity,
            productCost: cost,
            productColor: color,
            productSize: size,
          },
        ],
      }),
    });

    // Check if the response is okay
    if (!response.ok) {
      throw new Error(
        `Failed to add to cart: ${response.status} ${response.statusText}`
      );
    }

    console.log("Item added to cart successfully");

    // Fetch and log updated users
    const users = await getUsers(); // Await async function
    console.log(users);
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
}
//delete a user by their id

//delete all users
export async function deleteAllUsers() {
  let usersList = await users();
  for (let user of usersList) {
    await fetch(`${baseUrl}/users/${user.id}`, {
      method: "DELETE",
    });
  }
}
