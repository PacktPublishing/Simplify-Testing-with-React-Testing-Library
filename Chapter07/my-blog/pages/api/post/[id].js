import db from '../../../db/mongoose'

export default async (req, res) => {
  if (req.method === 'GET') {
    const postId = req.query.id
    let postData
    try {
      postData = await (await db()).models.Post.findById(postId)
    } catch (error) {
      res.status(404).send('post not found')
    }

    res.json({ post: postData.toObject({ getters: true }) })
  }
}
