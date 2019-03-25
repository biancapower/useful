/*
    From: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/25984542
    Uses the Fisher–Yates shuffle (https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) 
    Good demo here: https://bost.ocks.org/mike/shuffle/
*/

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/*
// Used like so
var arr = [2, 11, 37, 42];
arr = shuffle(arr);
console.log(arr);
*/


var toShuffle = [];

let ans;
let defaultResponse = 'leave me here and press ok when done';

while (ans !== defaultResponse) {
  ans = prompt('Enter an element of the array', defaultResponse);
  if (ans !== defaultResponse) {
    toShuffle.push(ans);
  }
}
  
var shuffled = shuffle(toShuffle);
alert(shuffled);
