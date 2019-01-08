let openedTab
let openedSeason
let nextNbr
let prevNbr
const saisons =         ["printemps",   "ete",      "automne",  "hiver"]
const styleSaisons =    ["prin",        "ete",      "aut",      "hiv"]
const idSaisons =       ["saison1",     "saison2",  "saison3",  "saison4"]

function showSeason(event, tab, nbr) {
    // Affichage des divs sur la page
    document.getElementById("pageSaisons").style.display = "none"
    document.getElementById("nav").style.display = "block"
    document.getElementById(tab).style.display = "grid"
    
    openedTab = tab

    openedSeason = nbr

    if (nbr == 3) {
        nextNbr = 0
    } else {
        nextNbr = nbr+1
    }

    if (nbr == 0) {
        prevNbr = 3
    } else {
        prevNbr = nbr-1
    }


    document.getElementById("suivant").setAttribute("src", "img/saisons/"+saisons[nextNbr]+".svg")
    document.getElementById("suivant").classList.add(styleSaisons[nextNbr])

    document.getElementById("precedent").setAttribute("src", "img/saisons/"+saisons[prevNbr]+".svg")
    document.getElementById("precedent").classList.add(styleSaisons[prevNbr])
}

function closeSeason(event){
    document.getElementById("pageSaisons").style.display = "grid"
    document.getElementById("nav").style.display = "none"
    document.getElementById(openedTab).style.display = "none"

    openedTab = ""

    document.getElementById("suivant").classList.remove(styleSaisons[nextNbr])
    document.getElementById("precedent").classList.remove(styleSaisons[prevNbr])
}

function nextSeason(event){

}

function previousSeason(event){

}