//generare 5 numeri casuali e racchiuderli in un array
const randomFiveNumbers = getArrayOfRandomIntBetween(1, 100, 5);

//converto l'array di numeri generati in una stringa
const alertNumbers = getStringArray(randomFiveNumbers);

alert("memorizza i seguenti numeri: " + alertNumbers);

setTimeout(() => {
  
  let guessedNumbers = [];

  for (let i = 0; i < randomFiveNumbers.length; i++) {
    const currentNumber = parseInt(prompt('Inserire un numero: '));
    // confronto ogni numero
    if (randomFiveNumbers.includes(currentNumber) && !guessedNumbers.includes(currentNumber) && !isNaN(currentNumber)) {
      guessedNumbers.push(currentNumber);
    }
  }
  console.log(guessedNumbers);
  const guessedNumbersToString = getStringArray(guessedNumbers);

  alert(`Hai indovinato ${guessedNumbers.length} numero/i, e sono: ${guessedNumbersToString}`);
  
}, 3000)

// funcione per convertire un array in una stringa con dello spazio
function getStringArray (arrayName) {
  let stringName = '';
  for (let i = 0; i < arrayName.length; i++) {
    stringName += arrayName[i] + " ";
  }
  return stringName;
}

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