import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { rest } from 'msw'
import DrinkSearch from './DrinkSearch'
import { mockServer } from './mocks/server.js'

beforeAll(() => mockServer.listen())
afterEach(() => mockServer.resetHandlers())
afterAll(() => mockServer.close())

describe('Integration: DrinkSearch', () => {
  test('given drinks data, renders output to screen', async () => {
    render(<DrinkSearch />)
    const searchInput = screen.getByRole('searchbox')

    user.type(searchInput, 'vodka, {enter}')

    expect(
      await screen.findByRole('img', { name: /test drink/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /test drink/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/test ingredient/i)).toBeInTheDocument()
    expect(screen.getByText(/test instructions/i)).toBeInTheDocument()
  })

  test('given "null" drink results, renders "no drinks" heading', async () => {
    mockServer.use(
      rest.get(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php',
        (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              drinks: null
            })
          )
        }
      )
    )
    render(<DrinkSearch />)
    const searchInput = screen.getByRole('searchbox')

    user.type(searchInput, 'vodka, {enter}')

    expect(
      await screen.findByRole('heading', { name: /no drinks found/i })
    ).toBeInTheDocument()
  })

  test('given inaccessible API, renders "service unavailable" heading', async () => {
    mockServer.use(
      rest.get(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php',
        (req, res, ctx) => {
          return res(ctx.status(503))
        }
      )
    )
    render(<DrinkSearch />)
    const searchInput = screen.getByRole('searchbox')

    user.type(searchInput, 'vodka, {enter}')

    expect(
      await screen.findByRole('heading', { name: /Service unavailable/i })
    ).toBeInTheDocument()
  })

  test('given empty search request, request not initiated', async () => {
    render(<DrinkSearch />)
    const searchInput = screen.getByRole('searchbox')

    user.type(searchInput, '{enter}')

    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })
})
