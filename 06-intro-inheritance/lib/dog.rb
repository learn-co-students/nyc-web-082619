class Dog < Pet
  extend Mammal # brings methods in as class methods

  def speak
    super
    puts 'But I can also talk because I am a great dane.'
  end
end
