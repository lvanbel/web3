import Button from 'components/Button/Button'
import Loading from 'components/Loading/Loading'
import Statistics from 'components/Statistics/Statistics'
import { useState } from 'react'

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 3000)

    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Give feedback</h1>
    
                <Button onClick={() => setGood(good + 1)} text="good"></Button>
                <Button onClick={() => setNeutral(neutral + 1)} text="neutral"></Button>
                <Button onClick={() => setBad(bad + 1)} text="bad"></Button>
                
                <Statistics good={good} neutral={neutral} bad={bad} />
            </div>
        )
    }
}

export default App