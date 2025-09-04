async function printUserdata() {
  let users = [];
  try {
    const response = await $.get("https://jsonplaceholder.typicode.com/users");
    for (i = 0; i < response.length; i++) {
      let user = response[i].name;
      users.push(user);
    }

    $(".get-text").html(users);
  } catch (error) {
    console.log(error);
  }
}
