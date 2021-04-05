import { rest, setupWorker } from 'msw'

const drinks = [
  {
    idDrink: '11457',
    strDrink: 'Gin Fizz',
    strInstructions:
      'Shake all ingredients with ice cubes, except soda water. Pour into glass. Top with soda water.',
    strDrinkThumb:
      'https://www.thecocktaildb.com/images/media/drink/drtihp1606768397.jpg',
    strIngredient1: 'Gin',
    strIngredient2: 'Lemon',
    strIngredient3: 'Powdered sugar',
    strIngredient4: 'Carbonated water'
  },
  {
    idDrink: '11417',
    strDrink: 'Gin Sour',
    strInstructions:
      'In a shaker half-filled with ice cubes, combine the gin, lemon juice, and sugar. Shake well. Strain into a sour glass and garnish with the orange slice and the cherry.',
    strDrinkThumb:
      'https://www.thecocktaildb.com/images/media/drink/noxp7e1606769224.jpg',
    strIngredient1: 'Gin',
    strIngredient2: 'Lemon juice',
    strIngredient3: 'Sugar',
    strIngredient4: 'Orange',
    strIngredient5: 'Maraschino cherry'
  },
  {
    idDrink: '11936',
    strDrink: 'Pink Gin',
    strInstructions:
      'Pour the bitters into a wine glass. Swirl the glass to coat the inside with the bitters, shake out the excess. Pour the gin into the glass. Do not add ice.',
    strDrinkThumb:
      'https://www.thecocktaildb.com/images/media/drink/qyr51e1504888618.jpg',
    strIngredient1: 'Bitters',
    strIngredient2: 'Gin'
  },
  {
    idDrink: '11408',
    strDrink: 'Gin Daisy',
    strInstructions:
      'In a shaker half-filled with ice cubes, combine the gin, lemon juice, sugar, and grenadine. Shake well. Pour into an old-fashioned glass and garnish with the cherry and the orange slice.',
    strDrinkThumb:
      'https://www.thecocktaildb.com/images/media/drink/z6e22f1582581155.jpg',
    strIngredient1: 'Gin',
    strIngredient2: 'Lemon juice',
    strIngredient3: 'Sugar',
    strIngredient4: 'Grenadine',
    strIngredient5: 'Maraschino cherry',
    strIngredient6: 'Orange'
  }
]

export const worker = setupWorker(
  rest.get(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          drinks
        })
      )
    }
  )
)
