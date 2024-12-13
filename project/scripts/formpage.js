const today = new Date();
document.getElementById("currentYear").innerHTML = `©️ ${today.getFullYear()} | Murilo Luiz Hernandes | Idaho`;
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

function choose() {
  document.querySelector(".choose").addEventListener("submit", (e) => {
    e.preventDefault();

    let selectOption = document.querySelector("input[name=choose]:checked").value;
    selectOption = "." + selectOption;

    if (selectOption === ".question") {
      let question = document.querySelector(selectOption);
      if (question) {
        submit(question);
      }
    } else if (selectOption === ".share") {
        let share = document.querySelector(selectOption);
        if (share) {
          submit(share);
        }
    } else if (selectOption === ".updates") {
        let updates = document.querySelector(selectOption);
        if (updates) {
          submit(updates);
        }
    } else if (selectOption === ".suggestion") {
        let suggestions = document.querySelector(selectOption);
        if (suggestions) {
          submit(suggestions);
        }
    } else if (selectOption === ".newsletter") {
        let newsletter = document.querySelector(selectOption);
        if (newsletter)
        submit(newsletter);
    }
    document.querySelector(".choose").classList.add("hide");
  })
}

function submit(form) {
  form.classList.remove("hide");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.classList.add("hide");
    document.querySelector(".thank-you").classList.remove("hide");
    storage();
  });
}



function storage() {
  let counter = localStorage.getItem("submitCounter");
  counter = counter ? parseInt(counter) + 1 : 1;
  localStorage.setItem("submitCounter", counter);
  document.getElementById("message").textContent = `Forms Submitted: ${counter}`
}

choose();