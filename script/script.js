/* --- --- BURGERMENU --- --- */
const open_menu = document.getElementById("open_menu");
const close_menu = document.getElementById("close_menu");
const menu = document.getElementById("burgermenu");

//åbner burgermenuen når man trykker på ikonet
open_menu.onclick = visMenu;
function visMenu(){
   menu.style.display = "block";
   menu.style.animationName = "runIn";
   open_menu.style.animationName = "spinBm";
   open_menu.style.display = "none";
   close_menu.style.display = "inline";
}

//lukker burgermenuen når man trykker på ikonet
close_menu.onclick = lukMenu;
function lukMenu(){
   menu.style.animationName = "runOut";
   menu.style.display = "none";
   close_menu.style.animationName = "spinBm";
   close_menu.style.display = "none";
   open_menu.style.display = "inline";
}


