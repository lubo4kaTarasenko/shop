class Comment < ApplicationRecord
  belongs_to :product, required: true
  belongs_to :user, required: true
end
