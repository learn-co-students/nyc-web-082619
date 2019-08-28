# One to Many Relationships

## Objectives

* [x] Implement one object to many objects relationship
  * [x] One object has many objects
  * [x] One object belongs to another object
* [x] Demonstrate the concept of Entity Relationship Diagram (ERD)
* [x] Practice passing custom objects as arguments to methods
* [x] Demonstrate single source of truth
* [x] Infer type of method (class or instance) through naming conventions (`.` methods vs `#` methods)  
* [x] Recognize a single point of entry for an application

## Deliverables

* Create a _User_ class. The class should have these methods:
  * [x] `#initialize` which takes a username
  * [x] `User#username` reader method
  * [x] `#tweets` that returns an array of Tweet instances
  * [x] `#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection
  * [ ] `User.print_tweets` that prints the message of each tweet to the screen in a _pretty_ way (be creative)
<br>  

* Create a _Tweet_ class. The class should have these methods:
	* [x] `#initialize` which takes a message and a user
	* [x] `#message` that returns a string
	* [x] `#user` that returns an instance of the user class
	* [x] `Tweet.all` that returns all the Tweets created.
	* [x] `#username` that returns the username of the tweet's user

## Key Concepts
* Domains - Domain model
  * school - classes, students, instructors, rooms, assignments
  * restaurant - customer, dish, table, menu
  * solar system - planet, aliens, other_stars, moons, asteroids, spaceships, colonies
  * dream journal - angels, pages, entry, date, type, bed, password (authorization)


* One-to-Many relationships
  * a skateboarder has many skateboards
  * weirdo breeder has many dogs
  * author has many books
  * musician has many songs

* domain - that sliver of the real world we want to model in our application
* domain model - the representation of the domain via classes/model in our app
* model - primarily for data storage/access, but also for defining some behavior
* one-to-many - a relationship between things in the world that can be described by "thing thing has many of this other thing" or "this thing belongs to one other thing"


## Discussion Questions

1. What is a one-many-relationship? How would we draw that in an ERD?
2. What does _Single Source of Truth_ mean?
3. What is a model? Domain? Domain model?
4. What is the relationship between a class and an instance?