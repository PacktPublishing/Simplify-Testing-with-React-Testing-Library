import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const postSchema = new Schema({
  title: { type: String, required: false }
})

// Ensures names are unique
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
