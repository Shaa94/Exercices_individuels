

function askName() {
    let username = prompt ("Quel est ton nom ?", "Entre non nom ici.") ;
    let message = "Coucou " + username ;
        document.getElementById("hello").innerHTML = message ;
}
askName();

function askAge(){
    let annee = prompt ("Quelle est ta date de naissance ?", "yyyy-mm-dd") ;
    let realDate = new Date (annee) ;
let today = new Date() ;
let realAge =  Math.floor((today - realDate) / (1000*60*60*24*365))
let message2 = "Tu as  " + realAge + " ans."
document.getElementById("old").innerHTML = message2 ;
 }       
askAge();
