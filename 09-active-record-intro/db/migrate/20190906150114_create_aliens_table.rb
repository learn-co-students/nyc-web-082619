class CreateAliensTable < ActiveRecord::Migration[5.2]
  def change
    create_table :aliens do |t|
      t.string :name
      t.integer :age
      t.string :home_planet
      t.timestamps
    end
  end
end
