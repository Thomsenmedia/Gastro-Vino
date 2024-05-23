/* --- --- Valid karussel --- --- */
// Variable:

const part1 = '<img src="/img/valid_1.png">' + '<img src="/img/valid_2.png">' + '<img src="/img/valid_3.png">' + '<img src="/img/valid_4.png">';
const part2 = '<img src="/img/valid_5.png">' + '<img src="/img/valid_6.png">' + '<img src="/img/valid_7.png">' + '<img src="/img/valid_8.svg">';
const part3 = '<img src="/img/valid_9.jpg">' + '<img src="/img/valid_10.png">' + '<img src="/img/valid_11.png">' + '<img src="/img/valid_12.png">';
const part4 = '<img src="/img/valid_13.jpg">' + '<img src="/img/valid_14.png">' + '<img src="/img/valid_15.png">' + '<img src="/img/valid_16.png">';


const section = [part1, part2, part3, part4]; //array

const valid = document.getElementById("valid");
const arrowNext = document.getElementById("next"); //næste knap
const arrowPrevious = document.getElementById("previous"); //forrige knap


// Tæller der holder styr på hvad der nu vises:
let showNow = 0;

// Første del indsættes:
valid.innerHTML = section[showNow];

// Næsteknappen og forrige knapperne med tilhørende funktion:
arrowNext.onclick = next;
arrowPrevious.onclick = previous;


function next(){
    valid.style.animationName = "slideNextOut"; // Synlige logoer smutter ud.
    const animationDelay = setTimeout(nextSlide, 100); // Vent til animationen er færdig, og kør så funktionen 'naesteSlide'.
    function nextSlide(){
        if(showNow < section.length-1){ // Var: Array.length
            showNow++; // Tæl showNow 1 op.
            valid.innerHTML = section[showNow]; // Skriv historien med innerHTML.
            valid.style.animationName = "slideNextin"; // Animer det ind.
        }else if(showNow == section.length -1){
            showNow = 0;
            valid.innerHTML = section[showNow];
            valid.style.animationName = "slideNextin";
        }
    }
}

function previous(){
    valid.style.animationName = "slidePreviousOut"; // Synlige logoer smutter ud.
    const animationDelay = setTimeout(previousSlide, 100); // Vent til animationen er færdig, og kør så funktionen 'previousSlide'.
    function previousSlide(){
        if(showNow > 0){ // Brug ">" for at tjekke, om showNow er større end 0
            showNow--; // Tæl showNow 1 ned.
            valid.innerHTML = section[showNow]; // Skriv historien med innerHTML.
            valid.style.animationName = "slidePreviousin"; // Animer det ind.
        }else{
            showNow = section.length - 1; // Hvis showNow er 0, så sæt det til det sidste element i arrayet
            valid.innerHTML = section[showNow];
            valid.style.animationName = "slidePreviousin";
        }
    }
}


/* --- --- Illustration timer karusel --- --- */

const illustrations = [
    '/img/ill_wine.png',
    '/img/ill_region.png',
    '/img/ill_events.png',
    '/img/ill_history.png',
    '/img/ill_book.png',
    '/img/ill_tc.png',
]; //array med illustrationerne
const illFp = document.getElementById("ill_fp"); //Der det vises
let currentIndex = 0; //Indexet der bliver vist

function changeIll() {
    illFp.style.opacity = 0; // Sæt gennemsigtigheden til 0 for at fade ud
    setTimeout(() => {
        illFp.src = illustrations[currentIndex];
        illFp.style.opacity = 1; // Sæt gennemsigtigheden til 1 for at fade ind
        currentIndex = (currentIndex + 1) % illustrations.length; // Gå til næste illustration, og hvis vi er nået til slutningen, gå tilbage til starten
    }, 700); // Vent 700 ms, så fade-effekten kan fuldføres før skiftet til det næste billede
}

// Start karusellen
setInterval(changeIll, 2000); // Skift citater hvert 2. sekund (ændr gerne tidsintervallet efter behov)

