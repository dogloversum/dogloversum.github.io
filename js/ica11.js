const newQuote = document.querySelector("#js-new-quote");

newQuote.addEventListener("click", getQuote);

function getQuote() {
  console.log("Clicked JS New Quote Button");
  const apiRoute = "https://trivia.cyberwisp.com/getrandomchristmasquestion";
  fetch(apiRoute)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.question);
      displayQuote(data.question);
    })
    .catch((error) => {
      console.error("Error fetching quote:", error);
      alert("Error fetching quote. Please try again later.");
    });
}

function displayQuote(quoteText) {
  const quoteElement = document.querySelector("#js-quote-text");
  quoteElement.textContent = quoteText;
}

getQuote();