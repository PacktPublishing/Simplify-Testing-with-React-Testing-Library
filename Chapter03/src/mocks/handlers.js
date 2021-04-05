import { rest } from 'msw'

export const handlers = [
  rest.get(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          drinks: [
            {
              idDrink: 1,
              strDrinkThumb: './images/thumbs-down.svg',
              strDrink: 'test drink',
              strInstructions: 'test instructions',
              strIngredient1: 'test ingredient'
            }
          ]
        })
      )
    }
  )
]
