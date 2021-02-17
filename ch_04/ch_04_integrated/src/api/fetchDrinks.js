const fetchDrinks = async (drinkQuery, setState, setError) => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkQuery}`
    )
    if (response.status === 503) {
      return setError(true)
    }
    const data = await response.json()
    const { drinks } = data
    if (drinks) {
      setState(drinks)
      setError(false)
    } else {
      setState(null)
      setError(false)
    }
  } catch (error) {
    console.error('error: ', error)
  }
}

export default fetchDrinks
