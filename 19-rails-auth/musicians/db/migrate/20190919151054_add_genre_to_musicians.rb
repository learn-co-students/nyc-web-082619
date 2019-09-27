class AddGenreToMusicians < ActiveRecord::Migration[5.2]
  def change
    add_column :musicians, :genre, :string
  end
end
