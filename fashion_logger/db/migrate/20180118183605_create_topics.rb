class CreateTopics < ActiveRecord::Migration[5.1]
  def change
    create_table :topics do |t|
      t.string :name
      t.belongs_to :user, foreign_key: true
      t.string :category
      t.string :tag

      t.timestamps
    end
  end
end
