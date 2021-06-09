class AddMessageable < ActiveRecord::Migration[5.2]
  def change
    add_reference :messages, :messageable, polymorphic: true, index: true
  end
end
