const router = require('express').Router()
const Score = require('../models/score')
const Joke = require('../models/joke')

router.get('/', (req, res, next) => {
    Score.find({})
        .then(scores => res.json(scores))
        .catch(err => next(err))
});

router.post("/", (req, res, next) => {
    const body = req.body;

    const errorMessages = [];
    if (!body.username || body.username.length < 3) errorMessages.push("username must be present and at least 3 characters")
    if (!body.date) errorMessages.push("date must be present");
    if (!body.score) errorMessages.push("score must be present");
    if (!body.joke) errorMessages.push("joke must be present");
    if (errorMessages.length > 0) {
        res.status(422).json({ errorMessages });
        return;
    }
    // check que joke existe
    Joke.findById(body.joke).then(joke => {
        if (!joke) {
            errorMessages.push("joke must exist");
            res.status(422).json({ errorMessages });
        }
    }).catch(err => next(err));

    // check que (joke, username) n'existe pas déjà
    Score.find({ joke: body.joke, username: body.username }).then(score => {
        if (score.length > 0) {
            errorMessages.push("joke and username must be unique");
            res.status(422).json({ errorMessages });
        } else {
            // Insert
            const score = new Score(body);
            score.save().then(result => {
                res.json(result);
            }).catch(err => next(err));
        }
    }).catch(err => next(err));
});

module.exports = router