// select the DOM elements for output
const year = document.querySelector("#currentyear");
// const lastModified = document.querySelector("#lastModified");

// use the date object
const today = new Date();

year.innerHTML = `©️ ${today.getFullYear()} | Murilo Luiz Hernandes | Idaho`;

const lastModified = document.querySelector("#lastModified");
let modification = new Date(document.lastModified);

lastModified.innerHTML = `Last Modification: ${modification.toLocaleString()}`;

// lastModified.innerHTML = `Last Modification: <span class="highlight">${new Intl.DateTimeFormat(
// 	"en-US",
// 	{
// 		dateStyle: "short"
// 	}
// ).format(today)}</span>`;