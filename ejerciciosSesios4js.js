//sesion 2
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



var numerosPrimos = [];
  for (j = 2; j <= 100; j++) {
    if (primo(j)) {
      numerosPrimos.push(j);
    }
  }
  console.log(numerosPrimos);

  function primo(numero) {
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
  }


//sesion 4 
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

  function deepEqual(a, b){
    //console.log(a, typeof(a), b, typeof(b));
    if(typeof(a) == 'object' && typeof(b) == 'object'){
      let a1 = Object.keys(a),
      b1 = Object.keys(b);
      //console.log(a1, a1.length);
      if(a1.length == b1.length){
        for(i=0; i < a1.length; i++){
          //console.log(a1[i], typeof(a1[i]), b1[i], typeof(b1[i]));
          deepEqual(a1[i], b1[i]);
        }
      }
    }else if(a === b){
      return true;
    }
    return false;
  }

  deepEqual({ firstName: 'John', lastName: 'Doe' } , { firstName: 'John', lastName: 'Doe' });