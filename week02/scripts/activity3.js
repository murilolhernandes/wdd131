// To select an HTML element from the document using querySelector method.
const article = document.querySelector("article");

// To change the innerHTML property of an existing element.
article.innerHTML = "innerHTMl supports <strong>HTML</strong> tags. The textContent property does not.";

// To change the inline CSS style of an element.
article.style.textAlign = "right";

// To change an attribute of an element.
article.setAttribute("class", "active");
// or / preferred way:
articleElement.classList.add("active");

// To create an element.
const paragraph = document.createElement("p");

// To append an element with additional content or elements.
article.appendChild(paragraph);
article.appendChild(paragraph, "Hello World Addition!");

// To remove an element from the document.
article.removeChild(paragraph);
article.remove();

// Click Event: Triggered when a user clicks on an element. It's widely used for handling button clicks, link clicks, or any interaction involving a mouse click.
buttonElement.addEventListener("click", function() {
  // Code to be executed when the element is clicked
});

// Keyup Event: Triggered when a key is released. Useful for handling keyboard input.
buttonElement.addEventListener("keyup", function() {
  // Code to be executed when a key is released
});

// DOMContentLoaded Event: Triggered when the HTML document has been completely parsed and all deferred scripts have been executed. It's widely used for initializing JavaScript applications.
document.addEventListener("DOMContentLoaded", function() {
  // Code to be executed when the DOM is parsed
});