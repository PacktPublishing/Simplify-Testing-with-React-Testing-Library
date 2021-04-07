import PropTypes, { arrayOf } from 'prop-types'

const DrinkResults = ({ drinks }) => {
  const ingredientList = drink => {
    const ingredients = []
    const maxIngredients = 15
    for (let i = 1; i <= maxIngredients; i++) {
      const ingredient = drink['strIngredient' + i]
      if (ingredient) {
        ingredients.push(ingredient)
      }
    }
    return ingredients
  }

  return drinks.map(drink => {
    return (
      <div key={drink.idDrink} className="card m-2" style={{ width: '20rem' }}>
        <img
          src={drink.strDrinkThumb}
          className="card-img-top"
          alt={drink.strDrink}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{drink.strDrink}</h5>
          <h6 className="text-center font-weight-bold">Ingredients</h6>
          <div className="d-flex flex-wrap justify-content-center border-top">
            {ingredientList(drink).map((ingredient, index) => (
              <div className="p-1" key={ingredient + index}>
                {ingredient}
              </div>
            ))}
          </div>
          <h6 className="text-center font-weight-bold">Instructions</h6>
          <p className="card-text border-top">{drink.strInstructions}</p>
        </div>
      </div>
    )
  })
}

DrinkResults.propTypes = {
  drinks: PropTypes.arrayOf(
    PropTypes.shape({
      idDrink: PropTypes.string.isRequired,
      strDrinkThumb: PropTypes.string.isRequired,
      strDrink: PropTypes.string.isRequired,
      strInstructions: PropTypes.string.isRequired
    })
  ).isRequired
}

export default DrinkResults
