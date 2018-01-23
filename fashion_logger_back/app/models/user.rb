class User < ApplicationRecord
  has_many :topics
  has_many :images, through: :topics
  has_secure_password
end
