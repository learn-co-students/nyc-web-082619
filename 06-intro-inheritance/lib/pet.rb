class Pet
  attr_reader :name
  attr_accessor :mood, :eye_color

  def initialize(name)
    @name = name
    @mood = 'nervous'
  end

  def speak
    puts 'grable'
  end

  def sings
    puts 'hey'
  end
end