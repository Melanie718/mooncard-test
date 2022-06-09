# Mooncard front-end test

## Getting started

### Back-end

```sh
# Clone the repo
$ git clone

# Navigate to directory
$ cd mooncard-test

# Install dependencies
$ bundle install

# Setup database
$ rails db:setup

# Start the server
$ rails s
```

### Front-end

```sh
# Navigate to the folder
$ cd frontend

# Install dependencies
$ yarn

# Start the server
$ yarn start
```

## API Routes

### Employees

#### `GET /employees.json`

This route allows you to list the employees.

## Assignment

The project is a Ruby on Rails app, in which we added a standalone [`frontend`](frontend) folder that contains the front-end code.
We ask you to do one commit per section that you will find below.
None of those sections should be blocking you, so if you can't achieve one of those, just skip to the next one and keep us informed :)

- [ ] Get started with the project

### Styled Components

- [ ] Install [Styled Components](https://styled-components.com/)
- [ ] Configure Styled Components and create 2 themes with different colors
- [ ] Add some styles to the table (we will not judge your tastes, no worries)
- [ ] Add a button that switches themes

### React Query

- [ ] Install [React Query](https://react-query.tanstack.com/)
- [ ] Configure React Query
- [ ] Update the [`useExpenses`](frontend/src/hooks/useExpenses.ts) hook to use React Query

### Pagination

- [ ] Setup the pagination on the [`ExpensesController#index`](app/controllers/expenses_controller.rb)
  - You can use whatever gem you prefer. At Mooncard, we use Kaminari
- [ ] Handle the pagination on the front-end. We want to have (in this order):
  - A "previous" button
  - A "Page 1" button with the first page number
  - A "Page x" button with the current page number
  - A "Page n" button with the last page number
  - A "next" button

### Filtering

- [ ] Install [Ransack](https://github.com/activerecord-hackery/ransack)
- [ ] Configure it
- [ ] Add it on the [`ExpensesController#index`](app/controllers/expenses_controller.rb)
- [ ] On the front-end, create an input that filters on the expense user's email that filters as we type

### Associations

- [ ] On the front-end app, in the column "User", replace the ID with the user's email. You can do whatever changes are needed on the back-end
