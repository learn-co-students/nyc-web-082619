class Musician < ApplicationRecord

    def self.ofAge
        Musician.all.select do |musician|
      musician.age >= 18
    end
    end
end
