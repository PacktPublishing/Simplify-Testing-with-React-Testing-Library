import { render, screen } from '@testing-library/react'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import App from './App'

test('App, given no Redux Store, throws error', () => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
  const ErrorFallback = ({ error }) => error.message

  render(
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <App />
    </ErrorBoundary>
  )

  const errorMessage = screen.getByText(
    /could not find react-redux context value/i
  )

  expect(errorMessage).toBeInTheDocument()
  expect(console.error).toHaveBeenCalled()
  console.error.mockRestore()
})
