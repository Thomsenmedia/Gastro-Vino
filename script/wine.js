//JS kode vedr. pilen ned er kopiret fra chatGPT
// Lyt efter klikhændelse på pilen
document.getElementById("dropdown_arrow").addEventListener("click", function() {
    // Få højden af browserens visningsområde
    var windowHeight = window.innerHeight;
    // Få den aktuelle rulleposition
    var scrollPosition = window.scrollY;
    // Beregn den ønskede destination ved at tilføje højden af visningsområdet til den aktuelle rulleposition
    var nextPagePosition = scrollPosition + windowHeight;
    // Scroll ned til den næste side med en jævn overgang
    window.scrollTo({
        top: nextPagePosition,
        behavior: 'smooth'
    });
});




//karussel med vinsektioner
const nebbiolo = document.getElementById("nebbiolo"); //1. sektion
const chanti = document.getElementById("chanti"); //2. sektion


const arrowNext = document.getElementById("wine_next"); //næste knap
const arrowPrevious = document.getElementById("wine_previous"); //forrige knap


// Tæller der holder styr på hvad der nu vises:

// Næsteknappen og forrige knapperne med tilhørende funktion:
arrowNext.onclick = next;
arrowPrevious.onclick = previous;


function next(){
    nebbiolo.style.animationName = "slideNextOut"; // Synlige tekst smutter ud.
    const animationDelay = setTimeout(nextSlide, 100); // Vent til animationen er færdig, og kør så funktionen 'naesteSlide'.
    function nextSlide(){
        nebbiolo.style.animationName = "slideNextin"; // Animer det ind.
        chanti.style.display = "flex"
        nebbiolo.style.display = "none"
    }
}

function previous(){
    chanti.style.animationName = "slidePreviousOut"; // Synlige tekst smutter ud.
    const animationDelay = setTimeout(previousSlide, 100); // Vent til animationen er færdig, og kør så funktionen 'previousSlide'.
    function previousSlide(){
            nebbiolo.style.animationName = "slidePreviousin"; // Animer det ind.
            nebbiolo.style.display ="flex";
            chanti.style.display = "none"
    }
}