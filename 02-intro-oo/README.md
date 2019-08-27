# Intro to Object Orientation

## SWBATs

* [x] Define object in programming domain
* [x] Explain the concept of sending messages
* [x] Create a class and instantiate an instance of the class
* [x] Explain the difference between a class and an instance
* [x] Pass arguments to new by defining an initialize method in class
* [x] Create instance methods
* [ ] Call methods on the implicit or explicit self
* [x] Define attribute readers and writers using attr_ macros
* [ ] Get more practice with array compositions (each, map, select/filter)
* [ ] Explain the need for variable scope and why it's important to not utilize global variables

## Deliverables

Here is a naive implementation of a bank account in Ruby using only a hash which stores key-value pairs.

```ruby
bank_account = {"user_id": 3, "balance": 100}
```

Write an implementation of a bank account that meets the following requirements:

* can print the balance of the account
* can deposit money into the account
* can withdraw money from the account
* keeps track of the account number
* keeps track of the customer id of the account

## Notes

* objects
  * do stuff - behaviors
  * have identities
  * have attributes

## Discussion Questions

* What's the difference between a class and an instance?
  * class provides a template for how to instatiate objects
  * class is blueprint
  * class is factory


  * instance is a signle instantiation of a class
  * instance is object
  * instance is product/implementation
  
* What is a message?
  * a unit of communication between objects
  * often a method (e.g. car1.drive)
  * could be an attribute(e.g. car1.color)

* What is the difference between a local variable and an instance variable?
  * scope 
    * local variables are only accessible in their immediate context
    * instance variables are available across methods defined on that instance

* What is `self` in a class method?
  * the class itself (e.g., Car)

* What is `self` in an instance method?
  * the instance (e.g., car1)
