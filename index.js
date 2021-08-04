const btn = document.querySelector("#btn");
const img = document.getElementById("img");
console.log(btn);
console.log(img);

// Evenement sur CLICK *************************************************
btn.addEventListener("click", () => {
  console.log("je click!");
  // pour ajouter une classe!
  img.classList.toggle("montre");
  //   alert("ca change");
});

// Evenement sur mvt souris **********************************************
const mouseEvent = document.querySelector(".mouseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

mouseEvent.addEventListener("mousemove", (e) => {
  console.log(e);
  //on recupère les valeurs de x et y
  horizontal.innerHTML = e.x;
  vertical.innerHTML = e.y;
  mouseEvent.style.left = (e.x / window.innerWidth) * 100 + "%";
  //   mouseEvent.style.top = (e.y / window.innerHeight) * 100 + "%";

  if (e.x > 500) {
    document.body.style.filter = "blur(3px)";
  } else {
    document.body.style.filter = "none";
  }
  if (e.y > 150) {
    mouseEvent.style.background = "skyblue";
  } else {
    mouseEvent.style.background = "none";
  }
});

// Evenement sur INPUT ***************************************************
document.getElementById("input").addEventListener("input", (e) => {
  // pour récuperer les valeus des input
  console.log(e.target.value);
  vertical.innerHTML = e.target.value;
});

// selector all et injection de classes *****************************************
const theme = document.querySelectorAll(".theme");
const dark = document.querySelector(".dark");
const salmon = document.querySelector(".salmon");
const yellow = document.querySelector(".yellow");

theme.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.id);
    document.body.classList.remove("darkTheme", "salmonTheme", "yellowTheme");
    switch (e.target.id) {
      case "dark":
        document.body.classList.add("darkTheme");
        break;
      case "yellow":
        document.body.classList.add("yellowTheme");
        break;
      case "salmon":
        document.body.classList.add("salmonTheme");
        break;
      default:
        null;
    }
  });
});
