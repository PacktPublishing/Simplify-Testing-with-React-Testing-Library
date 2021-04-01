import React from 'react';
import ReactDOM from 'react-dom';
import SetIncome from './SetIncome';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SetIncome />, div);
  ReactDOM.unmountComponentAtNode(div);
});
