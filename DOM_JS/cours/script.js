//**Selecteurs**
// document.querySelector("h4").style.background = "yellow";

// pointer les élements du DOM*****
const baliseHtml = document.querySelector("h4");
console.log(baliseHtml);

// pour inserer du style sur le DOM (sans addEventListener)*******
baliseHtml.style.background = "skyblue";

// les Events ********
//tjrs loger les variables ********

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");
console.log(questionContainer);
console.log(btn1);
console.log(response);

questionContainer.style.borderRadius = "50px";

// le click **********************
questionContainer.addEventListener("click", () => {
  //   console.log("oups");
  //   questionContainer.style.background = "teal";
  //   questionContainer.style.border = "3px solid red";
  // On peut fair la meme chose en inserant une classe directement (ecrite en CSS)
  questionContainer.classList.toggle("questionClick");
});

// ---------------
btn1.addEventListener("click", () => {
  //   console.log("je click!");
  response.classList.add("showResponse");
  response.style.background = "green";
});
btn2.addEventListener("click", () => {
  //   console.log("je click!");
  response.classList.add("showResponse");
  response.style.background = "red";
});
