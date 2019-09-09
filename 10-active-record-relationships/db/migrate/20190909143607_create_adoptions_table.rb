class CreateAdoptionsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :adoptions do |t|
      t.integer :alien_id
      t.integer :cow_id
      t.timestamps
    end
  end
end
