const array = [1, "er", 3, "rr"];
const array2 = [1, "er", 3, ["rr", "der"], true];
const string = "je suis un string";
const num = 45;

console.log(array[1][1]);

for (i = 0; i < array.length; i++) {
  console.log(array2[3]);
  console.log(typeof array[i]);
}

array.sort();
console.log(array2);

array3 = [1, 34, 54, 78, 4];
console.log(array3.sort());

// ***********************************************************
const input2 = document.getElementById("input2");
const video = document.getElementById("video");
let link = "";

input2.addEventListener("input", (e) => {
  changeLink(e.target.value);

  if (link) {
    video.innerHTML = `<iframe
      width="727"
      height="409"
      src=${link}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>`;
  }
});

const changeLink = (linkToChange) => {
  let embed = linkToChange.replace("watch?v", "embed/");
  link = embed.split("&")[0];
  console.log(link);
};

// https://www.youtube.com/embed/cNk4_rFVAjA
// https://www.youtube.com/watch?v=cNk4_rFVAjA
