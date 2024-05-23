/* --- --- Illustration timer karusel --- --- */

const illustrations = [
    '/img/ill_wine.png',
    '/img/ill_region.png',
    '/img/ill_events.png',
    '/img/ill_history.png',
    '/img/ill_book.png',
];
const ill_fp = document.getElementById("ill_fp");
let currentIndex = 0;

function changeIll() {
    ill_fp.style.opacity = 0; // Sæt gennemsigtigheden til 0 for at fade ud
    setTimeout(() => {
        ill_fp.src = illustrations[currentIndex];
        ill_fp.style.opacity = 1; // Sæt gennemsigtigheden til 1 for at fade ind
        currentIndex = (currentIndex + 1) % illustrations.length; // Gå til næste illustration, og hvis vi er nået til slutningen, gå tilbage til starten
    }, 700); // Vent 700 ms, så fade-effekten kan fuldføres før skiftet til det næste billede
}

// Start karusellen
setInterval(changeIll, 2000); // Skift citater hvert 2. sekund (ændr gerne tidsintervallet efter behov)
