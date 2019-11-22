class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.boolean :dark_mode, default: false
      t.boolean :notifications, default: true

      t.timestamps
    end
  end
end
