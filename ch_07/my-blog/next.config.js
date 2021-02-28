require('dotenv').config()

module.exports = {
  env: { mongodb: process.env.MONGODB_URI }
}
