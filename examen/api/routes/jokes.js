const router = require('express').Router()
const Joke = require('../models/joke')

router.get('/', (req, res, next) => {
    Joke.find({})
        .then(jokes => res.json(jokes))
        .catch(err => next(err))
});

router.post("/", (req, res, next) => {
    const body = req.body
    // Check body fields, check also that the fields contain at least 3 characters
    const errorMessages = []
    if (!body.question || body.question.length < 3) errorMessages.push("question must be present and at least 3 characters")
    if (!body.answer || body.answer.length < 3) errorMessages.push("answer must be present and at least 3 characters")
    if (!body.category || body.category.length < 3) errorMessages.push("category must be present and at least 3 characters")
    if (errorMessages.length > 0) {
      res.status(422).json({ errorMessages })
      return
    }
    const joke = new Joke(body)
    joke.save().then(result => {
        res.json(result)
    }).catch(err => next(err))
});

router.get('/:id', (req, res, next) => {
    Joke.findById(req.params.id).then(joke => {
        if (joke) {
            res.json(joke)
        } else {
            res.status(404).end()
        }
    }).catch(err => next(err));
});

router.delete('/:id', (req, res, next) => {
    Joke.findByIdAndRemove(req.params.id).then(result => {
        if (result) {
            res.json(result)
        } else {
            throw new NotFoundError()
        }
    }).catch(err => next(err));
    
});

module.exports = router