console.clear()
let log = console.log
let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let chkbxField = $$("input[type='checkbox']");
let textArea = $("#msg");


for (let i = 0; i < chkbxField.length; i++) {
    chkbxField[i].addEventListener("click", messageCompletion);
}

function messageCompletion(event){
    let panList = ["un panier de base", "un panier découverte", "un panier gourmand", "un panier familial", "un panier personalisé contenant [SPECIFIER VOS CHOIX ICI]"]
    let checkList = [];
    let checkedItem = 0;
    for (const item of chkbxField) {
        chbx = item.checked;

        checkList.push(chbx);
        
        if (chbx == true) {
            checkedItem ++
        }
    }

    if (checkedItem > 0) {
        let checkedItemDone = 0
        let partiePhrase = ""
        
        for (let i = 0; i < panList.length; i++) {
            if (checkList[i] == true) {
                if (checkedItem == 1 || checkedItemDone == 0){
                    partiePhrase += panList[i]
                } else if (checkedItemDone == checkedItem-1){
                    partiePhrase += ` et ${panList[i]}`
                } else {
                    partiePhrase += `, ${panList[i]}`
                }
                checkedItemDone ++
            }
        }
        textArea.value = `Bonjour Mélanie,\n\nJe voudrais commander ${partiePhrase}.\n\nMerci`
    } else { 
        textArea.value = ""
    }
}

const arr = [['name', 'Bob'], ['age', 42], ['breakfast', 'eggs']];

const mp = new Map(arr);