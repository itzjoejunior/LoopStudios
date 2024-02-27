let showMenu = document.querySelector(".menu-open");
let navmenu = document.querySelector(".hamburger-menu")
let navLinks = document.querySelector(".link-container")
let nav = document.querySelector(".nav")


let hideMenu = document.querySelector(".close-menu")


showMenu.addEventListener("click", () => {
    navmenu.classList.add("active")
    navLinks.classList.add("active")
    nav.classList.add("active")
})


hideMenu.addEventListener("click", ()=>{
    navmenu.classList.remove("active")
    navLinks.classList.remove("active")
    nav.classList.remove("active")
})