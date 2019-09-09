class Alien < ActiveRecord::Base
  has_many :adoptions
  # has_many :cows, dependent: :destroy
  has_many :cows, dependent: :destroy, through: :adoptions
end