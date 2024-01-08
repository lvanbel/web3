import React, { useEffect, useState } from "react";
import jokeService from '../services/jokes'
import scoreService from '../services/scores'

const Context = React.createContext(null)

const ProviderWrapper = (props) => {

    const [jokes, setJokes] = useState([]);
    const [scores, setScores] = useState([]);

    useEffect(
        () => {
            jokeService
            .getAll()
            .then(initialJokes => {
                setJokes((addScoreCountAndAverageScore(initialJokes, scores)))
            })
        }, [scores]
    )

    useEffect(
        () => {
            scoreService
            .getAll()
            .then(initialScores => {
                setScores(initialScores)
            })
        }, []
    )

    console.log("context jokes : ", jokes);
    console.log("context scores : ", scores);

    const addScoreCountAndAverageScore = (jokes, scores) => {
        const jokesWithScoreCountAndAverageScore = [...jokes].map(joke => {
            const scoresForJoke = [...scores].filter(score => score.joke === joke.id)
            const scoreCount = scoresForJoke.length
            const averageScore = scoreCount > 0 ? scoresForJoke.reduce((accumulator, score) => accumulator + score.score, 0) / scoreCount : 0
            return {
                ...joke,
                scoreCount,
                averageScore,
            }
        })
        return jokesWithScoreCountAndAverageScore
    }

    const getJokeWithScores = (id) => {
        const joke = jokes.find(joke => joke.id === id)
        const scoresForJoke = scores.filter(score => score.joke === joke.id)
        return {
            question: joke.question,
            answer: joke.answer,
            category: joke.category,
            id: joke.id,
            scoreCount: joke.scoreCount,
            averageScore: joke.averageScore,
            scores: scoresForJoke
        }
    }

    const createScore = (score) => {
        return scoreService
        .create(score)
        .then(returnedScore => {
            setScores(scores.concat(returnedScore))
            return returnedScore
        })
    }
    
    const exposedValue = {
        jokes,
        scores,
        createScore,
        getJokeWithScores,
    }
    
    return (
        <Context.Provider value={exposedValue}>
            { props.children }
        </Context.Provider>
    )    
}
    
export {    
    Context,
    ProviderWrapper,    
}    
