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

const images = document.querySelectorAll(".fade-image");
const scrollThreshold = [50, 200, 2800, 4300];

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  images.forEach((image, index) => {
    const threshold = scrollThreshold[index];
    const fadeOutThreshold = threshold + (image.offsetHeight / 2);
    if (scrollPosition >= fadeOutThreshold) {
      // image.style.opacity = 0;
      image.classList.add("fade-out");
    } else {
      // image.style.opacity = 1;
      image.classList.remove("fade-out");
    }
  });
});

// const scrollThreshold = window.innerHeight * 0.5;

// function handleScroll() {
//   images.forEach(image => {
//     const imageTop = image.getBoundingClientRect().top;
//     if (imageTop < scrollThreshold) {
//       image.classList.add("fade-in");
//     }
//   });
// }

// window.addEventListener("scroll", handleScroll);