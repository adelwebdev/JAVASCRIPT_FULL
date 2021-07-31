const btn = document.querySelector("#btn");
const img2 = document.getElementById("img");

console.log(btn);
console.log(img);

btn.addEventListener("click", () => {
  //   console.log("je click!");
  //   // pour ajouter une classe!
  img2.classList.toggle("show");
  alert("ca change");
});

const mouseEvent = document.querySelector(".mouseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

mouseEvent.addEventListener("mousemove", (e) => {
  console.log(e);
});
