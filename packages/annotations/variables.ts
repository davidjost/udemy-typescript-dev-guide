let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = false;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// classes
class Car { }
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function
// JS syntax: const fn_name = (parameter) => {function body with implicit return}
// TS syntax: const fn_name: (fn_arguments: arguments_type) => fn_return_type = (parameter: parameter_type) => { fn_body }
// the part "(i: number) => void" is the variable annotation for a function with arguments and return types
const logNumber: (i: number) => void = (i: number) => {
  console.log("i :", i);
};

// when to use annotations
// 1) When using a function that returns the 'any' type, like JSON.parse()
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) when we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) When we want a variable to have a type that can't be inferred
let numbers = [-10, -1, 12];
// watch out, bad code for the sake of explanation
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}