// Global Variables
const showResultBtn = document.querySelectorAll(".showResult"),
  addToArrayBtn = document.querySelectorAll(".addToArray"),
  inputs = document.querySelectorAll("input"),
  h2 = document.querySelectorAll(".proplemName h2"),
  // Arrays for Problems 2, 3, and 4
  arrays = [[], [], []];

// Problem 1: Calculate age in days
showResultBtn[0].addEventListener("click", () => {
  const age = inputs[0].value;
  if (age) {
    const ageInDays = Math.round(age * 365.25);
    h2[0].innerHTML = `result is ${ageInDays}`;
  }
});

// Function to add value to array and update h2 element. using in problem 1,2 and 3
function addToArrays(inputIndex, h2Index, arrayIndex, resultIndex) {
  const value = inputs[inputIndex].value.trim();
  if (value) {
    arrays[arrayIndex].push(+value);
    h2[h2Index].innerHTML = `Your Array : [${arrays[arrayIndex]}]`;
    inputs[inputIndex].value = "";
    h2[resultIndex].innerHTML = "";
  }
}

// Problem 2: Find smallest number in array
addToArrayBtn[0].addEventListener("click", () => addToArrays(1, 1, 0, 2));

showResultBtn[1].addEventListener("click", () => {
  if (arrays[0].length > 0) {
    const smallestNum = Math.min(...arrays[0]);
    h2[2].innerHTML = `smallest number : ${smallestNum}`;
  }
});

// Problem 3: Sort array in descending order
addToArrayBtn[1].addEventListener("click", () => {
  const value = inputs[2].value.trim();
  if (value && value > -1) {
    arrays[1].push(+value);
    h2[4].innerHTML = `Your Array : [${arrays[1]}]`;
    inputs[2].value = "";
  }
});

showResultBtn[2].addEventListener("click", () => {
  if (arrays[1].length > 0) {
    const sortedArray = arrays[1].sort((a, b) => b - a);
    h2[4].innerHTML = `Descending order : ${sortedArray}`;
  }
});

// Problem 4: Calculate average of array
addToArrayBtn[2].addEventListener("click", () => addToArrays(3, 5, 2, 6));

showResultBtn[3].addEventListener("click", () => {
  if (arrays[2].length > 0) {
    const average =
      arrays[2].reduce((sum, num) => sum + num) / arrays[2].length;
    h2[6].innerHTML = `Average : ${average.toFixed(2)}`;
  }
});

// Problem 5: Explain comparison of arrays and objects
showResultBtn[4].addEventListener("click", () => {
  h2[7].innerHTML = `The output will be false in both cases. This is because arrays and objects are reference types in JavaScript, so when compared using the equality operator, their references are compared, not their values. Since each array and object has a unique reference, the comparison returns false.`;
});

// Problem 6: Explain asynchronous code with setTimeout
showResultBtn[5].addEventListener("click", () => {
  h2[8].innerHTML = `The output of the code will be "A", "C", "B".
  When main() is called, "A" is immediately printed. Then, the setTimeout function is called with a delay of 0 milliseconds, but since it's asynchronous, it is added to the event queue. "C" is then printed. Once the call stack is empty, the event loop retrieves the setTimeout function from the event queue and executes it, printing "B".`;
});

// Problem 7: Explain variable reassignment
showResultBtn[6].addEventListener("click", () => {
  h2[9].innerHTML = `The output of this code will be 10.
  The variable num is first assigned the value of 8, but then it is reassigned the value of 10 on the next line. Therefore, when num is printed to the console, it contains the most recent value that was assigned to it, which is 10.`;
});

// Problem 8: Explain variable hoisting
showResultBtn[7].addEventListener("click", () => {
  h2[10].innerHTML = `The output of this code will be undefined and ReferenceError.
  This is because name is declared with the var keyword, so it is hoisted to the top of the function scope and initialized with the value undefined. Therefore, the first console.log(name) statement will output undefined.
  However, age is declared with the let keyword, so it is hoisted and cannot be accessed before itis declared. Therefore, the second console.log(age) statement will throw a ReferenceError.`;
});
