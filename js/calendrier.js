let openedTab
let openedSeason

let curNbr
let nextNbr
let prevNbr


const saisons =         ["printemps",   "ete",      "automne",  "hiver"]
const styleSaisons =    ["prin",        "ete",      "aut",      "hiv"]
const idSaisons =       ["saison1",     "saison2",  "saison3",  "saison4"]

function showSeason(event, tab, nbr) {
    // Affichage de l'onglet sélectionné et masquer la sélection des saisons
    document.getElementById("pageSaisons").style.display = "none"
    document.getElementById("nav").style.display = "block"
    document.getElementById(tab).style.display = "grid"
    
    // Stockage de la variable de l'onglet ouvert
    openedTab = tab

    //Attribution des chiffres
    curNbr = nbr
    openedSeason = nbr

    //Comparaison des chiffres
    compareNumber()

    //Ajout de l'image et du style pour le boutton suivant
    document.getElementById("suivant").setAttribute("src", "img/saisons/"+saisons[nextNbr]+".svg")
    document.getElementById("boutSuiv").classList.add(styleSaisons[nextNbr])

    //Ajout de l'image et du style pour le boutton précédent
    document.getElementById("precedent").setAttribute("src", "img/saisons/"+saisons[prevNbr]+".svg")
    document.getElementById("boutPrec").classList.add(styleSaisons[prevNbr])
}

function closeSeason(event){
    //Masquer la saison affiché et afficher la sélection des saisons
    document.getElementById("pageSaisons").style.display = "grid"
    document.getElementById("nav").style.display = "none"
    document.getElementById(openedTab).style.display = "none"

    //Retirer les variable de l'onglet attribué
    openedTab = ""
    curNbr = ""

    //Suppression du style pour les bouttons suivant et précédent
    document.getElementById("boutSuiv").classList.remove(styleSaisons[nextNbr])
    document.getElementById("boutPrec").classList.remove(styleSaisons[prevNbr])
}

function switchSeason(event,action){
    //L'argument "action" permettra de savoir si c'est le boutton suivant ou précédent,
    //ils servent de raccourcis pour nextNbr et prevNbr

    //Masquer l'onglet précédement ouvert et suppression des styles des bouttons suivant et précédent
    document.getElementById(openedTab).style.display = "none"
    document.getElementById("boutSuiv").classList.remove(styleSaisons[nextNbr])
    document.getElementById("boutPrec").classList.remove(styleSaisons[prevNbr])

    //Attribution de la variable pour l'onglet suivant ou précédent
    openedTab = idSaisons[action]

    //Affichage de l'onglet suivant ou précédent
    document.getElementById(openedTab).style.display = "grid"

    //Attribution du nouveau chiffre et comparer pour attribuer le nouveau chiffre suivant ou précédent
    curNbr = action
    compareNumber()

    //Ajout de l'image et du style pour le boutton suivant
    document.getElementById("suivant").setAttribute("src", "img/saisons/"+saisons[nextNbr]+".svg")
    document.getElementById("boutSuiv").classList.add(styleSaisons[nextNbr])

    //Ajout de l'image et du style pour le boutton précédent
    document.getElementById("precedent").setAttribute("src", "img/saisons/"+saisons[prevNbr]+".svg")
    document.getElementById("boutPrec").classList.add(styleSaisons[prevNbr])
}


function compareNumber(){
    //Cette fonction va comparer le chiffre si il est égal à 3 ou à 0. Cela évitera des erreur si il se situe a la première ou à la dernière saison

    //Dans le cas d'un passage à la saison suivante, si il est à la quatrième saison, il repassera à la première saison
    if (curNbr == 3) {
        nextNbr = 0
    } else {
        nextNbr = curNbr+1
    }

    //Dans le cas d'un passage à la saison précédente, si il est à la première saison, il passera à la quatrième saison
    if (curNbr == 0) {
        prevNbr = 3
    } else {
        prevNbr = curNbr-1
    }
}