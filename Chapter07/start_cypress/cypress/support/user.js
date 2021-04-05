import faker from 'faker'

const user = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  address1: faker.address.streetAddress(),
  address2: faker.address.secondaryAddress(),
  city: faker.address.city(),
  state: faker.address.state(),
  zipCode: faker.address.zipCode('#####'),
  country: faker.address.country(),
  cardType: 'Visa',
  cardHolder: faker.name.findName(),
  cardNumber: faker.finance.creditCardNumber(),
  expiryDate: '0522',
  cardCvv: faker.finance.creditCardCVV()
}

export default user
