// const input = document.querySelector("#favchap");
// const button = document.querySelector("button");
// const list = document.querySelector("#list");
// const li = document.createElement("li");
// const deleteButton = document.createElement("button");

// li.textContent = input.value;
// deleteButton.textContent = "❌";

// li.append(deleteButton);
// list.append(li);

const buttonElement = document.getElementById("submitButton");

function copyInput(event) {
  console.log(event);
  const inputElement = document.getElementById("favchap");
  const outputElement = document.getElementById("list");
  outputElement.innerHTML = inputElement.value;
}
buttonElement.addEventListener("click", copyInput);