const postform = document.querySelector("#post-form");

postform.addEventListener("submit", (e) => {
  e.preventDefault();

  elements = document.getElementsByClassName("form-input");

  sendInfoToApi(elements);
});

function randomUser() {
  const minCeiled = Math.ceil(1);
  const maxFloored = Math.floor(11);
  randUser = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  printRandomUser(randUser);
}

async function printRandomUser(user) {
  try {
    const request = await fetch(
      `https://jsonplaceholder.typicode.com/users/${user}`
    );
    response = await request.json();

    let data = [response.name, response.username, response.email];

    const namelabel = document.getElementById("name-data");
    const usernamelabel = document.getElementById("username-data");
    const emaillabel = document.getElementById("email-data");

    namelabel.innerText = response.name;
    usernamelabel.innerText = response.username;
    emaillabel.innerText = response.email;
  } catch (error) {
    console.log(error);
  }
}

async function sendInfoToApi(data) {
  try {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: data[0].value,
        username: data[1].value,
        email: data[2].value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    postform.reset();
  } catch (error) {}
}
