import db from '../../db/mongoose'

export default async (req, res) => {
  if (req.method === 'GET') {
    let posts
    try {
      posts = await (await db()).models.Post.find({})
    } catch (error) {
      res.status(500).send('error retrieving blog posts')
    }

    if (!posts.length) {
      res.status(204).send('no blog posts found')
    }

    res
      .status(200)
      .json({ posts: posts.map(post => post.toObject({ getters: true })) })
  }
}
