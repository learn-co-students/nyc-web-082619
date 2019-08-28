require 'pry'
require_relative 'tweet'
require_relative 'user'

pongo = User.new('pongo')
max = User.new('max')

pongo.post_tweet("Yo")
pongo.post_tweet("Hey dude.")
pongo.post_tweet("Chill. Brah.")
pongo.post_tweet("I'm old. And I'm chill.")

max.post_tweet("Bonk")
max.post_tweet("Baaaah")
max.post_tweet("Ruf")
max.post_tweet("Grr 👍🏻")

binding.pry