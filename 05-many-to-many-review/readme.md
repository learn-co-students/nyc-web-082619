## Instructions
1. Read the below and map out the relationship, draw a diagram.
2. Create methods to correspond with each of the deliverables.
3. Build out examples in the run file, TEST YOUR CODE!


### Relationships

## Human

### Attributes
* name (String)
* eye_color (string)
* been_abducted? (boolean)
* current_planet (string)
* alien_overlord

* Humans should not be able to change their name, but they should be able to change everything else about themselves.

### Methods
* Human#travel_through_space
  * Should alter the humans current planet
* Human#tell_a_lie
  * Should return a fib based off of wether or not the human has been abducted
* Human.all
  * Should return all of the human instances
* Human.find_by_name(name)
  * Should return all of the human instances that match the passed in name
* Human.free_humans
  * Should return all of the human instances that have not yet been abducted
* Human.do_a_war
  * Should release all captive humans



## Abduction

### Attributes
* human
* alien
* date
* Upon initialization human.been_abducted should change to true
* Upon initialization human.alien_overlord should change to the alien doing the abduction
* Upon initialization human.current_planet should change to the home planet of the alien doing the abduction
* Abductions should not be able to change their human, alien_overlord or date

### Methods
* Abduction#human
  * Should return the human associated with the Abduction
* Abduction#alien
  * Should return the alien associated with the Abduction
* Abduction.all
  * Should return all of the instances of SpaceFlights
* Abduction.dates
  * Should puts "The mission name of this spaceship is {insert mission name here}" for every Abduction



## Alien_Overlord

### Attributes
* name (String)
* num_of_antennae (Number)
* home_planet (String)
* consistency (String)
* Alien overlords should be able to change their consistency but nothing else

### Methods
* Alien_Overlord#abduct
  * Should create a new abduction
* Alien_Overlord#play
  * Should change the eye color of a specified human captive
* Alien_Overlord#abductions
  * Should return the number of abductions that an alien overlord has been a part of
* Alien_Overlord#current_captives
  * Should return the name of all of the captives that this Alien currently has in their collection
* Alien_Overlord#captives_log
  * Should return the name of all of the captives that this Alien has ever had in their collection
* Alien_Overlord.all
  * Should return all of the instances of alien overlords
* Alien_Overlord.find_by_name(name)
  * Should return all of the alien overlords whose name matches the passed in string
* Alien_Overlord.implode_colony
  * Should release all captive humans
# many-to-many-review-lecture
# many-to-many-review-lecture
