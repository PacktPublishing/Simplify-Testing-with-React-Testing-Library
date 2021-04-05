import { render } from '@testing-library/react'
import Travel from './Travel'

it('displays the header and paragraph text', () => {
  const { container } = render(<Travel />)

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="card text-center m-1"
        style="width: 18rem;"
      >
        <i
          class="material-icons"
          style="font-size: 4rem;"
        >
          airplanemode_active
        </i>
        <h4>
          Travel Anywhere
        </h4>
        <p
          class="p-1"
        >
          Our premium package allows you to take exotic trips anywhere at the cheapest prices!
        </p>
      </div>
    </div>
  `)
})
