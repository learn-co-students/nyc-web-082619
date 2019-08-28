# THE WEIRDO BREEDER

# The Weirdo Breeder wants to breed a bunch of dogs that can do the following stuff. 
# Below is a list of their requirements.
# How can we help them out?

# √1. I want to be able to create a herd of dogs, each with a name and a breed
# √2. I want every dog to be able to speak and tell me its name
# √3. I want every dog to be able to run around
# √4. I want every dog to be able to perform a trick where they speak, run around, and then rollover
# √5. I want to be able to see a list of all of the dogs in my herd
# 6. I want to be able to find puppies in my herd by breed
# √7. I want to be able to give my herd a single command and get them all to speak at the same time

require 'pry'

class Dog 
  attr_reader :name, :breed

  @@all = []
  
  def initialize(name, breed)
    @name = name
    @breed = breed

    @@all << self
  end

  def speak
    if self.breed.downcase == "great dane"
      puts "Hey dude. What's good? I'm #{self.name}. Be cool."
    else
      puts "Bark bark #{self.name}"
    end
  end

  def run
    puts 'ZOOOOOOOOOOOOOOOOOOOOOOOOOOMS'
  end

  def rollover
    puts "rollin' rollin' rollin' on the rivah"
  end
  
  def trick
    self.speak
    self.run
    self.rollover
  end

  def self.all
   @@all
  end

  def self.sing
    puts '🎶🎶🎶🎶🎶🎶🎶'
    
    self.all.each do |dog|
      dog.speak
    end
    
    puts '🎶🎶🎶🎶🎶🎶🎶'
  end

end

max = Dog.new('max', 'corgi')
pongo = Dog.new('pongo', 'great dane')

binding.pry
