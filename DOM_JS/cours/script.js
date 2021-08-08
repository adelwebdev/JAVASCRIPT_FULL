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
    // TEXTCONTENT: pour ecrire du texte, INNERHTML: pour utiliser les balises html et leurs caracteristiques!!!
    document.querySelector(
      //Pour afficher dans Division vide!!
      "form > div"
    ).innerHTML = `<h3>Le langage de ${pseudo} est  ${language}</h3>`;
  } else {
    alert("il faut accepter les cgv!");
  }
});

// les LOAD EVENTS ******************
window.addEventListener("load", () => {
  console.log("doc chargé!");
});

// les FOREACH **********************
// IL Y A 2 FAçON DE FAIRE!!!

// Méthode 1
const boxes1 = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");
console.log(boxes);

//Méthode 2
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    console.log((e.target.style.transform = "scale(0.7)"));
  });
});
//---------------------------------------------------------------------
// addEventListener VS onClick
// Onclick
// document.body.onclick = () => {
//   console.log("click! avec méthode on click!");
// };
// document.body.onclick = () => {
//   console.log("click2!");
// };
// le ONCLICK ecrase, alors que addEventListener on peut ajouter plusieurs
// document.body.addEventListener("click", () => {
//   console.log("click1!");
// });
// document.body.addEventListener("click", () => {
//   console.log("click2!");
// });

//Bubling (de base: addEventListener est paramétré en Bubling)
document.body.addEventListener(
  "click",
  () => {
    console.log("click1!");
  },
  false
);
//Usecapture
document.body.addEventListener(
  "click",
  () => {
    console.log("click2!");
  },
  true
);

//********************************************** */
// stop propagation
questionContainer.addEventListener("click", (e) => {
  // alert("text");
  e.stopPropagation();
});

// RemoveEventListener ************
//******************************** */

// **********************************
// le BOM **************************
console.log(window.innerHeight);
console.log(window.scrollY);

// Pour afficher des POP-UP !!!!!!!!!!!!!! avec: window.open!
// window.open("http://google.com", "cours js", "height = 600", "width = 400");

// Pour férmé une fenetre!!!!!
// window.close();

// evenements adossé à window:
// alert("hello!");

//confirm:
btn2.addEventListener("click", () => {
  confirm("voulez-vous vous tromper????");
});

// Prompt:
btn1.addEventListener("click", () => {
  let answer = prompt("entrer votre nom!");
  // on ajoute un plus pour ne pas écrasé!
  questionContainer.innerHTML += `<h3>${answer} tu as trouvé</h3>`;
});

// setTimeOut .... pour faire un timer
setTimeout(() => {
  // logique à exécuter
  questionContainer.style.borderRadius = "300px";
}, 6000);

// pour exécuter du code à répétition!!!
// let interval = setInterval(() => {
//   document.body.innerHTML += `<div class='box'><h2>new boite</h2></div>`;
// }, 1000);

// pour stoper le code à répétition !! avec: clearInterval
// document.body.addEventListener("click", (e) => {
//   // pour retirer un élément du DOM: target.remove()
//   e.target.remove();
//   clearInterval(interval);
// });

// Location
console.log(location.href);
console.log(location.host);
console.log(location.pathname);
console.log(location.search);
// location.replace("http://lequipe.fr");

// window.onload = () => {
//   location.href = "http://twitter.fr";
// };

//navigator
console.log(navigator.userAgent);

// pour la localisation
// https://developer.mozilla.org/fr/docs/Web/API/Geolocation_API

// History!
console.log(window.history);
// window.history.back();
// history.go(-2);

// SET PROPERTY !!!-------------trés utile
// dans le cas où on ne peut pas inserer une classe (comme pour les: after)
// car ici il y a un after (nav:after)
window.addEventListener("mousemove", (e) => {
  console.log(e);
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
