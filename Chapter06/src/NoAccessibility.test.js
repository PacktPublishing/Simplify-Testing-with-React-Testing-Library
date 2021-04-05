import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
// Note: the next line of code is globally included for all tests via setupTests.js
//import 'jest-axe/extend-expect'
import NoAccessibility from './NoAccessibility'

test('NoAccessibility, given accessibility audit, returns no violations', async () => {
  const { container } = render(<NoAccessibility />)

  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
