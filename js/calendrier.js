let openedTab = ""
let openedSeason = null
const saisons = ["printemps", "ete", "automne", "hiver"]
const styleSaisons = ["prin", "ete", "aut", "hiv"]

function showSeason(event, tab, nbr) {
    // Affichage des divs sur la page
    document.getElementById("pageSaisons").style.display = "none"
    document.getElementById("nav").style.display = "block"
    document.getElementById(tab).style.display = "grid"
    
    openedTab = tab

    openedSeason = nbr


    document.getElementById("suivant").setAttribute("src", "img/saisons/"+saisons[nbr+1]+".svg")
    document.getElementById("suivant").classList.add(styleSaisons[nbr+1])

    document.getElementById("precedent").setAttribute("src", "img/saisons/"+saisons[nbr-1]+".svg")
    document.getElementById("precedent").classList.add(styleSaisons[nbr-1])
}

function closeSeason(event){
    document.getElementById("pageSaisons").style.display = "grid"
    document.getElementById("nav").style.display = "none"
    document.getElementById(openedTab).style.display = "none"

    openedTab = ""
}

function nextSeason(event){

}

function previousSeason(event){

}