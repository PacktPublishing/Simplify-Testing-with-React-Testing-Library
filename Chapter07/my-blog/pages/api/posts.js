import db from '../../db/mongoose'

export default async (req, res) => {
  if (req.method === 'GET') {
    let posts
    try {
      posts = await (await db()).models.Post.find({})
      res
        .status(200)
        .json({ posts: posts.map(post => post.toObject({ getters: true })) })
    } catch (error) {
      res.status(500).send('error retrieving blog posts')
    }
  }
}
