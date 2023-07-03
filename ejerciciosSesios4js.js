function power(base, exponent) {
  return base ^ exponent;
}


function getLergerInt(number1, number2) {
  return Math.max(number1, number2);
}


function fibonacciSequence(limit) {
  let n1 = 0, n2 = 1, nextTerm;

  for (let i = 1; i <= limit; i++) {
    console.log(n2);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}