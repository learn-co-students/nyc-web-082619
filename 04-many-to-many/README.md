# Many to Many Relationships

## Objectives

* [ ] Implement both sides of a many to many relationship
* [ ] Practice keeping groups of data related to classes on the class as a class variable
* [ ] Demonstrate single source of truth by not storing collections of objects on other objects
* [ ] Demonstrate single source of truth by not storing one object in multiple collections

## Deliverables

* Create a _User_ class. The class should have these methods:
  * [x] `User#initialize` which takes a username
  * [x] `User#username` reader method
  * [x] `User#tweets` that returns an array of Tweet instances
  * [x] `User#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection  
  * [ ] `User.print_tweets` that prints the message of each tweet to the screen in a _pretty_ way (be creative)
  * [x] `User#like_tweet` that accepts a tweet instance as a parameter
  * [ ] `User#liked_tweets` that returns a collection of all the tweets this user has liked

<br>  

* Create a _Tweet_ class. The class should have these methods:
	* [x] `Tweet#initialize` which takes a message and a user
	* [x] `Tweet#message` that returns a string
	* [x] `Tweet#user` that returns an instance of the user class
	* [x] `Tweet.all` that returns all the Tweets created.
	* [x] `Tweet#username` that returns the username of the tweet's user
	* [x] `Tweet#likers` that returns a collection of all the Users who have liked this tweet

## Key Concepts

* `Tweet.new(message, user)`

* Aquarium -< Exhibits(show), Fish(all the starfishes)
* `Aquarium.new`
* `Exhibit.new(exhibit_name, aquarium)`
* `Fish.new(fish_species, name, exhibit)`

* Doctor >---< Patients
* `Doctor.new(name)`
* `Patient.new(name, insurance_number)`
* `Appointment.new(time, location, doctor, patient)`
* Doctor has many patients through appointments

## Discussion Questions
1. What is the difference between a one-to-many and a many-to-many relationship?
2. What does 'has many through' mean?