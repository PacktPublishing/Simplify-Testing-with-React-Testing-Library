import faker from 'faker'

const fakePost = () => {
  return {
    title: faker.lorem.sentence(),
    category: faker.lorem.word(),
    content: faker.lorem.paragraphs(1),
    image_url: faker.image.image()
  }
}
export default fakePost
