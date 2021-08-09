// Creer des bulles
//********************** */

const counter = document.querySelector("h3");
console.log(counter);
let count = 0;

const bubbleMaker = () => {
  // creation d'une balise Span sur le dom
  const bubble = document.createElement("span");
  // insertion de la classe .bubble (crée en css)
  bubble.classList.add("bubble");
  //ça veut le body tu as un enfant qui s'appelle bubble (le body on lui a créé un span; qui est bubble)
  document.body.appendChild(bubble);

  //pour des tailles aléatoires avec méthode Random
  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  //pour les positions des bulles (avec Top et Left) et random pour position aléatoire
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  // on crée plusMinus que les bulles aillent plus vers la gauche, (--left négatif)
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  //pour toucher la variable Left (creé en css) et lui injecter Math.random (pr fixer où la bulle ira; voir css)
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  // pour suprimer une bulles du DOM et comptabiliser dans "count": nbr de suppression et inserer dans counter avec textContent
  bubble.addEventListener("click", () => {
    count++;
    bubble.remove();
    console.log(count);
    counter.textContent = count;
  });

  // pour fixer un temps de fin aux bulles
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

// pour creer plusieurs bulles!! avec: setInterval
setInterval(bubbleMaker, 300);
