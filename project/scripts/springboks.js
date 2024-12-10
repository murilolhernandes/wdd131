const today = new Date();
document.getElementById("currentYear").innerHTML = `©️ ${today.getFullYear()} | Murilo Luiz Hernandes | Idaho`;
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

function daysUntilWorldCup() {
  const rugbyWorldCupDate = new Date("2027-10-01T00:00:00.000Z");
  const today = new Date();
  const timeDiff = rugbyWorldCupDate.getTime() - today.getTime() - 1;
  const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  return daysLeft;
}

document.getElementById("countdown").innerHTML = daysUntilWorldCup() + " days until the next Rugby World Cup"

document.getElementById("formpage").addEventListener("click", function() {
  location.href = "formpage.html";
});