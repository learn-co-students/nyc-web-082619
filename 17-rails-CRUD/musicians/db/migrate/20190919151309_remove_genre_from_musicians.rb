class RemoveGenreFromMusicians < ActiveRecord::Migration[5.2]
  def change
    remove_column :musicians, :genre, :string
  end
end
