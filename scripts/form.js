const today = new Date();
document.getElementById("currentYear").innerHTML = `©️${today.getFullYear()} | Murilo Luiz Hernandes | Idaho`;
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

// const productName = document.getElementById("product-name");

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.getElementById("product-name").innerHTML += products.map((product) => `<option value="${product.id}">${product.name}</option>`).join("");

// or

// const selectElement = document.getElementById('product-name');

// products.forEach(product => {
//   const option = document.createElement('option');
//   option.value = product.id;
//   option.text = product.name;
//   selectElement.appendChild(option);
// });