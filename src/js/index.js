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

  ///////revisar//////
  deepEqual({ firstName: 'John', lastName: 'Doe' } , { firstName: 'John', lastName: 'Doe' });

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
  
  function chunk(array, tamaño) {
    let areglo2 = [];

    for (let i = 0; i < array.length; i ++) {
      let arreglo = array.slice(i, i + tamaño);
      areglo2.push(arreglo);
    }
  }
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  chunk(data, 1);
  chunk(data, 3);

////sesion 5
//Reto 1: Extraer una lista de propiedades
function pluck(list, propertyName) {
  const values = [];

  for (let i = 0; i < list.length; i++) {
    values.push( list[i][propertyName] );
  }

  return values;
}
//Reto 2: Crear un número de teléfono
function createPhoneNumber(numbers) {
  let format = '(xxx) xxx-xxxx'
  for (let num of numbers) {
    format = format.replace('x', num)
  }
  return format
}
//Reto 3: Encontrar elementos faltantes
function findMissingNumbers(numbers) {
  const sortedArray = numbers.sort((a, b) => a - b)
  let missing = []
  for (let i = numbers[0]; i < numbers[sortedArray.length - 1]; i++) {
    if (sortedArray.indexOf(i) < 0) {
      missing.push(i);
    }
  }
  return missing
}


////sesion 6
//Reto 1: Vectores
const Vec = function(x, y) {
  this.x = x;
  this.y = y;
}

Vec.prototype.plus = function(other) {
  return new Vec(this.x + other.x, this.y + other.y);
}

Vec.prototype.minus = function(other) {
  return new Vec(this.x - other.x, this.y - other.y);
}

Vec.prototype.length = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
}
const vec2 = new Vec(2, 3);
console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log(vec1.length()); // 2.23606797749979

//Reto 2: Group
const Group = function() {
  this.members = [];
}

Group.prototype.add = function(value) {
  if (!this.has(value)) {
    this.members.push(value);
  }
}

Group.prototype.has = function(value) {
  return this.members.includes(value);
}

Group.from = function(collection) {
  const group = new Group();

  for(let i = 0; i < collection.length; i++) {
    group.add(collection[i]);
  }
  return group;
}

//Reto 3: Perímetro
const Triangle = function(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
}


///sesion 7
//ejemplo
 const car = {
  brand: 'Nissan',
  model: 'Sentra',
  year: 2020
}

function addColor(car) {
  car.color = 'Black'
  return car
}

console.log('Before calling addColor()', car)

const sameCar = addColor(car)

console.log('After calling addColor()', car)
console.log('After calling addColor()', sameCar)
console.log('Same car?', car === sameCar) // true

//reto 1
function flatten(arrays) {
  let nuevoArreglo = arrays.flat(2);
  return nuevoArreglo;
}

const arrays = [[1, 2, 3], [4, 5], [6]];
const array = flatten(arrays);
console.log(array); // [1, 2, 3, 4, 5, 6]


//reto 2
function compact(array) {
  let arreglo = [];
  for(elem of array){
    if(!!elem)  arreglo.push(elem);
  }
  return arreglo;
}

const array1 = [0, 1, false, 2, '', 3];
const compactedArray = compact(array1);

console.log(compactedArray); // [1, 2, 3]

//reto 3
function loop(start, test, update, body) {
  body(start);
  let newVal = update(start),
  pasa = test(newVal);
  if(pasa) loop(newVal, test, update, body);
}

const test = function(n) {
  return n > 0;
}

const update = function(n) {
  return n - 1;
}

loop(3, test, update, console.log);
// 3
// 2
// 1