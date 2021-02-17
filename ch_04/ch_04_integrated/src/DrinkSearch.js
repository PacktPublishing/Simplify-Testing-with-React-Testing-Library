import * as React from 'react'
import fetchDrinks from './api/fetchDrinks'
import DrinkForm from './DrinkForm'
import DrinkResults from './DrinkResults'

const DrinkSearch = () => {
  const [drinks, setDrinks] = React.useState([])
  const [drinkQuery, setDrinkQuery] = React.useState('')
  const [error, setError] = React.useState(false)

  const handleDrinkQuery = e => {
    e.preventDefault()
    if (drinkQuery) {
      fetchDrinks(drinkQuery, setDrinks, setError)
    }

    setDrinkQuery('')
  }

  return (
    <div className="container">
      <DrinkForm
        searchVal={drinkQuery}
        setSearchVal={setDrinkQuery}
        handleSubmit={handleDrinkQuery}
      />
      {drinks && (
        <div className="d-flex flex-wrap">
          {<DrinkResults drinks={drinks} />}
        </div>
      )}
      {!drinks && <h5 className="text-center mt-5">🍹 No drinks found 🍹</h5>}
      {error && <h5 className="text-center mt-5">🛑 Service unavailable 🛑</h5>}
    </div>
  )
}

export default DrinkSearch
