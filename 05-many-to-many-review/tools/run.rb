require "pry"
require_relative "../models/Human.rb"
require_relative "../models/Alien_Overlord.rb"
require_relative "../models/Abduction.rb"

puts "Creating Humanz"
h1 = Human.new("Gertie", "hazel")
h2 = Human.new("Brienne", "blue")
h3 = Human.new("Finbo")
h4 = Human.new("Oliver", "green")
puts "Created Humanz"

puts "Creating Alienz"
ao1 = AlienOverlord.new("Mike", 12, "Mars", "Spagaoetti")
ao2 = AlienOverlord.new("Chad", 1, "Blorp", "Mayo")
ao3 = AlienOverlord.new("Brad", 2, "Masdf", "Spicy brown mustard")
ao4 = AlienOverlord.new("Gabe", 4, "Mars", "BBQ Soup")
puts "Created Alienz"

puts "Creating Friendships"
a1 = Abduction.new(h2, ao2)
a2 = Abduction.new(h3, ao2)
a3 = Abduction.new(h4, ao3)
puts "Created Friendships"

ao1.make_friend(h1)

ao2.play("Finbo")
binding.pry
puts "Long live our alien overlords"
