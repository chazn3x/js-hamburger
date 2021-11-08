// seleziono il menu
const openMenu = document.querySelector(".header-right > a");
// rendo il menu cliccabile
openMenu.addEventListener("click", function(){
    // seleziono il menu e gli aggiungo la classe active
    document.querySelector(".hamburger-menu").classList.add("active")
});