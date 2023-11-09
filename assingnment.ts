// problem 1
function processStringOrNumber(input: string | number): number {
  if (typeof input === "string") {
    return input.length;
  } else if (typeof input === "number") {
    return input * input;
  } else {
    throw new Error("Input must be a string or a number");
  }
}

const stringResult = processStringOrNumber("typescript");
console.log(`String length: ${stringResult}`);

const numberResult = processStringOrNumber(5);
console.log(`Square of the number: ${numberResult}`);

// problem 2

interface Address {
  city: string;
  street: string;
}

interface Person {
  address?: Address;
  phone?: string;
}

function getAddressCity(person: Person): string | undefined {
  return person.address?.city;
}

const person1: Person = {
  address: {
    city: "New York",
    street: "Broadway",
  },
  phone: "123-456-7890",
};

const person2: Person = {
  phone: "987-654-3210",
};

console.log(getAddressCity(person1));
console.log(getAddressCity(person2));

// problem 3

class Cat {
  // Define the Cat class here
}

function isCat(object: any): object is Cat {
  return object instanceof Cat;
}

const catInstance = new Cat();
const notACat = { name: "Whiskers" };

if (isCat(catInstance)) {
  console.log("Yes, it's a cat.");
} else {
  console.log("No, it's not a cat.");
}

if (isCat(notACat)) {
  console.log("Yes, it's a cat.");
} else {
  console.log("No, it's not a cat.");
}

// problem 4

function sumNumbersInMixedList(mixedData: (string | number)[]): number {
  let total = 0;

  for (const item of mixedData) {
    if (typeof item === "number") {
      total += item as number;
    }
  }

  return total;
}

const mixedData = [1, "two", 3, "four", 5];
const result = sumNumbersInMixedList(mixedData);
console.log(result);

// problem 5

interface Car {
  make: string;
  model: string;
  year: number;
}

interface Driver {
  name: string;
  licenseNumber: string;
}

function combineCarAndDriver(
  car: Car,
  driver: Driver
): { car: Car; driver: Driver } {
  return {
    car,
    driver,
  };
}

const carInfo: Car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};

const driverInfo: Driver = {
  name: "Tamim Iqbal",
  licenseNumber: "ABC12345",
};

const combinedInfo = combineCarAndDriver(carInfo, driverInfo);
console.log(combinedInfo);

// problem 6

function calculateSumIfArray(param: unknown): void {
  if (Array.isArray(param) && param.every((item) => typeof item === "number")) {
    const sum = (param as number[]).reduce((acc, num) => acc + num, 0);
    console.log("Sum of numbers:", sum);
  } else {
    console.error("Error: Parameter is not an array of numbers");
  }
}

calculateSumIfArray([1, 2, 3, 4, 5]);
calculateSumIfArray([1, "two", 3, "four", 5]);
calculateSumIfArray("not an array");

// problem 7

function findFirstOccurrence<T>(arr: T[], value: T): number {
  const index = arr.indexOf(value);
  return index;
}

const numbersArray: number[] = [1, 2, 3, 4, 5];
const stringsArray: string[] = ["apple", "banana", "cherry", "date"];

const numberToFind = 3;
const stringToFind = "banana";

const indexInNumbers = findFirstOccurrence(numbersArray, numberToFind);
const indexInStrings = findFirstOccurrence(stringsArray, stringToFind);

console.log(`Index of ${numberToFind} in numbersArray: ${indexInNumbers}`);
console.log(`Index of '${stringToFind}' in stringsArray: ${indexInStrings}`);

// problem 8

interface Product {
  name: string;
  price: number;
  quantity: number;
}

function calculateTotalCost(cart: Product[]): number {
  let totalCost = 0;
  for (const product of cart) {
    totalCost += product.price * product.quantity;
  }
  return totalCost;
}

// Example usage:
const shoppingCart: Product[] = [
  { name: "Item 1", price: 10, quantity: 2 },
  { name: "Item 2", price: 15, quantity: 1 },
  { name: "Item 3", price: 5, quantity: 3 },
];

const total = calculateTotalCost(shoppingCart);
console.log(`Total cost of the items in the shopping cart: $${total}`);

