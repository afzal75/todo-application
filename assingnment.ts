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
  console.log(`String length: ${stringResult}`); // Output: String length: 5
  
  const numberResult = processStringOrNumber(5);
  console.log(`Square of the number: ${numberResult}`); // Output: Square of the number: 25
  