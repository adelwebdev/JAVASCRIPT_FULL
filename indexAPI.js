const quote = document.getElementById("quote");

const getQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = data.content;
      // quote.innerHTML = data.author;
      console.log(data.author);
    });
};

quote.addEventListener("click", () => {
  getQuote();
});
