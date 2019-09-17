class AddShoeSizeToShoes < ActiveRecord::Migration
  def change
  add_column :shoes, :shoe_size, :integer  
end
end
