class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :name, null: false
      t.string :owner_id, null: false

      t.timestamps
    end
    add_index :servers, :owner_id
    add_index :users, :session_token, unique: true
  end
end
