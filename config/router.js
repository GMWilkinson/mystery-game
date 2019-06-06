const router = require('express').Router()
const clues = require('../controllers/clues')
const users = require('../controllers/users')
const auth = require('../controllers/auth')

router.route('/clues')
  .get(clues.index)
  .post(clues.create)

router.route('/clues/:clueId')
  .get(clues.show)
  .put(clues.update)
  .delete(clues.delete)

router.route('/users')
  .get(users.index)

router.post('/register', auth.register)
router.post('/login', auth.login)


module.exports = router
