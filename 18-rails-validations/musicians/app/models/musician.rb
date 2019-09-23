class Musician < ApplicationRecord
  has_many :songs
  validates :label, presence: true
  validates :name, presence: true
  validates :age, presence: true
  validate :older_than_ozzy


  def older_than_ozzy
    if self.age >= 70
    errors.add(:age, "is to high, get a new hobby")
    end
  end






    def ofAge
        Musician.all.select do |musician|
      musician.age >= 18
    end
    end

end
