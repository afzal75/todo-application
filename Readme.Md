Question 1: What are some benefits of using TypeScript over JavaScript in a project?

Answere: Precise defining through typing.
Types make code management easier.
Increased team performance.
TypeScript is popular and trusted by the biggest players in the industry.


Question 2: What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each?

Answere: The nullish coalescing operator may be used after optional chaining in order to build a default value when no value is found. Generally, accessing values from deeply nested objects in JavaScript can be error-prone because some values might not exist, so they'll evaluate as null or undefined.


Question 3: How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?.

Answere: Promises are a cleaner way to handle asynchronous code that allows for chaining . then() and . catch() methods, while Async/await provides a more procedural syntax that makes asynchronous code look similar to synchronous code, with better error handling capabilities.

Question 4: How can you use TypeScript's enums, and what are their advantages?.

Answere: TypeScript enums are a way to define a set of named constants. They allow you to create a collection of related values that can be assigned to variables or used as a type. Enums provide a convenient way to work with a fixed set of values in a type-safe manner.

Question 5: Explain the role of type guards in TypeScript and provide an example of a custom type guard.

Answere: By using type guards, TypeScript can detect and prevent runtime errors that may occur due to incorrect types. TypeScript provides several built-in type guards, such as the typeof operator, instanceof operator, and in operator, that allow for performing type checks at runtime.

Question 6: Can you give an example of how to use "readonly" properties in TypeScript?

Answere: 
Certainly! In TypeScript, the readonly modifier is used to make properties immutable, meaning they cannot be reassigned once they are set. This can be useful to ensure that certain properties remain constant and prevent accidental modifications.


Question 7: Explain what a union type is in TypeScript and provide an example of its usage.

Answere: The TypeScript union has the ability to combine one or two different types of data. It is the most powerful way to express a variable with multiple types. Use pipe symbol to combine two or more data types to achieve Union type.