class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.string :name
      t.string :image
      t.integer :year
      t.integer :tracks
      t.string :link

      t.timestamps
    end
  end
end
