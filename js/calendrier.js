let openedTab = ""

function showSeason(event, tab) {
    document.getElementById("pageSaisons").style.display = "none"
    document.getElementById("nav").style.display = "block"
    document.getElementById(tab).style.display = "grid"
    
    openedTab = tab
}

function closeSeason(event){
    document.getElementById("pageSaisons").style.display = "grid"
    document.getElementById("nav").style.display = "none"
    document.getElementById(openedTab).style.display = "none"

    openedTab = ""
}