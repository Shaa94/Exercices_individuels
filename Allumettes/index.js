// Nb d'allumettes
const matchesNumberStart = 50;

// On affecte à la variable les 50 allumettes
let remainingMatches = matchesNumberStart;

//une fonction qui prend en paramètre le nombre d'allumettes à enlever du reste
function removeNumbers() {
    const askNumber = document.getElementById("reponse").value
    let matchesCount = remainingMatches - askNumber;
    console.log(matchesCount)

 // On stock la variable et on déduit le nombre d'allumettes joué
    remainingMatches = remainingMatches - askNumber

//limiter les allumettes à recupérer
    if (askNumber <= 0){
    alert ("Indique un chiffre entre 1 et 6")
    } else if (askNumber > 6){ 
    alert ("Indique un chiffre entre 1 et 6")  
    } else 
    remainingMatches 
    
    // Limiter les allumettes à 50
    if (matchesCount <= 0) {
        alert("Tu as gagné !")
    }
}

