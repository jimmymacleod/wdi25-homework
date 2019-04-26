class CreateRuns < ActiveRecord::Migration[5.1]
  def change
    create_table :runs do |t|
      t.text :name
      t.integer :distance
      t.date :date
      t.text :country
      t.text :city
      t.text :image

      t.timestamps
    end
  end
end
