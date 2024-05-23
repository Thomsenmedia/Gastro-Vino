//variabler
const confirmationText = document.getElementById("confirmation_text");
const btnMessage = document.getElementById("btn_message");

btnMessage.onclick = showMessage;
function showMessage(){
    confirmationText.innerHTML = "Tak for din besked! Vi svarer hurtigst muligt"
}