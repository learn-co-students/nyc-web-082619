class AddHostilityToAliens < ActiveRecord::Migration[5.2]
  def change
    add_column :aliens, :hostility, :integer
  end
end
