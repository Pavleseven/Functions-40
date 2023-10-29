"use strict";

// Functions part 6
// EX:1Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
// E, I, O, and U.

const removeVowels = function (str) {
  let count = 0;

  //   for loop
  for (let i = 0; i < str.length; i++) {
    if (
      str[i].toLowerCase() === "a" ||
      str[i].toLowerCase() === "e" ||
      str[i].toLowerCase() === "i" ||
      str[i].toLowerCase() === "o" ||
      str[i].toLowerCase() === "u" ||
      str[i].toLowerCase() === "y"
    ) {
      count++;
    }
  }

  //   pre-defined
  //   str.split('').forEach(function (el) {
  //     if (
  //       el.toLowerCase() === 'a' ||
  //       el.toLowerCase() === 'e' ||
  //       el.toLowerCase() === 'i' ||
  //       el.toLowerCase() === 'o' ||
  //       el.toLowerCase() === 'u' ||
  //       el.toLowerCase() === 'y'
  //     ) {
  //       count++;
  //     }
  //   });
  return count;
};

console.log(removeVowels("My random string"));

// EX:2 Write a function that combines two arrays by alternatingly taking elements.

const combineArray = function (arr, arr1) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    // if (arr[i] === undefined || arr1[i] === undefined) ;
    newArray.push(arr[i]);
    newArray.push(arr1[i]);
  }

  return newArray.filter((el) => el !== undefined);
  //   in for loop start from the end and pop while newArray[i]===undefined
};

console.log(combineArray([1, 2, 3], ["a", "b"]));

// EX:3 Write a function that rotates a list by k elements.

const rotateArray = function (arr, n) {
  //   while (n < arr.length) {
  //     for (let i = 0; i < arr.length; i++) {
  //       newArray.push(arr[i]);
  //     }

  //     n = n + n;
  //   }

  for (let i = 0; i < n; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
};

console.log(rotateArray([1, 2, 3, 4, 5, 6], 2));

// EX: 4 write a function that returns array of its digits

const returnDigits = function (num) {
  let digitString = num + "";
  let digitArray = [];

  for (let i = 0; i < digitString.length; i++) {
    digitArray.push(+digitString[i]);
  }

  //   return digitString.split('').map(el => el - 0); - pre defined

  return digitArray;
};

console.log(returnDigits(1234));

// EX:5 Write a program that prints a multiplication table for numbers up to 12.

const multiplacation = function (n) {
  let newArray = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      newArray.push(i * j);
    }
    // console.log(`Multiplication for number ${i}`);
    newArray.push("/");
  }
  return newArray;
};

console.log(multiplacation(12));

// EX:6 (0°C × 9/5) + 32 = 32°F

const celsiusToF = function (n) {
  return (n * 9) / 5 + 32;
};

console.log(celsiusToF(0));

// EX:7 Write a function to find the maximum element in array of numbers. Filter out all non-number
// elements.

const findMax = function (arr) {
  let max = -Infinity;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!isFinite(arr[i])) continue;
    if (arr[i] > max) {
      max = arr[i];
      //   newArr.push(arr[i]);
    }
  }
  console.log(max, arr);
  return max;
};

console.log(findMax([1, 22, 35, "b", "b3", 133, "p"]));
// console.log(findMax(['b', 'b3', 'p']));

// EX:8 Write a function to find the maximum and minimum elements. Function returns an array.

// max/min in for loop

// pre defined

const findMaxAndMin = function (arr) {
  return [Math.max(...arr), Math.min(...arr)];
};

console.log(findMaxAndMin([23, 44, 222, 335, 1, 22]));

// let test = [1, 22, 35, 'b', 'b3', 133, 'p'];

// const [a, b, c] = [...test];
// console.log(a);

// EX:9 find the median

const findMedian = function (arr) {
  arr.sort((a, b) => a - b);
  if (arr.length % 2 !== 0) {
    return arr[parseInt(arr.length / 2)];
  }

  if (arr.length % 2 === 0) {
    return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
  }
};
console.log(findMedian([3, 13, 2, 34, 11, 26, 47]));
console.log(findMedian([3, 13, 2, 34, 11, 26, 47, 5]));
console.log(findMedian([3, 13, 2, 34, 11, 26, 47, 5, 10]));
console.log(findMedian([3, 13, 2, 34, 11, 26, 47, 5, 10, 5]));
console.log(findMedian([3, 13, 2, 34, 11, 26, 47, 5, 10, 5, 221]));

// EX:10

// EX:11 Write a function to find and return the first, middle and last element of an array if the array
// has odd number of elements. If number of elements is even, return just the first and the
// last. In other cases (empty array), input array should be returned.

const returnNumbers = function (arr) {
  if (arr.length % 2 !== 0) {
    return [arr[0], arr[arr.length - 1], arr[parseInt(arr.length / 2)]];
  }
  if (arr.length % 2 === 0 && arr.length > 0) {
    return [arr[0], arr[arr.length - 1]];
  }

  return arr;
};

console.log(returnNumbers([22, 11, 33, 44, 55]));
console.log(returnNumbers([22, 11, 33, 44]));
console.log(returnNumbers([]));

// EX:12 find average of n elements

const findAvg = function () {
  //   console.log(arguments);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum / arguments.length);
  return sum / arguments.length;
};

findAvg(123, 2121, 323, 12312, 32312);

// EX:13

const findNumbAvg = function (arr) {
  let sorted = arr.reduce((a, b) => a + b, 0);
  return sorted / arr.length;
};

console.log(findNumbAvg([11, 22, 33]));

// EX:14 BMI = MASS/(HEIGHT*HEIGHT)

const calcBMI = function (weight, height) {
  let BMI = weight / (height * height);
  console.log(weight / (height * height));
  if (BMI <= 15) return "Starvation";
  if (BMI <= 17.5 && BMI > 15) return "Anorexic";
  if (BMI < 18.5 && BMI > 17.5) return "Underweight";
  if (BMI < 25 && BMI > 18.5) return "Ideal";
  if (BMI >= 25 && BMI > 30) return "Overweight";
  if (BMI >= 30 && BMI > 40) return "Obese";
  if (BMI <= 40) return "Morbidly obese";
};

console.log(calcBMI(80, 1.85));

// EX:15 Write a function that takes a list of strings and prints them, one per line, in a rectangular
// frame.:

const fancyPrint = function (arr) {
  console.log("*******");
  for (let i = 0; i < arr.length; i++) {
    console.log("* " + arr[i] + " *");
  }
  return console.log("*******");
};

console.log(fancyPrint(["Hello", "World", "In", "a", "frame"]));

//  functions part 5

// exercise-functions-5
// -------------//
// -------------//
// -------------//
// EX:1
// Find the min and max element in the following array and switch their places. Print out the
// modified array in the console.
// Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

const replaceMinMax = function (arr) {
  let max = -Infinity;
  let min = Infinity;
  //   for loop as map
  arr.map(function (el, i) {
    if (el > max) {
      max = el;
    }
    if (el < min) {
      min = el;
    }
  });
  //   index of max and min
  let index = arr.indexOf(max);
  let index2 = arr.indexOf(min);
  //   replace
  let x = arr[index];
  arr[index] = arr[index2];
  arr[index2] = x;

  //   console.log(arr.indexOf(max));
  return { max, min, arr, x };
};

console.log(replaceMinMax([3, 500, 12, 149, 53, 414, 1, 19]));

// EX:2 Use the following array to make a new one by dividing its values by two and adding 5. If
// a given element&#39;s value is 0, change it to 20.
// Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

const divideAndAdd = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 20;
    } else {
      arr[i] = arr[i] / 2 + 5;
    }
  }
  return arr;
};

console.log(divideAndAdd([3, 500, -10, 149, 53, 414, 1, 19]));

// EX:3 Initialize two arrays. The first one should contain student names, the second one the
// number of points for each student. Display students&#39; names with their corresponding
// grade. Use the following ranges:
// 51-60 -&gt; 6,
// 61-70 -&gt; 7,
// 71-80 -&gt; 8,
// 81-90 -&gt; 9,
// 91-100 -&gt; 10.
// Input:
// [ &quot;Micahel&quot;, &quot;Anne&quot;, &quot;Frank&quot;, &quot;Joe&quot;, &quot;John&quot;, &quot;David&quot;, &quot;Mark&quot;, &quot;Bill&quot; ], [ 50, 39, 63, 72, 99,
// 51, 83, 59 ]
// Output:
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete
// the exam.

let namesArray = [
  "Michael",
  "Anne",
  "Frank",
  "Joe",
  "John",
  "David",
  "Mark",
  "Bill",
];
let gradesArray = [50, 39, 63, 72, 99, 51, 83, 59];

const grade = function (arr1, arr2) {
  let gradedArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] <= 50) {
      gradedArray.push(
        `${arr1[i]} acquired ${arr2[i]} and failed to proceed to the next part!`
      );
    }
    if (arr2[i] > 50 && arr2[i] < 60) {
      gradedArray.push(`${arr1[i]} acquired ${arr2[i]}`);
    }
    if (arr2[i] > 60 && arr2[i] < 70) {
      gradedArray.push(`${arr1[i]} acquired ${arr2[i]}`);
    }
    if (arr2[i] > 70 && arr2[i] < 80) {
      gradedArray.push(`${arr1[i]} acquired ${arr2[i]}`);
    }
    if (arr2[i] > 80 && arr2[i] < 90) {
      gradedArray.push(`${arr1[i]} acquired ${arr2[i]}`);
    }
    if (arr2[i] > 90 && arr2[i] < 100) {
      gradedArray.push(`${arr1[i]} acquired ${arr2[i]}`);
    }
  }

  return gradedArray;
};

console.log(grade(namesArray, gradesArray));

// EX:4 sort

const sortAndMultiply = function (arr) {
  return arr
    .sort(function (a, b) {
      return a - b;
    })
    .map((el) => el * 2);
};

console.log(sortAndMultiply([13, 11, 15, 5, 6, 1, 8, 12]));

// EX:5 sort in descending order

const sortDescend = function (arr) {
  return arr.sort((a, b) => b - a);
};

console.log(sortDescend([13, 11, 15, 5, 6, 1, 8, 12]));

// EX:6 Write a program that uses a loop to add all the even numbers from 1 to 1000 and
// subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
// be multiplied by 12.5 and displayed in console.
// Output: 2350000

const loop1000 = function (n) {
  let sum = 0;
  let sum2 = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum = sum + i;
    }
    if (i % 2 !== 0 && i <= n / 2) {
      sum2 = sum2 + i;
    }
  }
  return (sum - sum2) * 12.5;
};

console.log(loop1000(1000));

// EX:7

const takeString = function (arr) {
  let string = "";

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string" && arr[i].length >= 2) {
      string += arr[i][0] + arr[i][1];
    }
  }
  return string;
};

console.log(
  takeString([
    "M",
    "Anne",
    12,
    "Steve",
    "Joe",
    "John",
    "David",
    "Mark",
    true,
    "A",
  ])
);

// EX:8 Write a program that takes a string and prints its characters out in reversed order in the
// console.

// solution 1
const reverseString = function (string) {
  return string.split("").reverse().join("");
};

console.log(reverseString("Belgrade Institute of Technology"));

// solution 2 with for loop

const reverseString2 = function (string) {
  let stringed = "";
  for (let i = 0; i < string.length; i++) {
    stringed = stringed + string[string.length - 1 - i];
  }

  return stringed;
};
console.log(reverseString2("Belgrade Institute of Technology"));

// // EX:9 Write a program that displays all the combinations of two numbers between 1 and 7.
// Don&#39;t display two of the same numbers at the same time. Display the number of possible
// combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

const checkPairs = function (n, m) {
  let pairsArray = [];

  for (let i = n; i < m; i++) {
    for (let j = n; j < m; j++) {
      if (i === j) continue;
      pairsArray.push([i, j]);
    }
  }
  return pairsArray;
};

console.log(checkPairs(1, 7));

// EX:10

// function isPrime(n){
//     //                 n - 1
//     for(var i = 2; i < n / 2; i++){
//         if(n % i === 0){
//             return "Nije prost";
//         }
//     }
//     return "Prost je";
// }

// EX:11

const checkPalindrome = function (str) {
  let count = 0;
  let noSpaceString = str.split(" ").join("");
  for (let i = 0; i < noSpaceString.length; i++) {
    if (noSpaceString[i] === noSpaceString[noSpaceString.length - 1 - i]) {
      count++;
    }
  }
  //   console.log(noSpaceString.length);
  if (count === noSpaceString.length) {
    return true;
  }

  return false;
};

console.log(checkPalindrome("a nut for a jar of tuna"));

const findDivisor = function (n, m) {
  let number = 0;

  for (let i = 1; i <= m; i++) {
    if (n % i === 0 && m % i === 0) {
      number = i;
    }
  }
  return number;
};

console.log(findDivisor(192, 42));
console.log(findDivisor(81, 9));

// functions part 3

// Ex:1 Write a function to check whether the `input` is a string or not.
// &quot;My random string&quot; -&gt; true
// 12 -&gt; false

const checkString = function (s) {
  if (typeof s === "string") {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

checkString(2323);
checkString("Hello");

// Ex:2 Write a function to check whether a string is blank or not.

const checkBlank = function (s) {
  if (s === "" || typeof s != "string") {
    console.log(false);
    return false;
  } else {
    console.log(true);
    return true;
  }
};

checkBlank("");
checkBlank(5);
checkBlank("5");

// Ex:3 Write a function that concatenates a given string n times (default is 1).

const concatString = function (s, n = 1) {
  let newString = "";
  if (n === 1) {
    return s;
  }

  for (let i = 0; i < n; i++) {
    newString += s;
  }

  return newString;
};

console.log(concatString("Ha"));
console.log(concatString("Ha", 3));
console.log(concatString("Ha", 5));

// EX 4:Write a function to count the number of letter occurrences in a string.
// &quot;My random string&quot;, &quot;n&quot; -&gt; 2

const countLetters = function (s, letter) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() === letter) {
      count = count + 1;
    }
  }

  return count;
};

console.log(countLetters("My random string", "n"));
console.log(countLetters("Pavle", "p"));

// let string = "My random string";
// console.log(string[0].toLowerCase());

// EX:5 Write a function to find the position of the first occurrence of a character in a string. The
// result should be the position of character. If there are no occurrences of the character, the
// function should return -1.

const findPosition = function (string, char) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      return i;
    }
  }
  return -1;
};

console.log(findPosition("pavlep", "l"));

// EX:6 Write a function to find the position of the last occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.

const findPosition2 = function (string, char) {
  let indexArray = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      indexArray.push(i);
    }
  }
  if (indexArray.length > 0) {
    return indexArray[indexArray.length - 1];
  }
  return -1;
};

console.log(findPosition2("pavlep", "p"));
console.log(findPosition2("recognizer", "r"));

// EX:7 Write a function to convert string into an array. Space in a string should be represented as
// “null” in new array.

const convertString = function (string) {
  let stringToArr = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      stringToArr.push(null);
    } else {
      stringToArr.push(string[i]);
    }
  }
  return stringToArr;
};

console.log(convertString("My random string"));

//EX:8 Write a function that accepts a number as a parameter and checks if the number is prime or
// not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.

const checkPrime = function (number) {
  if (number === 2) {
    return "Prime";
  }
  if (number > 1 && number % 2 !== 0) {
    return "Prime";
  }
  return "Not Prime";
};

console.log(checkPrime(2));
console.log(checkPrime(28));

// EX:9 Write a function that replaces spaces in a string with provided separator. If separator is not
// provided, use “-” (dash) as the default separator.

const joinString = function (string, separator = "-") {
  return string.split(" ").join(separator);
};
console.log(joinString("My random string"));
console.log(joinString("My random string", "+"));

// EX:10 Write a function to get the first n characters and add “...” at the end of newly created string.

// EX:11 Write a function that converts an array of strings into an array of numbers. Filter out all
// non-numeric values.

const convertToArray = function (arr) {
  let sortedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined && arr[i] !== NaN && arr[i] !== null) {
      sortedArr.push(+arr[i]);
    }
  }
  return sortedArr;
};
console.log(convertToArray(["1", "21", undefined, "42", "1e+3", Infinity]));

// EX:12 Write a function to calculate how many years there are left until retirement based on the
// year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
// already retired, a proper message should be displayed.

const calcRetirement = function (year) {
  let currentYear = 2023;
  if (currentYear - year > 60) {
    return "She has already retired";
  } else if (currentYear - year > 65) {
    return "He has already retired";
  }

  return currentYear - year;
};

console.log(calcRetirement(1995));
console.log(calcRetirement(1960));

// EX:13 Write a function to humanize a number (formats a number to a human-readable string) with
// the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -&gt; 1st
// 11 -&gt; 11th

const humanizeNumber = function (number) {
  let stringNumber = number + "";
  if (
    stringNumber[stringNumber.length - 1] === "1" &&
    stringNumber[stringNumber.length - 2] !== "1"
  ) {
    return stringNumber + "st";
  }
  if (
    stringNumber[stringNumber.length - 1] === "2" &&
    stringNumber[stringNumber.length - 2] !== "1"
  ) {
    return stringNumber + "nd";
  }
  if (
    stringNumber[stringNumber.length - 1] === "3" &&
    stringNumber[stringNumber.length - 2] !== "1"
  ) {
    return stringNumber + "rd";
  }

  return stringNumber + "th";
};

console.log(humanizeNumber(1));
console.log(humanizeNumber(5));
console.log(humanizeNumber(52));
console.log(humanizeNumber(76));
console.log(humanizeNumber(11));
console.log(humanizeNumber(111));
console.log(humanizeNumber(121));
console.log(humanizeNumber(211));
console.log(humanizeNumber(53));
console.log(humanizeNumber(13));
console.log(humanizeNumber(12));

// -----------------------------//
// -----------------------------//
// -----------------------------//
const button = document.createElement("button");
const textarea = document.createElement("textarea");
document.body.append(textarea);
document.body.append(button);

button.innerHTML = "Submit";

button.addEventListener("click", function () {
  const value = textarea.value;
  //   let newValue = value.toLowerCase().trim().replaceAll("_", " ").split(" ");
  //   newValue[1] = newValue[1][0].toUpperCase() + newValue[1].slice(1);
  //   console.log(newValue.join(""));
  let sortedArray = [];
  value
    .toLowerCase()
    .split("\n")
    .forEach(function (el, i, a) {
      //   console.log(el.trim());
      sortedArray.push(el.trim().replaceAll("_", " ").split(" "));
      //   console.log(a);
    });
  console.log(sortedArray);

  for (const [item, [key, value]] of sortedArray.entries()) {
    const output = `${key}${value[0].toUpperCase() + value.slice(1)}`;
    console.log(`${output.padEnd(20)}${"✔".repeat(item + 1)}`);
  }
});
