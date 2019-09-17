class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.integer :shoe_size
      t.integer :age
      t.integer :budget_in_usd
      t.string :city
      t.timestamp
    end
  end
end

