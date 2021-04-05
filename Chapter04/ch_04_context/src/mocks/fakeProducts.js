import faker from 'faker'

const fakeProducts = [
  {
    id: faker.random.uuid(),
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    category: faker.commerce.department(),
    image: faker.image.fashion()
  },
  {
    id: faker.random.uuid(),
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    category: faker.commerce.department(),
    image: faker.image.fashion()
  }
]

export default fakeProducts
