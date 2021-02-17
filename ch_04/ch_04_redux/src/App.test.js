import { render } from '@testing-library/react'
import React from 'react'
import App from './App'

test('App, given no Redux Store, throws error', () => {
  jest.spyOn(console, 'error').mockImplementation(() => {})

  expect(() => render(<App />)).toThrow()
  expect(console.error).toHaveBeenCalled()
  console.error.mockRestore()
})
