const input = document.querySelector("#favchap");
const button = document.querySelector("button");
// const list = document.querySelector("#list");
// const li = document.createElement("li");
// const deleteButton = document.createElement("button");

// li.textContent = input.value;
// deleteButton.textContent = "❌";
// li.append(deleteButton);
// list.append(li);

// const buttonElement = document.getElementById("submitButton");

// function copyInput() {
//   const inputElement = document.getElementById("favchap");
//   const outputElement = document.getElementById("list");
//   outputElement.innerHTML = inputElement.value;
// }
// buttonElement.addEventListener("click", copyInput);
// document.querySelector("#submitButton").addEventListener("click", copyInput);

button.addEventListener("click", function() {
  if (input.value.trim() !== "") {
    // const input = document.querySelector("#favchap");
    // const button = document.querySelector("button");
    const list = document.querySelector("#list");
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = input.value;
    deleteButton.textContent = "❌";
    li.append(deleteButton);
    list.append(li);
    console.log(input.value);
    deleteButton.addEventListener("click", function() {
      list.removeChild(li);
      input.focus();
      input.value = "";
    });
  }
  else {
    const msg = document.createElement("li");
    msg.textContent = "Please enter a chapter";
    list.append(msg);

    // const li = document.createElement("li");
    // const deleteButton = document.createElement("button");
    // deleteButton.textContent = "❌";
    // li.textContent = input.value;
    // li.append(deleteButton);
    // list.append(li);
  }

});
