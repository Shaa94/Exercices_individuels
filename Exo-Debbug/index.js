function findLongest(str) {
// this function takes a string as an argument. The desired outcome is to get the number of caracters of the longest word. 

var spl = str.split(" "); 
// we create a spl variable that creates a new array with every word in the sentence

var longest = 0
// what is the lowest number of caracters a word could possibly have?
// we create the variable that is going to store the number of caracters of the longest word.

for (var i = 0; i < spl.length; i++) {
// for loop allows us to iterate over every single element of the sentence
// for every word we want to
  // count the number of caracters in every word
  // and figure out if that number of caracters is bigger or smaller than all the previous words we've analyzed.
   if (spl[i].length > longest);
   longest = spl[i].length;
   // if the word on which we are iterating is longer and the longest word we've encountered

}
//return longest;

}

findLongest("La page blanche");


