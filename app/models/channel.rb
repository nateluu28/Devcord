class Channel < ApplicationRecord
  include Messageable

  validates :name, presence: true
  validates :server_id, presence: true

  belongs_to :server
  
end
