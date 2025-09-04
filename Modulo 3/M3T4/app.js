async function printUserdata() {
  let users = [];
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    // console.log(response);

    // console.log(response.data);

    // console.log(response.data[0]);

    // console.log(response.data[0].name);

    for (i = 0; i < response.data.length; i++) {
      let user = response.data[i].name;
      users.push(user);
    }
    // console.log(users);

    text = document.querySelector(".get-text");

    text.innerText = users;
  } catch (error) {
    console.log(error);
  }
}
