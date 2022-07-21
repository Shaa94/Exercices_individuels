let response = prompt("Choose a color")
console.log(response);

function newGame() {
    let colors = ["blue", "red"];
    let result = colors;
    let i = 0
    for (let i = 0; i == result.length; i++)
        if (response === colors[i]) {
       alert("OK")
        }

}

//promptMessage();
newGame();