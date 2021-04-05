import React from 'react';
import { render } from 'react-dom';
import Profile from './Profile';
import { act } from 'react-dom/test-utils';

it('hides details when button clicked', () => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  act(() => {
    render(
      <Profile
        name="John Doe"
        title="Team Lead"
        details="This is my 5th year and I love helping others"
      />,
      div
    );
  });

  expect(div.querySelector('.card-text.details')).toHaveTextContent(
    'This is my 5th year and I love helping others'
  );

  const showDetailsBtn = div.querySelector('.btn.btn-primary');
  showDetailsBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));

  expect(div.querySelector('.card-text.details')).not.toBeInTheDocument();
});
