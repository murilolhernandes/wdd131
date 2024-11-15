const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `©️ ${today.getFullYear()} | Murilo Luiz Hernandes | Idaho`;

const lastModified = document.querySelector("#lastModified");
let modification = new Date(document.lastModified);

lastModified.innerHTML = `Last Modification: ${modification.toLocaleString()}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const title = document.querySelector(".title");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
  title.classList.toggle("open");
});