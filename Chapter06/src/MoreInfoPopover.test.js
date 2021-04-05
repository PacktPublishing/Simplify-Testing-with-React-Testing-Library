import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import MoreInfoPopover from './MoreInfoPopover'

// example using logTestingPlaygroundURL while writing a test
it('logs output to Testing Playground', () => {
  render(<MoreInfoPopover />)
  screen.logTestingPlaygroundURL()
})

test('MoreInfoPopover, given clicked button, displays popover', async () => {
  render(<MoreInfoPopover />)
  user.click(screen.getByRole('button', { name: /more info/i }))
  const popover = await screen.findByRole('heading', { name: /lorem ipsum/i })

  expect(popover).toBeInTheDocument()
})
