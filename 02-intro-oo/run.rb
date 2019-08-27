require 'pry'
 
# car1 = { color: 'red', number_of_doors: 2 }
# car2 = { color: 'blue', number_of_doors: 3 }
# car3 = { clor: 'green', number_of_doors: 'yes' }

class Car
  # attr_reader :color, :number_of_doors
  # attr_writer :color, :number_of_doors
  attr_accessor :color, :number_of_doors

  @@all = []
  
  def initialize(color, number_of_doors)
    @color = color
    @number_of_doors = number_of_doors
    @owner = 'Steven'
    # binding.pry
    @@all << self
    # binding.pry
    puts 'hey'
    thing = 'hi there'
  end

  def drive # instance method
    puts self.color # self here is the instance itself (i.e., car1)
    puts "VROOOOOM"
  end

  def increase_number_of_doors(num)
    puts self.color
    @number_of_doors += num
  end

  def self.all # class method, prefaced with self
    puts self # self in a class method is the class (i.e., Car)
    @@all
  end

  def self.destroy_all_the_cars
    # how would we implement this method?
    # why would it be a class method?
  end
  
  # def color
  #   @color
  # end

  # def number_of_doors
  #   @number_of_doors
  # end

  # def number_of_doors=(door_number)
  #   @number_of_doors = door_number
  # end
  
  # def color=(color_name)
  #   @color = color_name
  # end
  
end

binding.pry
