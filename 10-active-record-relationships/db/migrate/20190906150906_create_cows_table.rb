class CreateCowsTable < ActiveRecord::Migration[5.2]
  def up
    create_table :cows do |table|
      table.string :name
      table.string :breed
      table.timestamps
    end
  end

  def down
    drop_table :cows
  end
end
