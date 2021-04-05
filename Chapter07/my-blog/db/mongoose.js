import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const postSchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  content: { type: String, required: true },
  image_url: { type: String, required: true },
  created: { type: String, required: true }
})

// Ensures new entries are unique
postSchema.plugin(uniqueValidator, { message: '{PATH} is already in use' })

const dbConnect = async () => {
  const connection = await mongoose.createConnection(process.env.mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })

  const Post = connection.model('Post', postSchema)

  return {
    models: { Post }
  }
}

export default dbConnect
