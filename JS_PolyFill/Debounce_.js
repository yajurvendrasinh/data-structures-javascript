
// dom
<input onKeyUp="someExpensiveFunction()" type="text"/>
<input onKeyUp="debouncedFunction()" type="text"/>

// script
let count = 0
const someExpensiveFunction = () => {
  setTimeout(() => {
    console.log('expensive console log');
    count++;
  }, 250)
}

let delay = 500;
const debouncedFunction = debounce(someExpensiveFunction, 500);

function debounc(callBackFn, delay) {
  let timer;
  return function(...args) {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callBackFn().call(this, ...args) // call takes comma seperated vlaues, apply take list of values
    }, delay)
  }
}

//
