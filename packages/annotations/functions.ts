const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log("message: ", message);
};

// lesson 29
const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

// lesson 30
const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

// ES2016 syntax with destructuring
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log("date: ", date);
  console.log("weather: ", weather);
};

// ES2015 syntax
const logWeather2 = ({ date, weather }) => {
  console.log("date: ", date);
  console.log("weather: ", weather);
};

logWeather(todaysWeather);
