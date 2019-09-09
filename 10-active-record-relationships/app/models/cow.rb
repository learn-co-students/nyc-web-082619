class Cow < ActiveRecord::Base
  # belongs_to :alien
  has_many :adoptions
  has_many :aliens, through: :adoptions
end