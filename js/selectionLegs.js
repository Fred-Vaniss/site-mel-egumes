let btns = $$(".selSaison");
let html = $("html")[0];

log(btns);

let openedTabId = null;
let openedTabCl = null;

function showSeason (target){
    let id = `#${target}` ;
    let cl = `.${target}` ;

    if (id == openedTabId) {
        $(id).slideUp();
        $(openedTabCl+' .hoverCont')[0].classList.remove("selected");
        html.classList.remove("lock-html");
        openedTabId = null;
        openedTabCl = null;
        return;
    }

    $(id).slideDown();
    $(cl+' .hoverCont')[0].classList.add("selected");
    html.classList.add("lock-html");


    if (openedTabId != null){
        $(openedTabId).slideUp();
        $(openedTabCl+' .hoverCont')[0].classList.remove("selected");
        html.classList.remove("lock-html");
    }

    openedTabId = id;
    openedTabCl = cl;

}

log($(".pri")[0])