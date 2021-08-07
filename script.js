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
//-------------------------------------------------------------------
// -----  Mouse Events -------
const mousemove = document.querySelector(".mousemove");
// console.log(mousemove);
window.addEventListener("mousemove", (e) => {
  //   console.log(e);
  //   ATTENTION!!! faut concatener le +px!!
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  // il faut refaire le translate car il a été écrasé par le nouveau style injecté
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
  //   console.log("test");
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  //   console.log("test");
  mousemove.style.border = "2px solid brown";
});

questionContainer.addEventListener(
  "mouseenter",
  () => (questionContainer.style.background = "rgba(0,0,0,0.6)")
);
questionContainer.addEventListener("mouseout", () => {
  //   console.log("on est out");
  questionContainer.style.background = "brown";
});
response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

// ----------------------------le KEY PRESS -------------------------
const keypress = document.querySelector(".keypress");
const key = document.getElementById("key");
console.log(keypress);
console.log(key);

// pour inserer un son dans JS
const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  console.log(audio.src);
  audio.play();
};

document.addEventListener("keypress", (e) => {
  console.log(e.key);
  // pour inserer le texte tapeé!!!! soit INNER HTML  soit TEXTCONTENT  !!!!!!!
  //   key.innerHTML = e.key;
  key.textContent = e.key;
  if (e.key === "a") {
    keypress.style.background = "orange";
  } else if (e.key === "z") {
    keypress.style.background = "violet";
  } else {
    keypress.style.background = "grey";
  }
  //   ring(e.key);
});

// les evenements sur le scroll **********

// pr faire apparaittre et disparaittre la Nav bar! ****
const nav = document.querySelector("nav");
console.log(nav);

window.addEventListener("scroll", () => {
  //   console.log(window.scrollY);
  if (window.scrollY > 100) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

// les evenements sur les formulaires ************
// querySelector sur input EN CHOISISSANT LE TYPE D'INPUT!!!
const inputName = document.querySelector("input[type = 'text']");
const select = document.querySelector("select");
const form = document.querySelector("form");
console.log(form);
console.log(select);
console.log(inputName);
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  //   console.log(e.target.value);
  pseudo = e.target.value;
  console.log(pseudo);
});

select.addEventListener("input", (e) => {
  //   console.log(e.target.value);
  language = e.target.value;
  console.log(language);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("ça se barre plus!");
  console.log(cgv.checked);

  if (cgv.checked) {
    //Pour afficher dans Division vide!!
    document.querySelector(
      "form > div"
    ).innerHTML = `<h3>Le langage de ${pseudo} est  ${language}</h3>`;
  } else {
    alert("il faut accepter les cgv!");
  }
});
