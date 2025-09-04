const signupform = document.querySelector("#signup-form");

signupform.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopPropagation();

  const elements = document.getElementsByClassName("form-input");

  const newUser = {
    username: elements[0].value,
    password: elements[1].value,
    email: elements[2].value,
  };

  fetch("http://localhost:3000/api/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      console.log(result);
      signupform.reset();
      alert("User has been created");
      setTimeout(loginPage(), 10000);
    })
    .catch((error) => {
      console.error("Error when registering:", error);
      alert(
        "There's been an error when registering the user, please try again."
      );
    });
});

function loginPage() {
  window.location.href = "login.html";
}
