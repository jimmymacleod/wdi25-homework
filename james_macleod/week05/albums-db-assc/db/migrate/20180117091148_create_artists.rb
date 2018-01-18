class CreateArtists < ActiveRecord::Migration[5.1]
  has_many :albums
  def change
    create_table :artists do |t|
      t.text :name
      t.text :nationality
      t.text :genre
      t.text :twitter
      t.text :image

      t.timestamps
    end
  end
end
