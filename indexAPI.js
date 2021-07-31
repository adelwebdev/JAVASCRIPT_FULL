const quote = document.getElementById("quote");
const pic = document.getElementById("pic");

const getQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = data.content;
      // quote.innerHTML = data.author;
      console.log(data.author);
    });
  fetch("https://picsum.photos/1600/1000").then((res) => {
    document.getElementById("pic").innerHTML = `<img src=${res.url}/>`;
  });
};

quote.addEventListener("click", () => getQuote());
getQuote();
