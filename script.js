getQuote();

function getQuote() {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => response.json())
    .then((data) => {
      for (let quoteData of data.data) {
        const listItem = document.createElement("li");
        listItem.innerHTML = quoteData.quoteText;
        document.querySelector(".list").append(listItem);
      }
    });
}

document.querySelector(".btn").addEventListener("click", getQuote);
