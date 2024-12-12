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

document.getElementById("springboks").addEventListener("click", function() {
  location.href = "springboks.html";
});

document.getElementById("formpage").addEventListener("click", function() {
  location.href = "formpage.html";
});

let images = [
  {
    src: "images/springboks1.webp",
    srcset: "images/springboks-large.webp",
    media: "(min-width: 1000px)",
    loading: "lazy",
    alt: "Springboks"
  },
  {
    src: "images/allblacks1.webp",
    srcset: "images/allblacks-large.webp",
    media: "(min-width: 1000px)",
    loading: "lazy",
    alt: "All Blacks"
  },
  {
    src: "images/wallabies1.webp",
    srcset: "images/wallabies-large.webp",
    media: "(min-width: 1000px)",
    loading: "lazy",
    alt: "Wallabies"
  },
  {
    src: "images/redandwhites1.webp",
    srcset: "images/redandwhites-large.webp",
    media: "(min-width: 1000px)",
    loading: "lazy",
    alt: "Red and Whites"
  }
];

let icons = [
  {
    src: "images/chevron-left-icon.png",
    srcset: "images/chevron-left-icon-large.png",
    media: "(min-width: 1000px)",
    loading: "lazy",
    alt: "Left Arrow icon"
  },
  {
    src: "images/chevron-right-icon.png",
    srcset: "images/chevron-right-icon-large.png",
    media: "(min-width: 1000px)",
    loading: "lazy",
    alt: "Right Arrow icon"
  },
  {
    src: "images/arrow-left-icon.png",
    srcset: "images/arrow-left-icon-large.png",
    media: "(min-width: 1000px)",
    loading: "lazy",
    alt: "Left Arrow icon"
  },
  {
    src: "images/arrow-right-icon.png",
    srcset: "images/arrow-right-icon-large.png",
    media: "(min-width: 1000px)",
    loading: "lazy",
    alt: "Right Arrow icon"
  }
];



setNewImage(".hero-container", images, 0, "picture-container1", "image1");
setNewImage(".hero-container", images, 1, "picture-container2", "image2");
setNewImage(".hero-container", images, 2, "picture-container3", "image3");
setNewImage(".hero-container", images, 3, "picture-container4", "image4");

addButton(".hero-container", "arrow-button", "left-arrow", "prevSlide()", icons, 0, false);
addButton(".hero-container", "arrow-button2", "right-arrow", "nextSlide()", icons, 1, false);
// addButton(".hero-container", "arrow-button3", "left-arrow", "prevSlide()", icons, 2, false);
// addButton(".hero-container", "arrow-button4", "right-arrow", "nextSlide()", icons, 3, false);

function setNewImage(container, array, index, class1, class2, addDefaultClasses = true, class3 = "hero-image", class4 = "fade-in") {
  let heroContainer = document.querySelector(container);

  let newPicture = document.createElement("picture");
  newPicture.classList.add(class1);
  heroContainer.appendChild(newPicture);

  let pictureContainer = document.querySelector("." + class1);

  let newSource = document.createElement("source");
  newSource.srcset = array[index].srcset;
  newSource.media = array[index].media;

  pictureContainer.appendChild(newSource);

  let newImage = document.createElement("img");
  newImage.src = array[index].src;
  newImage.loading = array[index].loading; // ?? 'lazy';
  newImage.alt = array[index].alt;
  if (addDefaultClasses) {
    newImage.classList.add(class2, class3, class4);
  } else {
    newImage.classList.add(class2);
  }
  pictureContainer.appendChild(newImage);
}

function addButton(container, classPicture, buttonClass, attribute, array, index, addDefaultClasses = true, class1 = "button-arrow", class2 = "button-arrow2") {
  let newButton = document.createElement("button");
  newButton.classList.add(buttonClass);
  newButton.setAttribute("onclick", attribute);
  let heroContainer = document.querySelector(container);
  heroContainer.appendChild(newButton);
  newButton = "." + buttonClass;
  let pictureClass = classPicture;

  if (addDefaultClasses) {
    setNewImage(newButton, array, index, pictureClass, "button-container", true, class1, class2);

  } else {
    setNewImage(newButton, array, index, pictureClass, "button-container", false);
  }
}

const slides = document.querySelectorAll(".hero-image");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  clearInterval(intervalId);
  slideIndex++;
  showSlide(slideIndex);
}