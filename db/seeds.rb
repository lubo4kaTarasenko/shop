require 'faker'
categories_names = %w[computers electronics books sport home]
subcategories_c = %w[monitors accessories networking drives software]
subcategories_e = %w[games car tv camera]
subcategories_b = %w[audiobooks textbooks magazines]
subcategories_s = %w[fitness golf clothing]
subcategories_h = %w[furniture kitchen bed garden bath]

categories = categories_names.map do |c|
  Category.create(
    {
      name: c
    }
  )
end
subcategories_c.map do |sc|
  Subcategory.create(
    {
      name: sc,
      category: categories[0]
    }
  )
end
subcategories_e.map do |sc|
  Subcategory.create(
    {
      name: sc,
      category: categories[1]
    }
  )
end
subcategories_b.map do |sc|
  Subcategory.create(
    {
      name: sc,
      category: categories[2]
    }
  )
end
subcategories_s.map do |sc|
  Subcategory.create(
    {
      name: sc,
      category: categories[3]
    }
  )
end
subcategories_h.map do |sc|
  Subcategory.create(
    {
      name: sc,
      category: categories[4]
    }
  )
end


products = 1000.times.map do
  category = categories.sample
  Product.create(
    {
      name: Faker::Commerce.product_name,
      price: Faker::Commerce.price(range: 1..999.0),
      category: category,
      subcategory: category.subcategories.to_a.sample,
      country: Faker::Address.country,
      description: Faker::Markdown.emphasis
    }
  )
end
