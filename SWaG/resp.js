var burger = document.querySelector(".burger")
var navbar = document.querySelector(".navbar")
var navlist= document.querySelector(".navlist")
var rightNav= document.querySelector(".rightNav")

burger.addEventListener("click", toggleHamburger)

function toggleHamburger(){
    rightNav.classList.toggle("v-class-resp")
    navlist.classList.toggle("v-class-resp")
    navbar.classList.toggle("h-nav-resp")
}
