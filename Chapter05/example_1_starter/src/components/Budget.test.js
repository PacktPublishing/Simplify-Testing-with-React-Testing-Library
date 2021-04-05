import React from 'react';
import ReactDOM from 'react-dom';
import Budget from './Budget';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Budget />, div);
  ReactDOM.unmountComponentAtNode(div);
});
