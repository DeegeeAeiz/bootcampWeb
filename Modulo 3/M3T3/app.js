async function GeneratePlaceholder() {
  post = Math.floor(Math.random() * 101);
  const request = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post}`
  );
  const response = await request.json();
  let placeholderTitle = response.title;
  let placeholderDesc = response.body;
  UpdateUI(placeholderTitle, placeholderDesc);
}

function UpdateUI(title, desc) {
  title = title.charAt(0).toUpperCase() + title.slice(1);
  desc = desc.charAt(0).toUpperCase() + desc.slice(1) + ".";
  const titleText = document.querySelector("#JSONtitle");
  const descText = document.querySelector("#JSONdesc");

  titleText.innerText = title;
  descText.innerText = desc;
}
