class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :likes, :slug, :img_url, :description

  has_many :players

  def slug
    object.name.downcase.gsub(/\s/, "_")
  end
end
