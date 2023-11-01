//  Build custom setinterval function
// EXAMPLE

/*

function sayHello() {
    console.log('hello)
}

setInterval(sayHello, 2000);

Prints => hello , hello, hello .... ( at interval of every 2 secs)
 */

const timerMap = {};

function mySetInterval(callBackFunction, delay, period) {
  let counter = 0;

  const helperFunc = () => {
    const id = setTimeout(() => {
      callBackFunction();
      helperFunc();
    }, delay + period * counter);

    timerMap.id = id;
    counter++;
  };

  helperFunc();
  return timerMap;
}

function myClearInterval() {
  clearTimeout(timerMap.id);
}

// ClearInterval

const timers = [];

function anotherSetInterval(callback, delay) {
  const instance = window.setInterval(callback, delay);
  timers.push(instance);
  return instance;
}

function demoCallInterval() {
  timers.forEach((id) => clearTimeout(id));
}

const speak = () => {
  console.log('My Name');
};
const intro = () => {
  console.log('yajur');
};

anotherSetInterval(speak, 500);
anotherSetInterval(intro, 2000);

setTimeout(() => {
  demoCallInterval();
}, 2000);

// ClearAllTimeout

const originalSetTimeout = window.setTimeout;
const timerInstances = [];

window.setTimeout = function (callbackFunc, delay) {
  const currentInstance = originalSetTimeout(callbackFunc, delay);
  timerInstances.push(currentInstance);

  return currentInstance;
};

function demoClearAllTimeOut() {
  timerInstances.forEach((instance) => clearTimeout(instance));
}

const test1 = () => {
  console.log('test1');
};
const test2 = () => {
  console.log('test2');
};

setTimeout(test1, 500);
setTimeout(test2, 1000);

demoClearAllTimeOut();
