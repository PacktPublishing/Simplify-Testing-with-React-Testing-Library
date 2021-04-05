import db from '../../../db/mongoose'

export default async (req, res) => {
  if (req.method === 'DELETE') {
    const { id, title } = req.body

    try {
      const post = await (await db()).models.Post.findOneAndRemove({
        _id: id
      })

      // Check if ID exists in collection
      if (!post) res.status(404).send('blog post does not exist')
    } catch (error) {
      res.status(400).send()
    }
    res.status(200).json({ message: `post "${title}" successfully deleted` })
  }
}
