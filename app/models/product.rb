class Product < ApplicationRecord
  belongs_to :category
  belongs_to :subcategory
  before_save :add_url_name

  # paginates_per 28

  def self.search(pattern)
    if pattern.blank?
      all
    else
      where('name ILIKE ?', "%#{pattern}%")
    end
  end

  private

  def add_url_name
    self.url_name = name.downcase.gsub(' ', '-')
  end
end
