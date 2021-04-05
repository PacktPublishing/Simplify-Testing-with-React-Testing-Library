import React from 'react';
import ReactDOM from 'react-dom';
import CreateNewBudget from './CreateNewBudget';

const mockCallback = jest.fn();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateNewBudget addNewBudget={mockCallback} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
