class CreateScreams < ActiveRecord::Migration[5.2]
  def change
    create_table :screams do |t|
      t.string :title
      t.integer :duration
      t.string :screamer

      t.timestamps
    end
  end
end
