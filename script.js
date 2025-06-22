let quote = document.getElementById("quote");
let author = document.getElementById("author");
// 
const quotesURL = "https://api.quotable.io/random";
async function getQuote() {
    let resp = await fetch(quotesURL);
    let data = await resp.json();
    // 
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getQuote()

const xURL = "https://x.com/intent/post?text=";
function publishOnX() {
    window.open(xURL + quote.innerHTML, "width=600,height=400");
}