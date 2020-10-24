import { render } from '@testing-library/react'
import Travel from './Travel'

it('displays the header and paragraph text', () => {
  expect(render(<Travel />)).toMatchInlineSnapshot(`
    Object {
      "asFragment": [Function],
      "baseElement": <body>
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
      </body>,
      "container": <div>
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
      </div>,
      "debug": [Function],
      "findAllByAltText": [Function],
      "findAllByDisplayValue": [Function],
      "findAllByLabelText": [Function],
      "findAllByPlaceholderText": [Function],
      "findAllByRole": [Function],
      "findAllByTestId": [Function],
      "findAllByText": [Function],
      "findAllByTitle": [Function],
      "findByAltText": [Function],
      "findByDisplayValue": [Function],
      "findByLabelText": [Function],
      "findByPlaceholderText": [Function],
      "findByRole": [Function],
      "findByTestId": [Function],
      "findByText": [Function],
      "findByTitle": [Function],
      "getAllByAltText": [Function],
      "getAllByDisplayValue": [Function],
      "getAllByLabelText": [Function],
      "getAllByPlaceholderText": [Function],
      "getAllByRole": [Function],
      "getAllByTestId": [Function],
      "getAllByText": [Function],
      "getAllByTitle": [Function],
      "getByAltText": [Function],
      "getByDisplayValue": [Function],
      "getByLabelText": [Function],
      "getByPlaceholderText": [Function],
      "getByRole": [Function],
      "getByTestId": [Function],
      "getByText": [Function],
      "getByTitle": [Function],
      "queryAllByAltText": [Function],
      "queryAllByDisplayValue": [Function],
      "queryAllByLabelText": [Function],
      "queryAllByPlaceholderText": [Function],
      "queryAllByRole": [Function],
      "queryAllByTestId": [Function],
      "queryAllByText": [Function],
      "queryAllByTitle": [Function],
      "queryByAltText": [Function],
      "queryByDisplayValue": [Function],
      "queryByLabelText": [Function],
      "queryByPlaceholderText": [Function],
      "queryByRole": [Function],
      "queryByTestId": [Function],
      "queryByText": [Function],
      "queryByTitle": [Function],
      "rerender": [Function],
      "unmount": [Function],
    }
  `)
})
