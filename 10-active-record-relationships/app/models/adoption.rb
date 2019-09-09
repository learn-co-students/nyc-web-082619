class Adoption < ActiveRecord::Base
  belongs_to :alien
  belongs_to :cow
end