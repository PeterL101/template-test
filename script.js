let apiQuotes =[];

// Show new Quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes;
    console.log(quote)
}

// Get Quotes from API
async function getQuotes() {
    const apiUrl = 'https://dummyjson.com/quotes/1';
    try {
        const response =await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch Error Here

    }
}

// On Load
getQuotes();