# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


20.times do
  screamer = Faker::Name.name

  (12..20).to_a.sample.times do
    Scream.create(
      screamer: screamer,
      duration: (10..100).to_a.sample,
      title: Faker::Verb.ing_form
    )
  end
end