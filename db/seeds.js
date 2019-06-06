const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Clue = require('../models/clue')
const User = require('../models/user')

const userIds = [
  '5be9860fcb16d525543ceda1',
  '5be9860fcb16d525543ceda2'
]
const userData = [{
  _id: userIds[0],
  username: 'Grant',
  email: 'g@g',
  password: 'pass'
}, {
  _id: userIds[1],
  username: 'Bob',
  email: 'b@b',
  password: 'pass'
}]

const clueIds = [
  '5be9860fcb16d525543beda1',
  '5be9860fcb16d525543beda2',
  '5be9860fcb16d525543beda3',
  '5be9860fcb16d525543beda4'
]

const clueData = [{
  _id: clueIds[0],
  question: 'Where does rice come from? ',
  answer: 'Rice paddies'
}, {
  _id: clueIds[1],
  question: 'What is the first word in the dictionary? ',
  answer: 'Aardvark'
}]


mongoose.connect(dbURI)
Clue.collection.drop()
User.collection.drop()

Clue.create(clueData)
  .then(clues => {
    console.log(`${clues.length} clues created`)
    return User.create(userData)
  })
  .then(users => {
    console.log(`${users.length} users created`)
    mongoose.connection.close()
  })
  .catch(err => console.log(err))
