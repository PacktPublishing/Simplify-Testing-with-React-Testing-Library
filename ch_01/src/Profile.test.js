import React from 'react';
import { mount } from 'enzyme';
import Profile from './Profile';

test('setDetails sets the state value', () => {
  const wrapper = mount(
    <Profile
      name="John Doe"
      title="Team Lead"
      details="This is my 5th year and I love helping others"
    />
  );

  expect(wrapper.state('showDetails')).toEqual(true);
  expect(wrapper.find('.card-text.details').props().children).toEqual(
    'This is my 5th year and I love helping others'
  );

  wrapper.instance().setDetails();

  expect(wrapper.state('showDetails')).toEqual(false);
  expect(wrapper.update().find('.card-text.details').exists()).toBeFalsy();
});
