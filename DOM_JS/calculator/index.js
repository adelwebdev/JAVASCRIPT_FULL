const buttons = document.querySelectorAll(".btn");
console.log(buttons);

const result = document.getElementById("result");
console.log(result);
// somme = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.id);
    // somme = e.target.id;
    // result.innerHTML = `<h3>${somme}</h3>`;
    result.textContent += e.target.id;
  });
});

equal.addEventListener("click", () => {
  // la méthode EVAL! pr que JS calcul le contenu du texte (comme une var Number)
  result.textContent = eval(result.textContent);
});

clear.addEventListener("click", () => {
  //pour vider le contenu de la variable: result => result.textContent = ""
  result.textContent = "";
});
