class Product < ApplicationRecord
  belongs_to :category

  #paginates_per 28

  def self.search(pattern)
    if pattern.blank?
      all
    else
      where('name ILIKE ?', "%#{pattern}%")
    end
  end
end
