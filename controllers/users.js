const User = require('../models/user')

function indexRoute(req, res) {
  User.find()
    .then(users => res.json(users))
}
module.exports = {
  index: indexRoute
}
