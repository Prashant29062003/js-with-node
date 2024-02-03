# javascript and classes

## OOP's and Why use OOP
- OOPs, or Object-Oriented Programming, is a programming paradigm (style) that organizes code into reusable, self-contained units called objects. 
- These objects encapsulate data and behavior, fostering modularity, reusability, and easier maintenance in software development. 
- OOP principles include encapsulation, inheritance, and polymorphism.

* It's important to note that JavaScript is a prototype-based language, and its approach to OOP may differ from classical OOP languages like Java or C++. The concepts of encapsulation, inheritance, polymorphism, and abstraction are still fundamental, but their implementation details may vary.

## Object 
- collection of properties and methods
- exapmle in JS - toLowerCase


## part of OOP
### Object literal 
- An object literal is a syntactic notation in programming languages, such as JavaScript, that allows the creation of objects directly within code. It involves defining key-value pairs enclosed within curly braces, where keys are strings and values can be any valid expressions or data types. This approach provides a concise and straightforward way to create and initialize objects without the need for explicit class definitions. Here's a simple example in JavaScript:

```javascript
let person = {
  name: "John",
  age: 25,
  isStudent: false,
  sayHello: function() {
    console.log("Hello!");
  }
};
```
In this example, person is an object literal with properties like name, age, isStudent, and a method sayHello.

### Contructor function
1) New Object is created.
2) A constructor function is to be called via "new" keyword.
3) "this", and more methds are injected in new function.
4) At last we got the all methods in new function we created as a seperate entity.
### Prototypes
### Class
### Instances(new, this)


## 4 Pillers
### Abstraction
Abstraction involves simplifying complex systems by modeling classes based on the essential properties and behaviors they share. It focuses on what an object does rather than how it achieves its functionality. Abstraction helps in managing complexity and providing a clear and concise representation of objects in a system.

```javascript
// Using abstraction to create a class with private variables
function Counter() {
  let count = 0;  // Private variable
  
  // Public method to increment count
  this.increment = function() {
    count++;
  };

  // Public method to get the current count
  this.getCount = function() {
    return count;
  };
}

let counter = new Counter();
counter.increment();
console.log(counter.getCount());  // Output: 1

```

#### Abstraction in JavaScript:

- Abstraction in JavaScript involves focusing on the essential aspects of an object and hiding unnecessary details.
- Objects and functions provide a level of abstraction, allowing you to interact with the code without understanding its internal implementation.
- The use of interfaces or abstract classes is not as explicit in JavaScript as in some other OOP languages.

### Encapsulation
It refers to the bundling of data (attributes) and methods (functions) that operate on the data into a single unit, known as a class. Encapsulation helps in hiding the internal implementation details and exposing only what is necessary, promoting information hiding and abstraction.
#### Specilly in JS
- Encapsulation in JavaScript is achieved through the use of objects and closures.
- Objects allow you to bundle data and methods together, providing a way to encapsulate related functionalities.
- Closures help in creating private variables and methods, limiting access to certain properties.
```javascript
// Using an object to encapsulate data and methods
let car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2022,
  
  // Encapsulated method
  start: function() {
    console.log('Engine started!');
  }
};

// Accessing encapsulated data and method
console.log(car.brand);  // Output: Toyota
car.start();             // Output: Engine started!
```


### Inhertance
 Inheritance is a mechanism that allows a new class (subclass or derived class) to inherit properties and behaviors of an existing class (base class or superclass). This promotes code reuse, as common attributes and methods can be defined in a base class and extended or overridden in derived classes.
 #### Specially in JS
 - JavaScript supports prototypal inheritance.
- Objects can inherit properties and methods from other objects through their prototypes.
- The prototype property allows objects to share common functionality.
```javascript
// Base class
function Animal(name) {
  this.name = name;
}

// Derived class inheriting from Animal
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Creating an instance of Dog
let myDog = new Dog('Buddy', 'Golden Retriever');

console.log(myDog.name);   // Output: Buddy
console.log(myDog.breed);  // Output: Golden Retriever

```
## Polymorphism
Polymorphism allows objects of different types to be treated as objects of a common type. There are two types of polymorphism: compile-time (method overloading) and runtime (method overriding). Method overriding enables a subclass to provide a specific implementation of a method that is already defined in its superclass.

#### Polymorphism in JavaScript:

- Polymorphism in JavaScript is achieved through method overriding and dynamic typing.
- Objects can have methods with the same name, and the appropriate method is called based on the context during runtime.
- JavaScript is dynamically typed, allowing objects to be treated as instances of different types.

```javascript
// Polymorphism through method overriding
function Shape() {
  this.draw = function() {
    console.log('Drawing a shape');
  }
}

function Circle() {
  Shape.call(this);
  this.draw = function() {
    console.log('Drawing a circle');
  }
}

function Square() {
  Shape.call(this);
  this.draw = function() {
    console.log('Drawing a square');
  }
}

// Polymorphic behavior
let shapes = [new Circle(), new Square()];

shapes.forEach(shape => {
  shape.draw();
});
// Output: Drawing a circle
//         Drawing a square

```