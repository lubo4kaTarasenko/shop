require 'faker'

categories = 10.times.map do
  Category.create(
    {
      name: Faker::Commerce.unique.material
    }
  )
end

products = 1000.times.map do
  Product.create(
    {
      name: Faker::Commerce.product_name,
      price: Faker::Commerce.price(range: 1..999.0),
      category: categories.sample,
      country: Faker::Address.country,
      description: Faker::Markdown.emphasis
    }
  )
end
