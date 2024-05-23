/* --- --- Citat timer --- --- */

const quotes = [
    "Smag, teamwork og latter - det er Gastro & Vino",
    "Fra råvarer til smagsoplevelser sammen",
    "Vi opdagede, at teamwork virkelig smager godt",
    "Vores team blev så stærkt over spisebordet",
]; //array med citater
const h2Quote = document.getElementById("h2_quote"); //Der det vises
let currentIndex = 0; //Indexet der bliver vist

function changeQuote() {
    h2Quote.style.opacity = 0; // Sæt gennemsigtigheden til 0 for at fade ud
    setTimeout(() => {
        h2Quote.innerHTML = quotes[currentIndex];
        h2Quote.style.opacity = 1; // Sæt gennemsigtigheden til 1 for at fade ind
        currentIndex = (currentIndex + 1) % quotes.length; // Gå til næste citat, og hvis vi er nået til slutningen, gå tilbage til starten
    }, 700); // Vent 700 ms, så fade-effekten kan fuldføres før skiftet til det næste citat
}

// Start karusellen
setInterval(changeQuote, 2700); // Skift citater hvert 2,7 sekund 

