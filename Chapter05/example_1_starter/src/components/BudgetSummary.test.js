import React from 'react';
import ReactDOM from 'react-dom';
import BudgetSummary from './BudgetSummary';

it('renders without crashing', () => {
  const mock = {
    income: 1000,
    spending: 100,
  };
  const { income, spending } = mock;
  const div = document.createElement('div');
  ReactDOM.render(
    <BudgetSummary
      income={income}
      spending={spending}
      leftover={income - spending}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
