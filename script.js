function getQuote() {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data[0].quoteText);

      for (let quoteData of data.data) {
        const listItem = document.createElement("li");
        listItem.innerHTML = quoteData.quoteText;
        document.querySelector(".list").appendChild(listItem);
      }
    });
}

document.querySelector(".btn").addEventListener("click", getQuote);
