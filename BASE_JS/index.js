// ceci est un commentaire
// ceci
// est
// un comm...

var unTexte = "voici un texte";
console.log(unTexte);

unTexte = "youpi";
console.log(unTexte);

let prenom = "justin";
prenom = "julien";
console.log(prenom);

let chiffre = 23;
chiffre = 233;
console.log(chiffre);

let chaine = "je suis l'autre chaine de caractère";
console.log(chaine);

let newChaine = chaine + " avec le rajout";
console.log(newChaine);

let newChaine2 = `${chaine} avec le rajout et la touche 7`;
console.log(newChaine2);

let cara = "je suis une chaine";
let number = 54;
let boolean = true;
let array = ["je", "suis", 32, false];
let obj = {
  prenom: "audrey",
  age: 34,
  ville: "Bordeau",
};
console.log(obj);
console.log(typeof array);

let arbre = null;
console.log(arbre);
console.log(typeof arbre);

console.log(2 ** 4);

let total = 0;
let x = 4;
// total = total + 1;
total--;
console.log(total);
total *= 5;
console.log(total);
total = ++x;
console.log(total);

let xx = 2;
let yy = 4;

if (xx < yy) {
  console.log("y est plus grand que x");
} else {
  console.log("y est plus petit que x");
}

if (!x) {
  console.log("x existe");
} else {
  console.log("pas de x");
}

if (xx == yy || xx > 3) {
  console.log("oui");
} else {
  console.log("non!");
}

if (xx !== yy) console.log("true");
xx == yy ? console.log("true!!") : console.log("false!!");
