class CreateMountains < ActiveRecord::Migration[5.1]
  def change
    create_table :mountains do |t|
      t.string :name
      t.string :location
      t.integer :size
      t.string :image

      t.timestamps
    end
  end
end
