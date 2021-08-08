const quotes = [
    {
        quote: "When one has much to put into them, a day has a hundred pockets.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "The public will believe anything, so long as it is not founded on truth.",
        author: "Edith Sitwell",
    },
    {
        quote: "I have always thought the actions of men the best interpreters of their thoughts.",
        author: "John Locke",
    },
    {
        quote: "Ability is of little account without opportunity.",
        author: "Napoleon Bonaparte",
    },
    {
        quote: "Frugality without creativity is deprivation.",
        author: "Amy Dacyczyn",
    },
    {
        quote: "The highest result of education is tolerance.",
        author: "Helen Keller",
    },
    {
        quote: "If you would thoroughly know anything, teach it to others.",
        author: "Tryon Edwards",
    },
    {
        quote: "Words have a longer life than deeds.",
        author: "Pindar",
    },
    {
        quote: "The summer night is like a perfection of thought.",
        author: "Wallace Stevens",
    },
    {
        quote: "When the candles are out all women are fair.",
        author: "Plutarch",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;

//setInterval(randomQuotes,1000);
