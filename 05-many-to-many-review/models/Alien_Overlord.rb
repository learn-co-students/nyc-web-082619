require 'pry'
class AlienOverlord
  attr_reader :name, :num_antennae, :home_planet
  attr_accessor :consistency
  
  @@all = []

  def initialize(name, num_antennae, home_planet, consistency)
    @name = name
    @num_antennae = num_antennae
    @home_planet = home_planet
    @consistency = consistency

    @@all << self
  end

  def make_friend(human)
    Abduction.new(human, self)
  end

  def play(human_name, new_eye_color = "red")
    found_human = find_human_by_human_name(human_name)

    found_human.eye_color = new_eye_color
  end

  def find_abduction_by_human_name(name)
    my_abductions.find do |abduction|
      abduction.human.name == input
    end
  end

  def find_human_by_human_name(name)
    find_abduction_by_human_name(name).human
  end

  def my_abductions
    Abduction.all.select do |abduction|
      abduction.alien_overlord == self
    end
  end

  def self.all
    @@all
  end
end # End of alien overlord class