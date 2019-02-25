let btns = $$(".selSaison")

log(btns)

let openedTabId = null
let openedTabCl = null

function showSeason (target){
    let id = `#${target}` ;
    let cl = `.${target}` ;

    if (id == openedTabId) {
        $(id).slideUp();
        $(openedTabCl+' .hoverCont')[0].classList.remove("selected");
        openedTabId = null;
        openedTabCl = null;
        return;
    }

    $(id).slideDown();
    $(cl+' .hoverCont')[0].classList.add("selected");


    if (openedTabId != null){
        $(openedTabId).slideUp();
        $(openedTabCl+' .hoverCont')[0].classList.remove("selected");
    }

    openedTabId = id;
    openedTabCl = cl;

}

log($(".pri")[0])