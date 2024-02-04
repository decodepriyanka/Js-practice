// Merge array======================================================================================================

// M1 - Spread or concat

let array1 = [3, 2, 3];
let array2 = [4, 5, 6];

let mergedArray = [...array1, ...array2];
//let mergedArray = array1.concat(array2);

console.log(mergedArray);

// M2

function mergeArrays(arr1, arr2) {
  let mergedArray = [];

  for (let i = 0; i < arr1.length; i++) {
    mergedArray.push(arr1[i]);
  }

  for (let j = 0; j < arr2.length; j++) {
    mergedArray.push(arr2[j]);
  }

  return mergedArray;
}

let array3 = [1, 2, 3];
let array4 = [4, 5, 6];

let result = mergeArrays(array1, array2);

console.log(result);

// M3 INPLACCE

function mergeArraysInPlace(arr1, arr2) {
  let m = arr1.length;
  let n = arr2.length;

  for (let i = 0; i < n; i++) {
    arr1[m + i] = arr2[i];
  }
}

let array5 = [1, 2, 3];
let array6 = [4, 5, 6];

mergeArraysInPlace(array1, array2);

console.log(array1);

// Missing number======================================================================================================

let arr1 = [1, 3, 4, 5, 6];
let n1 = arr1.length + 1;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr1[i];
}
let s2 = (n1 * (n1 + 1)) / 2;
let res = s2 - sum;
console.log(res);

// using XOR

let arr2 = [1, 3, 4, 5, 6];
let n2 = arr2.length;

let consecutiveXOR = 0;
for (let i = 1; i <= n2 + 1; i++) {
  consecutiveXOR ^= i;
}

let actualXOR = arr2.reduce((xor, num) => xor ^ num, 0);

let missingNumber = consecutiveXOR ^ actualXOR;
console.log(missingNumber);

// Left rotate array by d======================================================================================================
function reverse(arr, l, h) {
  while (l < h) {
    [arr[l], arr[h]] = [arr[h], arr[l]];
    l++;
    h--;
  }
}
function rotate(arr, d, n) {
  reverse(arr, 0, d - 1);
  reverse(arr, d, n - 1);
  reverse(arr, 0, n - 1);
  return arr;
}
let arr = [1, 2, 3, 4, 5];
let d = 2;
let res = rotate(arr, d, arr.length);
console.log(res);

// Right rotate array by d =====================================================================================================

function reverse(arr, l, h) {
  while (l < h) {
    [arr[l], arr[h]] = [arr[h], arr[l]];
    l++;
    h--;
  }
}
function rotate(arr, d, n) {
  d = d % n;
  reverse(arr, 0, n - 1);
  reverse(arr, 0, d - 1);
  reverse(arr, d, n - 1);
  return arr;
}
let arr = [1, 2, 3, 4, 5, 6, 7];
let d = 3;
let res = rotate(arr, d, arr.length);
console.log(res);

// Cylindrically rotate array by one=====================================================================================================

let arr = [1, 2, 3, 4, 5];
let temp = arr[arr.length - 1];
for (let i = arr.length - 1; i > 0; i--) {
  arr[i] = arr[i - 1];
}
arr[0] = temp;

console.log(arr);

// Anticlockwise rotate array by one=====================================================================================================

let arr = [1, 2, 3, 4, 5];
let temp = arr[0];
for (let i = 1; i < arr.length - 1; i++) {
  arr[i - 1] = arr[i];
}
arr[n - 1] = temp;

console.log(arr);

// Sort 0,1,2=====================================================================================================

function sortZero(arr, n) {
  let l = 0,
    m = 0,
    h = n - 1;
  while (m <= h) {
    if (arr[m] === 0) {
      [arr[m], arr[l]] = [arr[l], arr[m]];
      l++, m++;
    } else if (arr[m] === 1) {
      m++;
    } else {
      [arr[m], arr[h]] = [arr[h], arr[m]];
      h--;
    }
  }
  return arr;
}
let arr = [1, 0, 2, 1, 0, 0, 1];
let res = sortZero(arr, arr.length);
console.log(res);

// Min Max=====================================================================================================

let arr = [4, 2, 8, 1, 6];
let max = arr[0];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(max, min);

// reverse array=====================================================================================================

function reverseArr(arr) {
  let s = 0;
  let e = arr.length - 1;
  while (s < e) {
    let temp = arr[s];
    arr[s] = arr[e];
    arr[e] = temp;
    s++;
    e--;
  }
  return arr;
}
let arr = [1, 2, 3, 4, 4];
let res = reverseArr(arr);
console.log(res);

// Palindrome check=====================================================================================================
// Method 1 TC O(N) , SC O(N )

function isPalindrome(word) {
  let revWord = word.split("").reverse("").join("");
  if (word.toLowerCase() === revWord.toLowerCase()) {
    console.log("yes palindorme ");
  } else {
    console.log("oops no");
  }
}
let word = "hello";
isPalindrome(word);

// M2 - USING FOR LOOP
function is_palindrome(str) {
  let reverse_str = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse_str += str[i];
  }
  if (reverse_str === str) {
    console.log("passed string is palindrome ");
  } else {
    console.log("passed string is not palindrome");
  }
}
let test = "hellolleh";
is_palindrome(test);

// M3 - INPLACE
function isPalindrome(word) {
  let start = 0;
  let end = word.length - 1;

  while (start < end) {
    // Skip non-alphanumeric characters from the left
    while (start < end && !word[start].match(/[a-zA-Z0-9]/)) {
      start++;
    }

    // Skip non-alphanumeric characters from the right
    while (start < end && !word[end].match(/[a-zA-Z0-9]/)) {
      end--;
    }

    // Compare characters (case-insensitive)
    if (word[start].toLowerCase() !== word[end].toLowerCase()) {
      console.log("Oops, not a palindrome");
      return;
    }

    // Move pointers towards the center
    start++;
    end--;
  }

  console.log("Yes, it's a palindrome");
}

let word = "A man, a plan, a canal, Panama!";
isPalindrome(word);

// Reverse string=====================================================================================================

function reverseStr(str) {
  let revStr = str.split("").reverse("").join("");
  console.log(revStr);
}
reverseStr("Hello");

// Method 2 for loop

function reverseString(str) {
  let strRev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strRev += str[i];
  }
  console.log(strRev);
}

reverseString("JavaScript");

// Best method

function reverseStr(str) {
  let strArray = str.split("");
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    let temp = strArray[start];
    strArray[start] = strArray[end];
    strArray[end] = temp;
    start++;
    end--;
  }
  return strArray.join("");
}
let str = "Hello";
let resStr = reverseStr(str);
console.log(resStr);
