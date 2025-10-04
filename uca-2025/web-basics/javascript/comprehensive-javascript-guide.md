# Comprehensive JavaScript Guide - From Basics to Advanced

## Table of Contents
1. [Hoisting](#1-hoisting)
2. [Functions](#2-functions)
3. [JSON](#3-json)
4. [Loops](#4-loops)
5. [Rest & Spread Operators](#5-rest--spread-operators)
6. [Set & Map](#6-set--map)
7. [Objects](#7-objects)
8. [Constructor Functions](#8-constructor-functions)
9. [Classes](#9-classes)
10. [Inheritance](#10-inheritance)
11. [Private Properties](#11-private-properties)
12. [Destructuring](#12-destructuring)
13. [Web Storage](#13-web-storage)
14. [Arrow Functions](#14-arrow-functions)
15. [Method Chaining](#15-method-chaining)
16. [Promises (Inbuilt)](#16-promises-inbuilt)
17. [Custom Promises](#17-custom-promises)
18. [Fetch API](#18-fetch-api)

---

## 1. Hoisting

### Concept Overview
Hoisting is JavaScript's behavior of moving declarations to the top of their containing scope during compilation.

### Key Points
- **Function Scope**: Created by functions
- **Block Scope**: Created by `{}` (if, else, for, while, do)
- **Hoisting applies to**: `var`, `function`, `let`, `const`, `class`, `import`

### var vs let Hoisting
```javascript
// var hoisting - moves to top of function scope
function foo() {
  console.log("var x before:", x); // undefined
  console.log("let y before:", y); // ReferenceError: Cannot access 'y' before initialization
  
  if (true) {
    var x = 2;
    let y = 3;
  }
  
  console.log("var x after:", x); // 2
  console.log("let y after:", y); // ReferenceError: y is not defined
}
```

### Function Hoisting
```javascript
// Function declarations are fully hoisted
console.log(hoistedFunc()); // Works

function hoistedFunc() {
  return "I'm hoisted!";
}

// Function expressions are not hoisted
console.log(notHoisted()); // TypeError: notHoisted is not a function
var notHoisted = function() {
  return "I'm not hoisted!";
};
```

---

## 2. Functions

### Function Declaration Types

#### 1. Traditional Function Declaration
```javascript
function foo1(param1) {
  console.log("Inside foo1 with params:", param1);
}
```

#### 2. Function Expression
```javascript
var foo2 = function(param1) {
  console.log("Inside foo2 with params:", param1);
};
```

#### 3. Arrow Function Expression
```javascript
var foo3 = (param1) => {
  console.log("Inside foo3 with params:", param1);
};
```

#### 4. Anonymous Function
```javascript
(param1) => {
  console.log("Anonymous function with params:", param1);
};
```

#### 5. Self-Invoking Functions (IIFE)
```javascript
((param1) => {
  console.log("Self-invoking function with params:", param1);
})("Hello");
```

#### 6. Generator Functions
```javascript
function* scoreGenerator(initialScore = 0) {
  let currentScore = initialScore;
  while (currentScore < 2) {
    yield currentScore;
    currentScore++;
  }
  return currentScore;
}

const scoreGen = scoreGenerator();
console.log(scoreGen.next()); // {value: 0, done: false}
console.log(scoreGen.next()); // {value: 1, done: false}
console.log(scoreGen.next()); // {value: 2, done: true}
```

---

## 3. JSON

### JSON vs XML
```javascript
// JSON Object
var studentObject = {
  firstName: "John",
  lastName: "Doe",
  rollno: 1236544,
  collegeName: "University"
};

// XML equivalent would be:
/*
<student>
  <firstName>John</firstName>
  <lastName>Doe</lastName>
  <rollno>1236544</rollno>
  <collegeName>University</collegeName>
</student>
*/
```

### JSON Methods
```javascript
// Convert object to JSON string
var jsonString = JSON.stringify(studentObject);

// Convert JSON string back to object
var parsedObject = JSON.parse(jsonString);
```

---

## 4. Loops

### Different Loop Types

#### 1. Traditional for loop
```javascript
var numArray = [9, 8, 7, 6, 5];

for (let i = 0; i < numArray.length; i++) {
  console.log(`The value is: ${numArray[i]}`);
}
```

#### 2. for loop with break and continue
```javascript
// With break
for (let i = 0; i < numArray.length; i++) {
  if (i === 3) break;
  console.log(`The value is: ${i}`);
}

// With continue
for (let i = 0; i < numArray.length; i++) {
  if (i === 3) continue;
  console.log(`The value is: ${i}`);
}
```

#### 3. for...in loop (for objects and arrays)
```javascript
// For arrays
for (let i in numArray) {
  if (numArray[i] === 7) continue;
  console.log(`The value is: ${numArray[i]}`);
}

// For objects
var studentObject = {
  firstName: "John",
  lastName: "Doe",
  rollno: 1236544
};

for (let key in studentObject) {
  console.log(`${key}: ${studentObject[key]}`);
}
```

#### 4. for...of loop (for arrays)
```javascript
for (let value of numArray) {
  if (value === 7) continue;
  console.log(`The value is: ${value}`);
}
```

#### 5. forEach (no break/continue support)
```javascript
numArray.forEach(function(value, index, array) {
  if (value === 8) return; // Acts like continue
  console.log(`The value is: ${value}`);
});

// Arrow function version
numArray.forEach((value) => {
  console.log(`The value is: ${value}`);
});
```

#### 6. map
```javascript
var doubled = numArray.map((value) => {
  return value * 2;
});
```

---

## 5. Rest & Spread Operators

### Spread Operator (...)
```javascript
// Array spreading
var num1 = [1, 2, 3, 4];
var num2 = [5, 6, 7, 8];
var combined = [...num1, ...num2];

// Object spreading
var studentDetails1 = { name: "John", age: 20 };
var studentDetails2 = { rollno: 12345, marks: 900 };
var fullDetails = { ...studentDetails1, ...studentDetails2 };
```

### Rest Operator (...)
```javascript
// Rest in function parameters
function sumAll(...items) {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum += items[i];
  }
  return sum;
}

sumAll(1, 2, 3, 4, 5); // Can pass any number of arguments

// Rest in destructuring
var studentDetails = { name: "John", age: 20, college: "MIT" };
var { name, ...otherDetails } = studentDetails;

function getProperties({ name, ...details }) {
  console.log("name:", name);
  console.log("details:", details);
}
```

---

## 6. Set & Map

### Set - Collection of Unique Elements
```javascript
var set1 = new Set([1, 2, 3, 1, 2]); // {1, 2, 3}
set1.add(4); // Add element
set1.has(1); // Check if element exists
set1.delete(1); // Remove element
set1.size; // Get size
```

### Map - Key-Value pairs with any key type
```javascript
var map1 = new Map([
  ["name", "John"],
  [1, "one"],
  [true, "boolean key"]
]);

map1.set("age", 25); // Add key-value pair
map1.get("name"); // Get value
map1.has("age"); // Check if key exists
map1.delete("age"); // Remove key-value pair
map1.size; // Get size
```

---

## 7. Objects

### Different Ways to Create Objects

#### 1. Object Literal
```javascript
var obj1 = { name: "John" };
```

#### 2. new Object()
```javascript
var obj2 = new Object({ name: "John" });
```

#### 3. Object.assign()
```javascript
var obj3 = Object.assign({ college: "MIT" }, { name: "John" });
```

#### 4. Object.create()
```javascript
var prototype = { college: "MIT" };
var obj4 = Object.create(prototype);
obj4.name = "John";
```

### When New Objects Are Created
- Using `{}` (object literal)
- Using spread operator `{...obj}`
- Using `Object.assign()` with empty object as first parameter

---

## 8. Constructor Functions

### Evolution of Object Creation

#### Approach 1: Direct Object Creation
```javascript
var student1 = {
  fName: "John",
  obtainedMarks: 450,
  checkResult: function() {
    let percentage = (this.obtainedMarks / 500) * 100;
    return percentage > 40 ? "pass" : "fail";
  }
};
```

#### Approach 2: Factory Function
```javascript
function createStudent(fName, obtainedMarks) {
  return {
    fName: fName,
    obtainedMarks: obtainedMarks,
    checkResult: function() {
      let percentage = (this.obtainedMarks / 500) * 100;
      return percentage > 40 ? "pass" : "fail";
    }
  };
}
```

#### Approach 3: Constructor Function
```javascript
function Student(fName, obtainedMarks) {
  this.fName = fName;
  this.obtainedMarks = obtainedMarks;
  this.checkResult = function() {
    let percentage = (this.obtainedMarks / 500) * 100;
    return percentage > 40 ? "pass" : "fail";
  };
}

var student1 = new Student("John", 450);
```

#### Optimized Constructor Function (Using Prototype)
```javascript
function Student(fName, obtainedMarks) {
  this.fName = fName;
  this.obtainedMarks = obtainedMarks;
}

Student.prototype.checkResult = function() {
  let percentage = (this.obtainedMarks / 500) * 100;
  return percentage > 40 ? "pass" : "fail";
};
```

---

## 9. Classes

### ES6 Class Syntax
```javascript
class Student {
  constructor(fName, obtainedMarks) {
    this.fName = fName;
    this.obtainedMarks = obtainedMarks;
  }
  
  checkResult() {
    let percentage = (this.obtainedMarks / 500) * 100;
    return percentage > 40 ? "pass" : "fail";
  }
}

var student1 = new Student("John", 450);
```

### Key Points
- Classes are syntactic sugar over prototype-based inheritance
- Transpilers convert class syntax to constructor functions for older browsers
- Frameworks implemented class-based approaches before native browser support

---

## 10. Inheritance

### Prototype-based Inheritance
```javascript
// Custom implementation of map function
Array.prototype.customMap = function(callback) {
  let returnArray = [];
  for (let i = 0; i < this.length; i++) {
    let callbackValue = callback(this[i]);
    returnArray.push(callbackValue);
  }
  return returnArray;
};

// Custom forEach implementation
Array.prototype.forEachCustom = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

var arr = [1, 2, 3, 4, 5];
var doubled = arr.customMap(item => item * 2);
```

---

## 11. Private Properties

### Private Fields in Classes
```javascript
class Student {
  #fName; // Private field
  static studentCount = 0; // Static field
  
  constructor(fName, obtainedMarks) {
    this.#fName = fName;
    this.obtainedMarks = obtainedMarks;
    Student.studentCount++;
  }
  
  checkResult() {
    let percentage = (this.obtainedMarks / 1000) * 100;
    return percentage > 40 ? "pass" : "fail";
  }
  
  getName() {
    return this.#fName; // Getter for private field
  }
  
  // Getter
  get fullName() {
    return this.#fName;
  }
  
  // Setter
  set fullName(name) {
    this.#fName = name;
  }
}

var student1 = new Student("John", 450);
console.log(student1.getName()); // Accessing private field through method
// console.log(student1.#fName); // SyntaxError: Private field '#fName' must be declared in an enclosing class
```

---

## 12. Destructuring

### Array Destructuring
```javascript
var arr = [1, "John", "Doe", { name: "John", age: 20 }];
var [count, fName, lName, details] = arr;
```

### Object Destructuring
```javascript
var obj = {
  fName: "John",
  lName: "Doe",
  details: { age: 25, college: "MIT" }
};

var { fName, lName, details } = obj;

// Destructuring with different variable names
var { fName: firstName, lName: lastName } = obj;

// Nested destructuring
var { details: { age, college } } = obj;
```

---

## 13. Web Storage

### Local Storage
```javascript
// Set item
localStorage.setItem("name", "John");
localStorage.setItem("age", "25");

// Get item
var name = localStorage.getItem("name");

// Remove item
localStorage.removeItem("name");

// Clear all
localStorage.clear();
```

### Session Storage
```javascript
// Same methods as localStorage but data persists only for the session
sessionStorage.setItem("tempData", "value");
sessionStorage.getItem("tempData");
sessionStorage.removeItem("tempData");
sessionStorage.clear();
```

### Cookies
```javascript
// Set cookie
document.cookie = "username=John; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";

// Get cookies
console.log(document.cookie);
```

---

## 14. Arrow Functions

### this Binding Differences
```javascript
function StudentConstructor(fName, obtainedMarks) {
  this.fName = fName;
  this.obtainedMarks = obtainedMarks;
  
  // Regular function - 'this' depends on how it's called
  this.checkResultsNormal = function() {
    console.log(this); // 'this' refers to the student instance
    
    function innerFunction() {
      console.log("Normal Inner function:", this); // 'this' is undefined or global
    }
    innerFunction();
  };
  
  // Arrow function - 'this' is lexically bound
  this.checkResultsArrow = () => {
    console.log(this); // 'this' refers to the student instance
    
    const innerFunction = () => {
      console.log("Arrow Inner function:", this); // 'this' still refers to student instance
    };
    innerFunction();
  };
}

var student1 = new StudentConstructor("John", 450);
student1.checkResultsNormal();
student1.checkResultsArrow();
```

---

## 15. Method Chaining

### Implementation Approaches

#### Implementation 1: Return New Object
```javascript
function CustomString(initialValue) {
  this.value = initialValue;
  
  this.infiniteConcat = function(stringToConcat) {
    return {
      value: this.value + " " + stringToConcat,
      infiniteConcat: this.infiniteConcat
    };
  };
}
```

#### Implementation 2: Modify Original Object
```javascript
function CustomString(initialValue) {
  this.value = initialValue;
  
  this.infiniteConcat = function(stringToConcat) {
    this.value = this.value + " " + stringToConcat;
    return this; // Return 'this' to enable chaining
  };
}
```

#### Implementation 3: Create New Instance
```javascript
function CustomString(initialValue) {
  this.value = initialValue;
  
  this.infiniteConcat = function(stringToConcat) {
    let newValue = this.value + " " + stringToConcat;
    return new CustomString(newValue);
  };
}

var x = new CustomString("hello");
var result = x.infiniteConcat("world").infiniteConcat("!");
```

---

## 16. Promises (Inbuilt)

### Promise Basics
```javascript
// Promise states: pending, fulfilled, rejected
// Promise has two properties: state and result

function promiseExecutor(resolve, reject) {
  setTimeout(() => {
    console.log("Promise executed");
    resolve("Promise resolved successfully");
    // reject("Promise rejected");
  }, 2000);
}

var promise1 = new Promise(promiseExecutor);

promise1
  .then((resolvedValue) => {
    console.log("Success:", resolvedValue);
  })
  .catch((rejectedValue) => {
    console.log("Error:", rejectedValue);
  });
```

### Promise Chaining
```javascript
promise1
  .then((result) => {
    return result + " - processed";
  })
  .then((processedResult) => {
    console.log(processedResult);
  })
  .catch((error) => {
    console.log("Error in chain:", error);
  });
```

### Promise Methods
```javascript
// Promise.all - waits for all promises to resolve
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("All promises resolved:", results);
  });

// Promise.race - resolves with the first promise that settles
Promise.race([promise1, promise2])
  .then((result) => {
    console.log("First resolved:", result);
  });
```

---

## 17. Custom Promises

### Building a Custom Promise
```javascript
function CustomPromise(executorFunc) {
  this.state = "pending";
  let successCallback;
  let failureCallback;
  
  this.then = function(callback) {
    successCallback = callback;
    return this;
  };
  
  this.catch = function(callback) {
    failureCallback = callback;
    return this;
  };
  
  executorFunc(
    (response) => {
      this.state = "fulfilled";
      if (successCallback) successCallback(response);
    },
    (error) => {
      this.state = "rejected";
      if (failureCallback) failureCallback(error);
    }
  );
}

// Usage
function customExecutor(resolve, reject) {
  setTimeout(() => {
    resolve("Custom promise resolved");
  }, 2000);
}

var customPromise = new CustomPromise(customExecutor);

customPromise
  .then((result) => {
    console.log("Custom promise success:", result);
  })
  .catch((error) => {
    console.log("Custom promise error:", error);
  });
```

---

## 18. Fetch API

### Basic Fetch Usage
```javascript
fetch("https://api.example.com/data")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```

### Custom Fetch Implementation using XMLHttpRequest
```javascript
function customFetch(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(xhr.status);
        }
      }
    };
  });
}

// Usage
customFetch("http://localhost:8080/data")
  .then((response) => {
    console.log("Response:", response);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```

### XMLHttpRequest (Traditional Approach)
```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:8080/data");
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    console.log("Response received:", xhr.response);
  }
};
```

---

## Summary

This guide covers the fundamental to advanced JavaScript concepts including:

- **Core Concepts**: Hoisting, functions, loops, objects
- **Modern ES6+ Features**: Classes, arrow functions, destructuring, rest/spread
- **Advanced Topics**: Prototypes, inheritance, promises, async operations
- **Data Structures**: Set, Map, various object creation patterns
- **Storage**: localStorage, sessionStorage, cookies
- **Patterns**: Method chaining, constructor functions, custom implementations

Each concept builds upon the previous ones, creating a comprehensive understanding of JavaScript from basics to advanced level.