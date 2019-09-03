class Cat < Pet
  include Mammal::InstanceMethods # instance methods
  extend Mammal::ClassMethods
  
  def initialize(name, breed)
    super(name)
    @breed = breed
    @number_of_lives = 9
  end
  
  def speak
    puts 'meow'
  end
end
