async function searchIpAddress(ip_address) {
  const api_key = "at_tkDxqzCNS2MruWB6uwF8X8NSO4lck";
  const request = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${ip_address}`
  );
  const response = await request.json();

  const { location, ip, isp } = response;

  console.log(response);

  update_ui(ip, location.city, location.timezone, isp);
}

function update_ui(ip_address, location, timezone, isp) {
  const address = document.querySelector("#address");
  const city = document.querySelector("#location");
  const utc = document.querySelector("#timezone");
  const provider = document.querySelector("#isp");

  address.value = ip_address;
  city.value = location;
  utc.value = "UTC" + timezone;
  provider.value = isp;

  console.log(`Dirección IP: ${ip_address}
Ciudad: ${location}
Horario: UTC ${timezone}
Proveedor de Internet: ${isp}`);
}

async function catFax() {
  const request = await fetch("https://catfact.ninja/fact");
  const response = await request.json();
  console.log(response.fact);
}

const search_form = document.querySelector("form.address-input");
search_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = document.querySelector("form.address-input input").value;
  searchIpAddress(value);
});

setTimeout(() => {
  catFax();
}, 5000);
