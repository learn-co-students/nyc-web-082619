class CreateMusicians < ActiveRecord::Migration[5.2]
  def change
    create_table :musicians do |t|
      t.string :name
      t.integer :age
      t.string :label

      t.timestamps
    end
  end
end
