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
export async function addToCart(product) {
  try {
    //To get the logged-in user
    function getUser() {
      let user = localStorage.getItem("userId");
      console.log(user);
      if (!user) {
        user = sessionStorage.getItem("userId");
        if (!user) {
          router.navigate("/Login");
        }
        return user;
      } else {
        return user;
      }
    }

    //get the user ID
    let userId = getUser();
    //Fetch the user data
    let response = await fetch(`${baseUrl}/users/${getUser()}`);
    let person = await response.json();

    //Get the current cart or initialize an empty array
    let cartList = person.carts || [];
    console.log(cartList);

    console.log(product.productId);
    //Check if product exists
    const existingProduct = cartList.find(
      (cartProduct) => cartProduct.productId === product.productId
    );

    if (existingProduct) {
      //if the product exists increment the quantity
      existingProduct.qty =
        parseInt(existingProduct.qty, 10) + parseInt(product.qty, 10);
    } else {
      //if not add to the cart
      cartList.push(product);
    }
    console.log(product);
    const updateResponse = await fetch(`${baseUrl}/users/${userId}`, {
      method: "PATCH", // Fixed typo
      headers: {
        "Content-Type": "application/json", // Added required header
      },
      body: JSON.stringify({
        carts: cartList,
      }),
    });

    if (!updateResponse.ok) {
      throw new Error(
        `Failed to update cart: ${updateResponse.status} ${updateResponse.statusText}`
      );
    }

    // Check if the response is okay

    document.getElementById("ad-to-cart").classList.add("border-green-500");
    setTimeout(() => {
      document
        .getElementById("ad-to-cart")
        .classList.remove("border-green-500");
    }, 3000);

    // Fetch and log updated users
    const users = await getUsers(); // Await async function
    console.log(users);
    console.log(users.carts);
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
