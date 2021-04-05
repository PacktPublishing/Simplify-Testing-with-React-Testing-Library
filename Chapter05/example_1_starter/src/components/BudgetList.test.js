import React from 'react';
import ReactDOM from 'react-dom';
import BudgetList from './BudgetList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BudgetList budgets={[{category: 'weekend', amount: 300}]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
