# JavaScript Interview Questions - Complete Collection

## Table of Contents
1. [Hoisting Questions](#hoisting-questions)
2. [Functions Questions](#functions-questions)
3. [JSON Questions](#json-questions)
4. [Loops Questions](#loops-questions)
5. [Rest & Spread Questions](#rest--spread-questions)
6. [Set & Map Questions](#set--map-questions)
7. [Objects Questions](#objects-questions)
8. [Constructor Functions Questions](#constructor-functions-questions)
9. [Classes Questions](#classes-questions)
10. [Inheritance Questions](#inheritance-questions)
11. [Private Properties Questions](#private-properties-questions)
12. [Destructuring Questions](#destructuring-questions)
13. [Web Storage Questions](#web-storage-questions)
14. [Arrow Functions Questions](#arrow-functions-questions)
15. [Method Chaining Questions](#method-chaining-questions)
16. [Promises Questions](#promises-questions)
17. [Custom Promises Questions](#custom-promises-questions)
18. [Fetch API Questions](#fetch-api-questions)
19. [Mixed/Advanced Questions](#mixedadvanced-questions)

---

## Hoisting Questions

### Q1: What will be the output of the following code?
```javascript
console.log(x);
var x = 5;
console.log(x);
```
**Answer**: `undefined` and `5`. The `var` declaration is hoisted but not the initialization.

### Q2: What's the difference between `var` and `let` hoisting?
**Answer**: 
- `var` is hoisted to the top of function scope and initialized with `undefined`
- `let` is hoisted to the top of block scope but not initialized, creating a "temporal dead zone"

### Q3: What will this code output?
```javascript
function test() {
  console.log(a);
  console.log(b);
  var a = 1;
  let b = 2;
}
test();
```
**Answer**: `undefined` and `ReferenceError: Cannot access 'b' before initialization`

### Q4: Are function declarations and function expressions hoisted the same way?
**Answer**: No. Function declarations are fully hoisted (can be called before declaration), while function expressions are hoisted like variables (only the declaration, not the assignment).

### Q5: What happens with hoisting in arrow functions?
**Answer**: Arrow functions are not hoisted. They're treated like variable assignments.

---

## Functions Questions

### Q6: What are the different ways to create functions in JavaScript?
**Answer**: 
1. Function Declaration
2. Function Expression
3. Arrow Functions
4. Anonymous Functions
5. IIFE (Immediately Invoked Function Expression)
6. Generator Functions
7. Constructor Functions

### Q7: What is IIFE and when would you use it?
**Answer**: Immediately Invoked Function Expression. Used to create private scope and avoid global namespace pollution.

### Q8: Explain generator functions with an example.
**Answer**: Functions that can pause and resume execution using `yield`.
```javascript
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}
```

### Q9: What's the difference between parameters and arguments?
**Answer**: Parameters are variables in function definition, arguments are actual values passed when calling the function.

### Q10: Can you call a function before declaring it? When?
**Answer**: Yes, with function declarations due to hoisting. No, with function expressions or arrow functions.

---

## JSON Questions

### Q11: What is JSON and how is it different from JavaScript objects?
**Answer**: JSON (JavaScript Object Notation) is a text-based data format. Unlike JS objects, JSON requires double quotes for strings and doesn't support functions, undefined, or comments.

### Q12: What are the main JSON methods?
**Answer**: `JSON.stringify()` - converts object to JSON string, `JSON.parse()` - converts JSON string to object.

### Q13: What happens if you try to stringify a function?
**Answer**: Functions are ignored in JSON.stringify() or return undefined.

### Q14: How do you handle circular references in JSON.stringify()?
**Answer**: Use a replacer function or use libraries that handle circular references.

### Q15: What's the difference between JSON and XML?
**Answer**: JSON is lighter, easier to parse, more readable. XML is more verbose but supports attributes and namespaces.

---

## Loops Questions

### Q16: What's the difference between `for...in` and `for...of`?
**Answer**: 
- `for...in` iterates over enumerable properties (keys) of objects
- `for...of` iterates over iterable values (values) of arrays, strings, etc.

### Q17: Can you use `break` and `continue` in `forEach`?
**Answer**: No. Use `return` for continue-like behavior. For break-like behavior, use traditional loops.

### Q18: When would you use `map` vs `forEach`?
**Answer**: 
- `map` when you need to transform elements and return a new array
- `forEach` when you need to perform side effects without returning anything

### Q19: What will this code output?
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```
**Answer**: `3 3 3` because `var` has function scope and the loop completes before setTimeout callbacks execute.

### Q20: How would you fix the above code to print `0 1 2`?
**Answer**: Use `let` instead of `var`, or use IIFE, or use `bind`.

---

## Rest & Spread Questions

### Q21: What's the difference between rest and spread operators?
**Answer**: 
- Rest (`...`) collects multiple elements into an array
- Spread (`...`) expands an array into individual elements

### Q22: Can you use rest parameters with regular parameters?
**Answer**: Yes, but rest parameters must be the last parameter.

### Q23: What will this code output?
```javascript
function test(a, ...b) {
  console.log(a, b);
}
test(1, 2, 3, 4);
```
**Answer**: `1 [2, 3, 4]`

### Q24: How do you merge two objects using spread operator?
**Answer**: `const merged = {...obj1, ...obj2};`

### Q25: What happens if you spread a string?
**Answer**: It becomes an array of individual characters.

---

## Set & Map Questions

### Q26: What's the difference between Set and Array?
**Answer**: Set stores unique values only, Array can have duplicates. Set has no indices, Array has numerical indices.

### Q27: What's the difference between Map and Object?
**Answer**: 
- Map keys can be any type, Object keys are strings/symbols
- Map maintains insertion order, Object doesn't guarantee order
- Map has size property, Object requires Object.keys().length

### Q28: How do you check if a value exists in a Set?
**Answer**: Using the `has()` method: `mySet.has(value)`

### Q29: Can you iterate over a Map?
**Answer**: Yes, using `for...of`, `forEach()`, or methods like `keys()`, `values()`, `entries()`.

### Q30: What's the performance difference between Map and Object for frequent additions/deletions?
**Answer**: Map is generally better optimized for frequent additions and deletions.

---

## Objects Questions

### Q31: What are the different ways to create objects in JavaScript?
**Answer**: Object literal, `new Object()`, `Object.assign()`, `Object.create()`, Constructor functions, Classes.

### Q32: What's the difference between `Object.assign()` and spread operator for copying objects?
**Answer**: Both create shallow copies, but spread operator is more concise and readable.

### Q33: What is the prototype chain?
**Answer**: The mechanism by which objects inherit properties and methods from other objects through the `__proto__` property.

### Q34: How do you create an object without a prototype?
**Answer**: Using `Object.create(null)`

### Q35: What's the difference between `obj.property` and `obj['property']`?
**Answer**: Dot notation requires valid identifier names, bracket notation can use any string and variables.

---

## Constructor Functions Questions

### Q36: What happens when you forget the `new` keyword with a constructor function?
**Answer**: The function executes normally, `this` refers to global object, no new object is created.

### Q37: What is the `prototype` property in constructor functions?
**Answer**: An object that becomes the prototype of all instances created by that constructor function.

### Q38: Why is it better to add methods to the prototype rather than inside the constructor?
**Answer**: Memory efficiency - methods on prototype are shared among all instances rather than created for each instance.

### Q39: What will this code output?
```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.getName = function() {
  return this.name;
}
var p = Person("John");
console.log(p);
```
**Answer**: `undefined` because `new` keyword is missing.

### Q40: How can you check if a function was called with `new`?
**Answer**: Using `new.target` or checking if `this instanceof ConstructorFunction`.

---

## Classes Questions

### Q41: Are JavaScript classes real classes?
**Answer**: No, they're syntactic sugar over prototype-based inheritance.

### Q42: What's the difference between class declaration and class expression?
**Answer**: Similar to functions - declarations are hoisted, expressions are not.

### Q43: Can you call a class without `new`?
**Answer**: No, it will throw a TypeError.

### Q44: What are static methods in classes?
**Answer**: Methods that belong to the class itself, not instances. Called on the class, not instances.

### Q45: Can constructor return a different object?
**Answer**: Yes, if constructor explicitly returns an object, that object is returned instead of the new instance.

---

## Inheritance Questions

### Q46: How do you implement inheritance in JavaScript?
**Answer**: Through prototype chain, `Object.create()`, or ES6 `extends` keyword.

### Q47: What is prototypal inheritance?
**Answer**: Objects inherit directly from other objects through the prototype chain.

### Q48: How do you extend built-in objects like Array?
**Answer**: By adding methods to their prototype: `Array.prototype.customMethod = function(){...}`

### Q49: What's the difference between `__proto__` and `prototype`?
**Answer**: 
- `__proto__` is the actual object used in lookup chain
- `prototype` is the property on constructor functions

### Q50: Is it good practice to modify built-in prototypes?
**Answer**: Generally no, it can cause conflicts and unexpected behavior in libraries/frameworks.

---

## Private Properties Questions

### Q51: How do you create private properties in JavaScript classes?
**Answer**: Using `#` prefix for private fields (ES2022) or conventions like `_` prefix.

### Q52: What happens if you try to access private fields from outside the class?
**Answer**: SyntaxError is thrown.

### Q53: Can private methods be inherited?
**Answer**: No, private fields and methods are not inherited.

### Q54: What are static fields?
**Answer**: Fields that belong to the class itself, shared among all instances.

### Q55: How were private properties implemented before ES2022?
**Answer**: Using closures, WeakMaps, or naming conventions like underscore prefix.

---

## Destructuring Questions

### Q56: What is destructuring assignment?
**Answer**: A way to extract values from arrays or properties from objects into distinct variables.

### Q57: Can you provide default values in destructuring?
**Answer**: Yes, using `=`: `const {name = 'Default'} = obj;`

### Q58: How do you rename variables while destructuring?
**Answer**: Using colon: `const {name: fullName} = obj;`

### Q59: What will this code output?
```javascript
const [a, b] = [1, 2, 3, 4, 5];
console.log(a, b);
```
**Answer**: `1 2`

### Q60: How do you swap variables using destructuring?
**Answer**: `[a, b] = [b, a];`

---

## Web Storage Questions

### Q61: What's the difference between localStorage and sessionStorage?
**Answer**: localStorage persists until explicitly cleared, sessionStorage clears when tab closes.

### Q62: What's the storage limit for localStorage?
**Answer**: Usually 5-10MB per origin, varies by browser.

### Q63: How do you store objects in localStorage?
**Answer**: Convert to string using `JSON.stringify()` before storing, parse when retrieving.

### Q64: What happens if localStorage quota is exceeded?
**Answer**: Browser throws `QuotaExceededError`.

### Q65: Can you use localStorage in private/incognito mode?
**Answer**: Behavior varies by browser - some browsers provide limited storage that's cleared on session end.

---

## Arrow Functions Questions

### Q66: What's the main difference between arrow functions and regular functions?
**Answer**: Arrow functions don't have their own `this`, `arguments`, `super`, or `new.target`.

### Q67: Can arrow functions be used as constructors?
**Answer**: No, they cannot be called with `new` keyword.

### Q68: What will this code output?
```javascript
const obj = {
  name: 'John',
  greet: () => {
    console.log(`Hello, ${this.name}`);
  }
};
obj.greet();
```
**Answer**: `Hello, undefined` because arrow functions don't bind `this`.

### Q69: When should you NOT use arrow functions?
**Answer**: As object methods, constructors, when you need `arguments` object, or when you need dynamic `this`.

### Q70: Do arrow functions have a prototype property?
**Answer**: No, they don't have a prototype property.

---

## Method Chaining Questions

### Q71: What is method chaining?
**Answer**: A pattern where methods return the object they belong to, allowing multiple method calls to be chained together.

### Q72: How do you implement method chaining?
**Answer**: By returning `this` from methods or returning a new instance with same interface.

### Q73: What's the difference between mutating and non-mutating method chaining?
**Answer**: 
- Mutating: modifies original object (`return this`)
- Non-mutating: creates new objects (`return new Instance()`)

### Q74: Give an example of built-in method chaining in JavaScript.
**Answer**: Array methods: `arr.filter().map().sort()`

### Q75: What are the pros and cons of method chaining?
**Answer**: 
Pros: Readable, fluent API
Cons: Harder debugging, all methods must return chainable object

---

## Promises Questions

### Q76: What are the three states of a Promise?
**Answer**: Pending, Fulfilled (resolved), Rejected.

### Q77: What's the difference between `Promise.all()` and `Promise.race()`?
**Answer**: 
- `Promise.all()` waits for all promises to resolve
- `Promise.race()` resolves with the first promise that settles

### Q78: How do you handle errors in Promise chains?
**Answer**: Using `.catch()` at the end of the chain or within individual `.then()` blocks.

### Q79: What will this code output?
```javascript
Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => { throw new Error('Error!'); })
  .then((x) => x + 1)
  .catch((err) => console.log('Caught:', err.message))
  .then((x) => console.log('Finally:', x));
```
**Answer**: `Caught: Error!` then `Finally: undefined`

### Q80: What is Promise chaining?
**Answer**: Linking multiple asynchronous operations where each subsequent operation starts when the previous one completes.

---

## Custom Promises Questions

### Q81: How would you implement a basic Promise?
**Answer**: Using constructor pattern with state management and callback storage for then/catch handlers.

### Q82: What are the key components needed for a custom Promise implementation?
**Answer**: State tracking, result storage, callback queue management, then/catch methods.

### Q83: Why might you want to create a custom Promise implementation?
**Answer**: Educational purposes, adding custom functionality, understanding how promises work internally.

### Q84: What challenges exist in implementing Promise chaining in custom promises?
**Answer**: Managing nested promises, handling return values correctly, implementing proper error propagation.

### Q85: How do you handle asynchronous operations in custom Promise implementation?
**Answer**: Store callbacks and execute them when the promise resolves/rejects asynchronously.

---

## Fetch API Questions

### Q86: What is the Fetch API?
**Answer**: A modern web API for making HTTP requests, returning promises instead of using callbacks.

### Q87: How is Fetch different from XMLHttpRequest?
**Answer**: Fetch is promise-based, has cleaner syntax, better error handling, and more features.

### Q88: Does Fetch reject on HTTP error status codes?
**Answer**: No, Fetch only rejects on network errors. You must check `response.ok` for HTTP errors.

### Q89: How do you send POST data with Fetch?
**Answer**: 
```javascript
fetch('/api', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
```

### Q90: How would you implement a custom fetch function?
**Answer**: Using XMLHttpRequest wrapped in a Promise, handling different HTTP methods and response types.

---

## Mixed/Advanced Questions

### Q91: What is the event loop in JavaScript?
**Answer**: The mechanism that handles asynchronous callbacks by managing the call stack and callback queue.

### Q92: Explain the difference between `call`, `apply`, and `bind`.
**Answer**: 
- `call`: invokes function with specified `this` and arguments
- `apply`: same as call but takes arguments as array
- `bind`: returns new function with bound `this`

### Q93: What is closure and provide an example?
**Answer**: Function's access to variables in its outer scope even after outer function returns.
```javascript
function outer(x) {
  return function inner(y) {
    return x + y;
  };
}
```

### Q94: What's the difference between `==` and `===`?
**Answer**: `==` performs type coercion, `===` checks both value and type without coercion.

### Q95: What is the temporal dead zone?
**Answer**: The time between entering scope and variable declaration where let/const variables exist but cannot be accessed.

### Q96: Explain event delegation.
**Answer**: Technique of using event bubbling to handle events on parent elements instead of individual child elements.

### Q97: What are Web Workers?
**Answer**: Scripts that run in background threads, allowing heavy computations without blocking the main thread.

### Q98: What is the difference between `null` and `undefined`?
**Answer**: 
- `undefined`: variable declared but not assigned
- `null`: explicitly assigned empty value

### Q99: How does JavaScript handle memory management?
**Answer**: Automatic garbage collection removes objects that are no longer referenced.

### Q100: What are some performance optimization techniques in JavaScript?
**Answer**: 
- Minimize DOM manipulation
- Use efficient loops
- Avoid global variables
- Use event delegation
- Optimize critical rendering path
- Use code splitting and lazy loading

---

## Coding Challenges

### Challenge 1: Implement debounce function
```javascript
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}
```

### Challenge 2: Implement throttle function
```javascript
function throttle(func, delay) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      return func.apply(this, args);
    }
  };
}
```

### Challenge 3: Deep clone an object
```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof Array) return obj.map(deepClone);
  if (typeof obj === 'object') {
    const cloned = {};
    Object.keys(obj).forEach(key => {
      cloned[key] = deepClone(obj[key]);
    });
    return cloned;
  }
}
```

### Challenge 4: Implement Promise.all
```javascript
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;
    
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(result => {
          results[index] = result;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}
```

### Challenge 5: Flatten a nested array
```javascript
function flattenArray(arr) {
  return arr.reduce((flat, item) => {
    return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
  }, []);
}
```

---

## Tips for JavaScript Interviews

1. **Understand the fundamentals**: Hoisting, closures, prototypes, this binding
2. **Practice coding**: Implement common algorithms and data structures
3. **Know ES6+ features**: Promises, async/await, destructuring, classes
4. **Understand asynchronous JavaScript**: Event loop, callbacks, promises
5. **Be familiar with modern patterns**: Module systems, functional programming concepts
6. **Practice explaining concepts**: Be able to explain how things work under the hood
7. **Know common pitfalls**: Type coercion, scope issues, this binding problems
8. **Stay updated**: Learn about new JavaScript features and best practices

Remember: The key to acing JavaScript interviews is not just knowing the syntax, but understanding how JavaScript works internally and being able to apply that knowledge to solve problems efficiently.