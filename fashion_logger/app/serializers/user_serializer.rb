class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :email
  has_many :topics
  has_many :images, through: :topics
end
