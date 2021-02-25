import db from '../../db/mongoose'

export default async (req, res) => {
  if (req.method === 'POST') {
    const { title, categories, content } = req.body

    // Check for duplicate blog
    const checkDuplicate = await (await db()).models.Post.findOne({
      title
    })
    if (checkDuplicate !== null) {
      res
        .status(409)
        .json({ message: `A blog with title "${title}" already exists` })
    } else {
      try {
        const newPost = await (await db()).models.Post({
          title,
          categories,
          content
        })

        await newPost.save()
        res
          .status(200)
          .json({ message: `The blog "${title}" was successfully added` })
      } catch (error) {
        res.status(400).send(error)
      }
    }
  }
}
