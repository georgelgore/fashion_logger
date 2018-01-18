class User < ApplicationRecord
  has_many :topics
  has_many :images, through: :topics
end
