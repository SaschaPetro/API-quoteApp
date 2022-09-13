getQuote();

function getQuote() {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      for (let quoteData of data.data) {
        const listItem = document.getElementById("quote");
        const author = document.getElementById("quote-author");
        listItem.innerHTML = quoteData.quoteText;
        author.innerHTML = quoteData.quoteAuthor;
        document.querySelector(".list").appendChild(listItem);
        document.querySelector(".list").appendChild(author);
      }
    });
}

document.querySelector(".btn").addEventListener("click", getQuote);
