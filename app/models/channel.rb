class Channel < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :server_id, presence: true

  belongs_to :server
  
end
