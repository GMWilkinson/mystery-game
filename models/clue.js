const mongoose = require('mongoose')

const clueSchema = new mongoose.Schema({
  isCompleted: { type: Boolean, default: false },
  question: {type: String, required: false},
  answer: {type: String, required: false},
  image: {type: String, required: false}
})

module.exports = mongoose.model('Clue', clueSchema)
