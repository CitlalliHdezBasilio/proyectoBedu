/* //ejemplo 1
///con callback
function fooc(callback){
  setTimeout( () => {
    callback("hola")}
    , 2000)
}
fooc((texto) => console.log(texto))

///con promesas
function foop(){            /////resolve es el resultado positivo, reject es en caso de fallar
  return new Promise( (resolve, reject) =>{   
    setTimeout( () => {
      //resolve("hola");                            ///todo bien
      reject( new error ("la promesa fallo"));    ///fallo
    }, 2000)
  })
}
foop()
.then(value => console.log(value))
.catch(error => console.log(error));

////este ejemplo es un poquiiiito parecido a recursividad, se ejecuta varias veces con el último resultado

function addOne(value) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value + 1), 500)
    })
}
  
addOne(1)                  
.then(result => {
    console.log(result) // 2
    return addOne(result)
})
.then(result => {
    console.log(result) // 3
    return Promise.reject('Oops!')
})
.catch(err => {
    console.log(err) // Oops!
    return addOne(1)
})
.then(result => {
    console.log(result) // 2
    return addOne(result)
})
.then(result => console.log(result)); // 3

//con async
async function fooAA(){
  return "holaaaaa";
  //return promise.reject("error...")
}

console.log(fooAA());

fooAA()   //puede usarse asi
.then(val => console.log(val))
.catch(err => console.log(err))

//aunque la forma correcta es asi. await solo puede usarse dentro de una funcion async
async funtion bar(){
  try{
    let saludo = await fooAA();
    console.log(saludo);
  }catch (err){
    console.log("Esto es el error", err);
  }
}


//ejemplo 1
function startProcess() {
    console.log('Start Phase 1. Wait one second...');
    setTimeout(function () {
      console.log('Phase 1 completed.');
      setTimeout(function () {
        console.log('Phase 2 completed.');
        setTimeout(function () {
            console.log('Phase 3 completed. Wait four seconds...');
            setTimeout(function () {
              console.log('Phase 4 completed.');
              // More asynchronous calls...
            }, 1000);
          }, 1000);
      }, 1000);
    }, 1000);
}
  
startProcess();


//ejemplo 2

function addOne(value) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value + 1), 500)
    })
}
  
addOne(1)
.then(result => {
    console.log(result) // 2
    return addOne(result)
})
.then(result => {
    console.log(result) // 3
    return Promise.reject('Oops!')
})
.catch(err => {
    console.log(err) // Oops!
    return addOne(1)
})
.then(result => {
    console.log(result) // 2
    return addOne(result)
})
.then(result => console.log(result)); // 3 */


//reto 1
/* function promiseAll(promises) {
    return new Promise((resolve, reject) => {
      let results = [];
      let pending = promises.length;
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(result => {
          results[i] = result;
          pending--;
          if (pending === 0) resolve(results);
        }).catch(reject);
      }
      if (promises.length === 0) resolve(results);
    })
  }
      
function soon(value) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), 1000)
    })
}
      
// Test cases
promiseAll([])
.then(results => {
    console.log('Expected result []: ', results)
})
      
promiseAll([soon(1), soon(2), soon(3)])
.then(results => {
    console.log('Expected result [1, 2, 3]: ', results)
})

promiseAll([soon(1), Promise.reject('X'), soon(3)])
.then(results => {
    console.log('We should not get here')
})
.catch(error => {
    console.log('Expected error X: ', error)
}) */


//reto 2

/* async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 'Hello World';
}
  
function log(value) {
    wait().then(result => console.log(result));
}

log();
*/

//reto 3
// Don't alter this function
/* const processAction = (i, callback) => {
    setTimeout(function() {
        callback("Processed Action " + i);
    }, Math.random()*1000);
}
  
const triggerActions = (count) => {
    const promises = [];
    const generatePromise = (i) => {
      return new Promise((resolve) => {
        processAction(i, resolve);
      });
    }
    for (let i = 1; i <= count; i += 1) {
      promises.push(generatePromise(i));
    }
    Promise.all(promises)
      .then((strings) =>
        strings.forEach((string) => console.log(string)));
}

triggerActions(10); */