
class Abduction
  attr_reader :human, :alien_overlord
  
  @@all = []

  def initialize(human, alien_overlord)
    @human = human
    @alien_overlord = alien_overlord

    human.been_abducted = true
    
    @@all << self
  end

  def self.all
    @@all
  end
end # End of abduction class