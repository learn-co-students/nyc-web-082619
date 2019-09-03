# My Pets - Inheritance

## Learning Goals

- [x] Review how to inherit from a parent class.
- [x] Review what `super` is doing.
- [x] Review the look up chain.
- [x] Investigate `self` in the child and parent classes.
- [x] Review how to `extend` to add class methods.
- [x] Review how to `include` to add instance methods.

## Key Concepts

**DRY**
_D_ - Don't
_R_ - Repeat
_Y_ - Yourself

- makes for less brittle code 
  - it's more amenable to extension and maintenance 
  - can be changed more easily in the future

**The Rule of 3** - once a chunk of code has been used 3 times refactor to make it more DRY

- try to avoid more the 2 or 3 levels of inheritance
- ruby does not have multiple inheritance

## Review Questions

1. What does `include` do?
  - bring in methods and behavior as instance methods
2. What does `extend` do?
 - bring in methods and behaviors as class methods
3. What's the difference between a class and a module?
  - cannot instantiate a module
  - similar - both have methods/behavior
4. What is DRY?
 - Don't Repeat Yourself
5. What does `super` do?
  - keyword that calls the superclass implementation of the current method
6. What is a parent class/superclass?
  - the class you're inheriting from, where methods/attributes are defined
7. What is the lookup chain and how can we access it?
  - `Object.ancestors` will give us insight into the lookup chain
  - where an object is going to look for a given attribute/method