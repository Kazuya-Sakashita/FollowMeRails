# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
# db/seeds.rb
10.times do
  User.create!(
    email: Faker::Internet.email,
    password: 'password',
    password_confirmation: 'password',
    full_name: Faker::Name.name,
    username: Faker::Internet.username,
    phone_number: Faker::PhoneNumber.cell_phone_in_e164,
    created_at: Faker::Date.between(from: 2.years.ago, to: Date.today),
    updated_at: Faker::Date.between(from: 1.year.ago, to: Date.today)
  )
end
