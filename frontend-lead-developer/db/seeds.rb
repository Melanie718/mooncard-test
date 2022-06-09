admin = User.create!(email: 'admin@mooncard.co')
user = User.create!(email: 'user@mooncard.co')

10.times do
  Expense.create!(user: admin, amount: rand(100))
  Expense.create!(user: user, amount: rand(100))
end
