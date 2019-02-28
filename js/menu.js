let menu = document.getElementById("menu")
let menuButton = document.getElementsByClassName("menuButton")[0]
let menuDisp = false

function showMenu(){
    console.log("click")
    if (menuDisp === false){
        menu.classList.add("showNav");
        document.addEventListener("click", outsideClose);
        menuDisp = true;
    } else {
        menu.classList.remove("showNav")
        document.removeEventListener("click", outsideClose);
        menuDisp = false;
    }
}

function outsideClose(event){
    console.log("click")
    if (event.composedPath().includes(menu) === false && event.composedPath().includes(menuButton) === false){
        menu.classList.remove("showNav");
        document.removeEventListener("click", outsideClose);
        menuDisp = false;
    }
}