// Utility functions

export function randomValueFromArray(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

export function randomTotal() {
  let totals = [
    22.47,
   124.96,
    29.49,
    19.49,
    293.55,
    82.59,
    29.99,
  ];
  return randomValueFromArray(totals);
}

export function randomNumber(max) {
  return Math.floor(Math.random() * max) 
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}