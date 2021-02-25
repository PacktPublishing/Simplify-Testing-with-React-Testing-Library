require('dotenv').config()

module.exports = {
  env: { baseURL: process.env.BASE_URL, mongodb: process.env.MONGODB_URI }
}
