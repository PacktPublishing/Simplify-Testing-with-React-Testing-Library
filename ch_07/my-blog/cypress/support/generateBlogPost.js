import faker from 'faker'

const post = {
  title: faker.lorem.sentence(),
  category: faker.lorem.word(),
  content: faker.lorem.paragraphs(2),
  image_url: faker.image.image()
}

export default post
