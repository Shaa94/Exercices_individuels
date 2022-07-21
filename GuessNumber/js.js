

function guessPrompt() {
    givenNumber = prompt("Entre un numéro");
    return givenNumber;
}
guessPrompt();

function didWin(givenNumber) {
    if (givenNumber == 22) {
        document.getElementById("bravo").innerHTML = " Bravo tu as trouvé le numéro !";
        return true
    }

    else if (givenNumber < 22) {
        document.getElementById("superieur").innerHTML = "Plus grand";
        return false
    }
    else {
        document.getElementById("inferieur").innerHTML = "Plus petit";
        return false
    }
}
didWin(givenNumber);



function gamePlay() {

}
gamePlay();