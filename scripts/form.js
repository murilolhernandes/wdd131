const today = new Date();
document.getElementById("currentYear").innerHTML = `©️${today.getFullYear()} | Murilo Luiz Hernandes | Idaho`;
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

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

if (window.location.pathname === "/wdd131/form.html") {
  document.querySelector("#product-name").innerHTML += products.map((product) => `<option value="${product.id}">${product.name}</option>`).join("");

  document.querySelector(".wf1").addEventListener("submit", function(event) {
    event.preventDefault();
    let counter = localStorage.getItem("reviewCounter");
    counter = counter ? parseInt(counter) + 1 : 1;
    localStorage.setItem("reviewCounter", counter);
    window.location.href = "review.html";
  });
} else if (window.location.pathname === "/wdd131/review.html") {
    let counter = localStorage.getItem("reviewCounter");
    console.log(`Counter value: ${counter}`);
    document.getElementById("reviewCounter").textContent = `Reviews: ${counter}`;
}