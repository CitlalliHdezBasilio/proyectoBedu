function power(base, exponent) {
  return base ^ exponent;
}


function getLergerInt(number1, number2) {
  return Math.max(number1, number2);
}

function getLergerInt2(number1, number2){
  let mayor = (number1>number2) ? number1 : number2;
  return mayor;
}
const getLergerInt3 = (number1, number2) => (number1>number2) ? number1 : number2;


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


//sesion 3
const numbers =  [5, 3, 4, 7, 2, 1, 9, 7, 7];
let total = promedio = 0;
for(i=0;i<numbers.length; i++){
  total =total + numbers[i];
}
promedio = total / numbers.length;
console.log(promedio);
//tarea reto 3 de la sesion 2


//sesion 5





////sesion 6

const persona = function(name, birthyear, job){
  this.name = name;
  this.birthyear = birthyear;
  this.job = job;
  this.calcularEdad = function(){
    return 2023 - this.birthyear;
  }
  // o this.calcularEdad = () => 2023 - this.birthyear;
}

const john = new persona ("jonh", 1990, "developer");
console.log(john);
console.log(john.calcularEdad());

const developer = function(name, birthyear, job, skills){
  persona.call(this, name, birthyear, job);
  this.skills = skills;
  this.programar = () => { console.log("estoy programando"); }
}



