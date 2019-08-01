class User < ApplicationRecord
  has_many :messages
  has_many :group, through: :member
end
