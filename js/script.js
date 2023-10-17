//generare 5 numeri casuali e racchiuderli in un array
const randomFiveNumbers = getArrayOfRandomIntBetween(1, 100, 5);

let alertNumbers = '';
// Visualizzare in pagina 5 numeri casuali
for (let i = 0; i < randomFiveNumbers.length; i++) {
  alertNumbers += randomFiveNumbers[i] + " ";
}

console.log(alertNumbers);
alert("memorizza i seguenti numeri: " + alertNumbers);

setTimeout(() => {
  
  let index = 0;
  let guessedNumbers = [];

  for (let i = 0; i < 5; i++) {
    const currentNumber = parseInt(prompt('Inserire un numero: '));
    // confronto ogni numero
    if (randomFiveNumbers.includes(currentNumber)) {
      index++;
      guessedNumbers.push(currentNumber);
    }
  }

  let guessedNumbersToString = '';
  for (let i = 0; i < guessedNumbers.length; i++) {
    guessedNumbersToString += guessedNumbers[i] + " ";
  }

  alert(`Hai indovinato ${index} numero/i, e sono: ${guessedNumbersToString}`);
  
}, 10000)




// funzioni per generare n numeri interi in array
function getArrayOfRandomIntBetween (min, max, arraylength) {
  const numbers = [];

  while(numbers.length < arraylength) {
    const n = getRandomIntInclusive(min, max);
    if (numbers.includes(n) === false) {
      numbers.push(n);
    } 
  }
  return numbers;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}