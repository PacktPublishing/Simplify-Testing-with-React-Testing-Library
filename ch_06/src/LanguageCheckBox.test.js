import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { axe } from 'jest-axe'
import LanguageCheckBox from './LanguageCheckBox'

test('LanguageCheckbox, given selected item, item is checked', () => {
  render(<LanguageCheckBox />)
  const jsCheckbox = screen.getByRole('checkbox', { name: /javascript/i })

  user.click(jsCheckbox)

  expect(jsCheckbox).toBeChecked()
  expect(screen.getByText(/javascript/i)).toHaveClass(
    'text-success font-weight-bold'
  )
})

test('LanguageCheckbox, given accessibility audit, returns no violations', async () => {
  const { container } = render(<LanguageCheckBox />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
