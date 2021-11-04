// https://api.blablagues.net/?rub=blagues

fetch("https://api.blablagues.net/?rub=blagues")
  .then((res) => res.json())
  .then((data) => console.log(data.data.content.text_head));

// fetch("https://api.blablagues.net/?rub=blagues")
//   .then((res) => res.json())
//   .then((data) => (document.body.textContent = data.data.content.text_head));

const header = document.getElementById("header");
const content = document.getElementById("content");
console.log(header);
console.log(content);

fetch("https://api.blablagues.net/?rub=blagues")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.data.content);
    header.textContent = data.data.content.text_head;
    content.textContent = data.data.content.text_head;
  });
