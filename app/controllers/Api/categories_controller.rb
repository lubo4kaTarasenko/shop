class Api::CategoriesController < ActionController::API
  def index
    categories = Category.all.map do |c|
      c.attributes.merge(
        name: c.name,
        id: c.id
      )
    end
    render json: { categories: categories }
  end
end
