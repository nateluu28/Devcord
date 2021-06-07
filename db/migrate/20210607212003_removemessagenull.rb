class Removemessagenull < ActiveRecord::Migration[5.2]
  def change
    remove_column :messages, :author_id
    add_column :messages, :author_id, :integer
  end
end
