const loginform = document.querySelector("#login-form");

let invaliduser = 0;

loginform.addEventListener("submit", (e) => {
  e.preventDefault();

  elements = document.getElementsByClassName("form-input");

  console.log(elements);

  wawa(elements);
});

async function wawa(logindata) {
  const obj = await fetch("./users.json");
  const data = await obj.json();
  console.log("wa");

  for (i = 0; i < data.length; i++) {
    if (
      logindata[0].value == data[i].username &&
      logindata[1].value == data[i].password
    )
      window.location.href = "applet.html";
    else {
      invaliduser++;
      console.log(invaliduser);
    }
  }
  if (invaliduser >= data.length) {
    loginform.reset();
    alert("Invalid User!");
    invaliduser = 0;
  }
}

function signupPage() {
  window.location.href = "signup.html";
}
