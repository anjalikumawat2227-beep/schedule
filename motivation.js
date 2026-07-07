const quoteText =document.getElementById("quoteText");

const quoteAuthor =document.getElementById("quoteAuthor");

export async function getQuote() {
    const response = await fetch(  "https://dummyjson.com/quotes");
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.quotes.length);
    const quote =data.quotes[randomIndex];
    quoteText.textContent =quote.quote;
    quoteAuthor.textContent =`— ${quote.author}`;
}