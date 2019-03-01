let menu = document.getElementById("menu")
let menuButton = document.getElementsByClassName("menuButton")[0]
let hamburger = document.getElementsByClassName("hamburger")[0]
let menuDisp = false

function showMenu(){
    if (menuDisp === false){
        menu.classList.add("showNav");
        hamburger.classList.add("is-active")
        document.addEventListener("click", outsideClose);
        menuDisp = true;
    } else {
        menu.classList.remove("showNav")
        hamburger.classList.remove("is-active")
        document.removeEventListener("click", outsideClose);
        menuDisp = false;
    }
}

function outsideClose(event){
    if (event.composedPath().includes(menu) === false && event.composedPath().includes(menuButton) === false){
        showMenu();
    }
}

let bttButton = document.getElementById("backToTop")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        bttButton.classList.add("btt-display");
      } else {
        bttButton.classList.remove("btt-display");
    }
}