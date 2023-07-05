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

const time = 26;
let greeting;

if (time < 12) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good afternoon";
} else if (time >= 20 && time <=24) {
  greeting = "Good evening";
}else{
  greeting = "error, no existe la hora";
}

console.log(greeting) // Good afternoon



for(i=0; i<=100; i++){
  if(i%2==0){
    console.log(i);
  }
}


//tarea reto 3 de la sesion 2