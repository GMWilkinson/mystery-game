const Clue = require('../models/clue')

function indexRoute(req, res, next) {
  Clue.find({ clue: req.params.clueId})
    .then(clues => res.json(clues))
    .catch(next)
}
function showRoute(req, res, next) {
  Clue.findById(req.params.clueId)
    .then(clue => res.json(clue))
    .catch(next)
}

function deleteRoute(req, res, next) {
  Clue.findByIdAndDelete(req.params.clueId)
    .then(() => res.sendStatus(204))
    .catch(next)
}

function createRoute(req, res, next) {
  Clue.create(req.body)
    .then(clue => res.status(201).json(clue))
    .catch(next)
}

function updateRoute(req, res, next) {
  Clue.findById(req.params.clueId)
    .then(page => page.set(req.body))
    .then(page => page.save())
    .then(clue => res.json(clue))
    .catch(next)
}

module.exports ={
  index: indexRoute,
  delete: deleteRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute
}
