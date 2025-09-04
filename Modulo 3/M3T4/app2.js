async function printUserdata() {
  let users = [];
  try {
    const request = await fetch("https://jsonplaceholder.typicode.com/users");

    const response = await request.json();

    // console.log(response);

    // console.log(response[0].name);

    for (i = 0; i < response.length; i++) {
      let user = response[i].name;
      users.push(user);
    }

    text = document.querySelector(".get-text");

    text.innerText = users;
  } catch (error) {
    console.log(error);
  }
}
