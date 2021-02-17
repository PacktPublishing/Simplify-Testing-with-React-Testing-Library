import faker from 'faker'

const employees = []

for (let index = 0; index <= 5; index++) {
  employees.push({
    id: faker.random.uuid(),
    name: faker.fake('{{name.firstName}} {{name.lastName}}'),
    department: faker.commerce.department(),
    title: faker.name.jobTitle()
  })
}

export default employees
