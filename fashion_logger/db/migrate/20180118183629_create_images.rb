class CreateImages < ActiveRecord::Migration[5.1]
  def change
    create_table :images do |t|
      t.string :url
      t.string :title
      t.belongs_to :topic, foreign_key: true

      t.timestamps
    end
  end
end
