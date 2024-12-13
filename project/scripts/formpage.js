const today = new Date();
document.getElementById("currentYear").innerHTML = `©️ ${today.getFullYear()} | Murilo Luiz Hernandes | Idaho`;
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

function choose() {
  document.querySelector(".choose").addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector(".choose").classList.add("hide");

    let selectOption = document.querySelector("input[name=choose]:checked").value;
    selectOption = "." + selectOption;

    if (selectOption === ".question") {
      let question = document.querySelector(selectOption);
      question.classList.remove("hide");

    } else if (selectOption === ".share") {
        let share = document.querySelector(selectOption);
        share.classList.remove("hide");
    } else if (selectOption === ".updates") {
        let updates = document.querySelector(selectOption);
        updates.classList.remove("hide");
    } else if (selectOption === ".suggestion") {
        let suggestions = document.querySelector(selectOption);
        suggestions.classList.remove("hide");
    } else if (selectOption === ".newsletter") {
        let newsletter = document.querySelector(selectOption);
        newsletter.classList.remove("hide");
    }
  })
}

choose();