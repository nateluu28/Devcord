class CreateConversations < ActiveRecord::Migration[5.2]
  def change
    create_table :conversations do |t|
      t.integer :owner_id, null: false
      t.string :name
      
      t.timestamps
    end
  end
end
