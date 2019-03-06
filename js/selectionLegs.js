let btns = $$(".selSaison");
let btnCnt = $$(".hoverCont")
let html = $("html")[0];

let openedTabId = null;
let openedTabCl = null;

function showSeason (target){
    let id = `#${target}` ;
    let cl = `.${target}` ;

    if (id == openedTabId) {
        $(id).slideUp();
        $(openedTabCl+' .hoverCont')[0].classList.remove("selected");
        if (mobile == true){
            $(openedTabCl+' .hoverCont')[0].classList.add("mobileMode");
        }
        html.classList.remove("lock-html");
        openedTabId = null;
        openedTabCl = null;
        return;
    }

    $(id).slideDown();
    $(cl+' .hoverCont')[0].classList.add("selected");
    if (mobile == true){
        $(cl+' .hoverCont')[0].classList.remove("mobileMode");
    }
    html.classList.add("lock-html");


    if (openedTabId != null){
        $(openedTabId).slideUp();
        $(openedTabCl+' .hoverCont')[0].classList.remove("selected");
        if (mobile == true){
            $(openedTabCl+' .hoverCont')[0].classList.add("mobileMode");
        }

        html.classList.remove("lock-html");
    }

    openedTabId = id;
    openedTabCl = cl;
}

let mobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    mobile = true;
    for (let i = 0; i < btns.length; i++) {
        btnCnt[i].classList.add("mobileMode")
    }
}