const btn = document.querySelector("#btn");
const photo = document.getElementById("img");
console.log(btn);
console.log(img);

btn.addEventListener("click", () => {
  console.log("je click!");
  // pour ajouter une classe!
  photo.classList.toggle("montre");
  alert("ca change");
});

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

document.getElementById("input").addEventListener("input", (e) => {
  // pour récuperer les valeus des input
  console.log(e.target.value);
  vertical.innerHTML = e.target.value;
});
