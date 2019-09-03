module Mammal

  module InstanceMethods
    def walk
      puts "I'm walkin' on sunshine 🎶"
    end 

  end 

  module ClassMethods
    def eat
      puts 'Munching leaves'
    end
  end
end
