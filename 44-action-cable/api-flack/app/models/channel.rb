class Channel < ApplicationRecord
  has_many :user_channels
  has_many :users, through: :user_channels
  
  has_many :messages
end
