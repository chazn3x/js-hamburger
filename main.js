// seleziono il menu
const openMenu = document.querySelector(".header-right > a");
// rendo il menu cliccabile
openMenu.addEventListener("click", function(){
    // seleziono il menu e gli aggiungo la classe active
    document.querySelector(".hamburger-menu").classList.add("active")
});
// seleziono la x nel menu
const closeMenu = document.querySelector(".close");
// rendo la x cliccabile
closeMenu.addEventListener("click", function(){
    // seleziono il menu e gli tolgo la classe active
    document.querySelector(".hamburger-menu").classList.remove("active")
});