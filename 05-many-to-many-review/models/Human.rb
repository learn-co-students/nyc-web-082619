class Human
  attr_reader :name
  # def name
  #   @name
  # end
  attr_accessor :eye_color, :been_abducted, :current_planet
  
  @@all = []

  def initialize(name, eye_color = "brown")
    @name = name
    @eye_color = eye_color

    @been_abducted = false
    @current_planet = "Earf"

    @@all << self
  end

  def travel_through_space(location)
    @current_planet = location
  end

  def tell_a_lie
    if !self.been_abducted
      puts "Yeah I've been to space no big deal."
    else
      puts "No. Aliens rnt real."
    end
  end

  def self.do_a_war
    self.all.each do |hooman|
      hooman.been_abducted = false
    end
  end

  def self.all
    @@all
  end
end # End of human class