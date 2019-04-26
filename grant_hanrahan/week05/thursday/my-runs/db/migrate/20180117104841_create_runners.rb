class CreateRunners < ActiveRecord::Migration[5.1]
  def change
    create_table :runners do |t|
      t.text :name
      t.integer :age
      t.text :nationality
      t.text :gender
      t.text :image

      t.timestamps
    end
  end
end
