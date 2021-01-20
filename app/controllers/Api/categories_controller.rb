class Api::CategoriesController < ActionController::API
  def index
    categories = Category.all.includes(:subcategories).map do |c|
      c.attributes.merge(
        subcategories: c.subcategories.map(&:name)
      )
    end
    render json: { categories: categories }
  end
end
