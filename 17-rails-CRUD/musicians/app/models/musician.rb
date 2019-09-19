class Musician < ApplicationRecord
  has_many :songs
    def self.ofAge
        Musician.all.select do |musician|
      musician.age >= 18
    end
    end
end
