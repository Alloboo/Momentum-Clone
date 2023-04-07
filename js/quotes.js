const quotes = [
    {
        quote: `They don't make bugs like Bunny anymore.`,
        author: `_Olav Mjelde.`
    },
    {
        quote: `Don't worry if it doesn't work right.
        If everything did, you'd be out of a job.`,
        author: `_Eric S. Raymond`
    },
    {
        quote: `Most of you are familiar with the virtues of a programmer.
        There are three, of course: laziness, impatience, and hubris.`,
        author: `_Larry Wall`,
    }
]

const quoteElem = document.querySelector("#quote span:first-child");
const authorElem = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quoteElem.innerText = todaysQuote.quote;
authorElem.innerText = todaysQuote.author;