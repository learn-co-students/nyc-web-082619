class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :likes, :slug#, :players

  has_many :players

  def slug
    object.name.downcase.gsub(/\s/, "_")
  end
end
