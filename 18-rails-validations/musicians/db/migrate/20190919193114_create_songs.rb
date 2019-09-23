class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title
      t.integer :year
      # t.integer :musician_id
      t.belongs_to :musician, foreign_key: true

      t.timestamps
    end
  end
end
