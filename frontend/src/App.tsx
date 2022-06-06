import React from 'react';
import logo from './logo.svg';
import './App.css';
import useExpenses from './hooks/useExpenses';

function App() {
  const expenses = useExpenses()

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>User</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => (
            <tr key={expense.id}>
              <td>{expense.id}</td>
              <td>{expense.amount}</td>
              <td>{expense.user_id}</td>
              <td>{expense.created_at}</td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
