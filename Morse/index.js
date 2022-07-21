function getLatinCharacterList() {
	let str = 'Hello World';
	let ch = str.split('');
	console.log(ch)
}
getLatinCharacterList()

const morseCode = {
	"A": ".-",
	"B": "-...",
	"C": "-.-.",
	"D": "-..",
	"E": ".",
	"F": "..-.",
	"G": "--.",
	"H": "....",
	"I": "..",
	"J": ".---",
	"K": "-.-",
	"L": ".-..",
	"M": "--",
	"N": "-.",
	"O": "---",
	"P": ".--.",
	"Q": "--.-",
	"R": ".-.",
	"S": "...",
	"T": "-",
	"U": "..-",
	'V':'...-',
	"W": ".--",
	"X": "-..-",
	"Y": "-.--",
	"Z": "--.."
 }
 const convertToMorse = (str) => {
	return str.toUpperCase().split("").map(A => {
	   return morseCode[A] ? morseCode[A] : A;
	}).join("")
 };
 
 console.log(convertToMorse('JE VOUS AIME'));


