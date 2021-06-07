class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :body, null: false
      t.string :author_id, null: false

      t.timestamps
    end
  end
end
