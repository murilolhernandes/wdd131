myInfo = {
  name: "Murilo Luiz Hernandes",
  photo: "images/murilo.jpg",
  favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potatoes"],
  hobbies: ["Reading", "Fishing", "Camping"],
  placesLived: [
    {
      place: "Rexburg, ID",
      length: "5 years",
    },
    {
      place: "Ammon, ID",
      length: "3 years",
    },
    {
      place: "Sandy, UT",
      length: "1 years",
    },
  ],
};
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element.
// let favoriteFood1 = document.createElement("li");
// favoriteFood1.textContent = myInfo.favoriteFoods[0];

// let favoriteFood2 = document.createElement("li");
// favoriteFood2.textContent = myInfo.favoriteFoods[1];

// let favoriteFood3 = document.createElement("li");
// favoriteFood3.textContent = myInfo.favoriteFoods[2];

// let favoriteFood4 = document.createElement("li");
// favoriteFood4.textContent = myInfo.favoriteFoods[3];

// with .forEach without a function
// myInfo.favoriteFoods.forEach((food) => {
//   let favoriteFood = document.createElement("li");
//   favoriteFood.textContent = food;
//   document.querySelector("#favorite-foods").appendChild(favoriteFood);
// })

// with .map without a function
// myInfo.favoriteFoods.map((food) => {
//   let favoriteFood = document.createElement("li");
//   favoriteFood.textContent = food;
//   document.querySelector("#favorite-foods").appendChild(favoriteFood);
// })

// with .forEach with a function
// const foodsElement = document.querySelector("#favorite-foods");
// function creatandAppendFoodItem(food) {
//   let favoriteFood = document.createElement("li");
//   favoriteFood.textContent = food;
//   foodsElement.appendChild(favoriteFood);
// }
// myInfo.favoriteFoods.forEach(creatandAppendFoodItem);

// with .map with a function / doesn't work
// const foodsElement = document.querySelector("#favorite-foods");
// function mapFoodItem(food) {
//   let favoriteFood = document.createElement("li");
//   favoriteFood.textContent = food;
//   return favoriteFood;
// }
// function mapFoodItemSmall(food) {
//   return `<li>${food}</li>`;
// }
// const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
// foodsElement.innerHTML = foodListElements.join("");

// The map example could be simplified as below: / this works
// const foodsElement = document.querySelector("#favorite-foods");
// const foodListElements = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
// foodsElement.innerHTML = foodListElements.join("");
// or / also works
// document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`).join("");

const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");

function generateListMarkup(list, templateCallback) {
  const htmlList = list.map(templateCallback);
  return htmlList.join("");
}

function foodsTemplate(food) {
  return `<li>${food}</li>`;
}

function placesTemplate(place) {
  return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

foodsElement.innerHTML = generateListMarkup(myInfo.favoriteFoods, foodsTemplate);
placesElement.innerHTML = generateListMarkup(myInfo.placesLived, placesTemplate);

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods.
// document.querySelector("#favorite-foods").appendChild(favoriteFood1);
// document.querySelector("#favorite-foods").appendChild(favoriteFood2);
// document.querySelector("#favorite-foods").appendChild(favoriteFood3);
// document.querySelector("#favorite-foods").appendChild(favoriteFood4);