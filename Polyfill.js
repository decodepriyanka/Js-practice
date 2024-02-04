// PolyFill for reduce==============================================================================================================

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const nums1 = [1, 2, 3];
const multiply = nums1.myReduce((acc, curr, i, arr) => {
  return acc + curr;
});
console.log(multiply);

// Map Polyfill==============================================================================================================

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const nums2 = [1, 2, 3, 4];
const multiplyThree = nums2.myMap((num, i, arr) => {
  return num * 3;
});

// Polyfill for filter==============================================================================================================

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};
const number = [1, 2, 3, 4];
const moreThanTwo = number.myFilter((nums) => {
  return nums > 2;
});
console.log(moreThanTwo);

// custom hook useMemo==============================================================================================================

import { useRef, useEffect } from "react";

const areEqual = (prevDeps, nextDeps) => {
  if (prevDeps === null) return false;
  if (prevDeps.length !== nextDeps.length) return false;

  for (let i = 0; i < prevDeps.length; i++) {
    if (prevDeps[i] !== nextDeps[i]) {
      return false;
    }
  }

  return true;
};

const useCustomMemo = (cb, deps) => {
  // variable or state -> cached Value
  const memoizedRef = useRef(null);

  // Changes in deps
  if (!memoizedRef.current || !areEqual(memoizedRef.current.deps, deps)) {
    memoizedRef.current = {
      value: cb(),
      deps,
    };
  }

  // cleanup logic
  useEffect(() => {
    return () => {
      memoizedRef.current = null;
    };
  }, []);

  // return the memoised value (if any)
  return memoizedRef.current.value;
};

export default useCustomMemo;

// Promise Poly fill==============================================================================================================

function PromisePolyfill(executor) {
  let onResolve,
    onReject,
    isFullFilled = false,
    isRejected = false,
    isCalled = false,
    value;

  function resolve(val) {
    isFullFilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;
    if (isFullFilled && !isCalled) {
      called = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    if (isFullFilled && !isCalled) {
      called = true;
      onReject(value);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject();
  }
}

const examplePromise = new PromisePolyfill((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});
examplePromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//PolyFill for Promise.all==============================================================================================================

Promise.allPolyfill = (promises) => {
  return new Promise((resolve, reject) => {
    const result = [];
    if (!promises.length) {
      resolve(result);
      return;
    }
    let pending = promises.length;
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((res) => {
        result[index] = res;
        pending--;

        if (pending === 0) {
          resolve(result);
        }
      }, reject);
    });
  });
};

Promise.allPolyfill([
  importantAction("Priyanka"),
  likeTheVideo("Liked"),
  shareTheVideo("shared"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//Call polyfill==============================================================================================================

let car1 = {
  color: "Red",
  company: "Ferrari",
};
function purchaseCar(currency, price) {
  console.log(
    `I have puchased ${this.color} - ${this.company} car for ${currency}${price}`
  );
}
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this != "function") {
    throw new Error(this + "it is not callable");
  }
  context.fn = this; //insert fn to context :purchaseCar
  context.fn(...args);
};
purchaseCar.call(car1, "Rs", 500000);

//Apply polyfill==============================================================================================================

let car2 = {
  color: "Red",
  company: "Ferrari",
};
function purchaseCar(currency, price) {
  console.log(
    `I have puchased ${this.color} - ${this.company} car for ${currency}${price}`
  );
}
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this != "function") {
    throw new Error(this + "it is not callable");
  }
  if (!Array.isArray(args)) {
    throw new Error("create array");
  }
  context.fn = this; //insert fn to context :purchaseCar
  context.fn(...args);
};
purchaseCar.myApply(car2, ["Rs", 500000]);

// Bind polyfill==============================================================================================================

let car3 = {
  color: "Red",
  company: "Ferrari",
};
function purchaseCar(currency, price) {
  console.log(
    `I have puchased ${this.color} - ${this.company} car for ${currency}${price}`
  );
}
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this != "function") {
    throw new Error(this + "it is not callable");
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};
const newFunc = purchaseCar.bind(car3);
console.log(newFunc("Rs", 50000));
