// problem 1 
function processStringOrNumber(input: string | number): number {
    if (typeof input === 'string') {
      return input.length;
    } else if (typeof input === 'number') {
      return input * input;
    } else {
      throw new Error('Input must be a string or a number');
    }
  }
  
  const stringResult = processStringOrNumber('typescript');
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
      city: 'New York',
      street: 'Broadway',
    },
    phone: '123-456-7890',
  };
  
  const person2: Person = {
    phone: '987-654-3210',
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
      if (typeof item === 'number') {
        total += item as number;
      }
    }
    
    return total;
  }
  
  
  const mixedData = [1, 'two', 3, 'four', 5];
  const result = sumNumbersInMixedList(mixedData);
  console.log(result);
  