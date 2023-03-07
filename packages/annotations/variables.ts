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
class Car {}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function
// JS syntax: const fn_name = (parameter) => {function body with implicit return}
// TS syntax: const fn_name: (fn_arguments: arguments_type) => fn_return_type = (parameter: parameter_type) => { fn_body }
// the part "(i: number) => void" is the fn annotation for arguments and return types
const logNumber: (i: number) => void = (i: number) => {
  console.log("i :", i);
};


