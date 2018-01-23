class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest
  has_many :topics
  has_many :images, through: :topics
end
