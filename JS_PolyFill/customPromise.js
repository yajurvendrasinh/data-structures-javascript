// Promise: https://youtu.be/DHvZLI7Db8E?si=BQryRVhf5j9sdbq4
// CustomPromise: https://youtu.be/1l4wHWQCCIc?si=wiCZuGy5e_0rj-Dw

const STATE = {
  PENDING: "pending",
  FULLFILLED: "fullfilled",
  REJECTED: "rejected",
};

class CustomPromise {
  // this class contains all the promise related code
  // promise are in either state - pending, fullfilled or rejected
  #state = STATE.PENDING; // default state of a promise
  thenCallback = [];
  catchCallback = [];

  // promises takes in a resolve and reject callback
  // this is the callback that takes in the function that is passed onto the promise
  constructor(customCallback) {
    try {
      customCallback(this.onSuccess, this.onFailure);
    } catch {
      customCallback(this.onFailure);
    }
  }

  executeCallbacks() {
    if (this.state === STATE.FULLFILLED) {
      this.thenCallback.forEach((callback) => {
        callback(this.value);
      });
      this.thenCallback = []; // remove all the older callback pushed
    } else {
      this.catchCallback.forEach((callback) => {
        callback(this.value); // some type of error
      });
      this.catchCallback = [];
    }
  }

  onSuccess(value) {
    if (this.state !== STATE.PENDING) return; // only the first 'resolve of the promise will do anything all the subsequent resolv dosent matter
    this.value = value;
    this.state = STATE.FULLFILLED;
    this.executeCallbacks();
    // then call back aare then called here in the success
  }

  onFailure(value) {
    if (this.state !== STATE.PENDING) return;
    this.value = value;
    this.state = STATE.REJECTED;
    this.executeCallbacks();
  }

  // we can chain number of then callbacks to a promise eg: promise.then().then().then()
  then(customCallback) {
    this.thenCallback.push(customCallback);
    this.executeCallbacks();
  }

  catch(customCallback) {
    this.catchCallback.push(customCallback);
    this.executeCallbacks();
  }

  finally(cb) {
    return this.then(
      (result) => {
        cb();
        return result;
      },
      (result) => {
        cb();
        throw result;
      }
    );
  }

  static resolve(value) {
    return new Promise((resolve) => {
      resolve(value);
    });
  }

  static reject(value) {
    return new Promise((resolve, reject) => {
      reject(value);
    });
  }

  static all(promises) {
    const results = [];
    let completedPromises = 0;
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        const promise = promises[i];
        promise
          .then((value) => {
            completedPromises++;
            results[i] = value;
            if (completedPromises === promises.length) {
              resolve(results);
            }
          })
          .catch(reject);
      }
    });
  }

  static allSettled(promises) {
    const results = [];
    let completedPromises = 0;
    return new MyPromise((resolve) => {
      for (let i = 0; i < promises.length; i++) {
        const promise = promises[i];
        promise
          .then((value) => {
            results[i] = { status: STATE.FULFILLED, value };
          })
          .catch((reason) => {
            results[i] = { status: STATE.REJECTED, reason };
          })
          .finally(() => {
            completedPromises++;
            if (completedPromises === promises.length) {
              resolve(results);
            }
          });
      }
    });
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(resolve).catch(reject);
      });
    });
  }

  static any(promises) {
    const errors = [];
    let rejectedPromises = 0;
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        const promise = promises[i];
        promise.then(resolve).catch((value) => {
          rejectedPromises++;
          errors[i] = value;
          if (rejectedPromises === promises.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
      }
    });
  }
}
