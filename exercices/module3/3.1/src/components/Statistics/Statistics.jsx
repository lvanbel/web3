import StatisticLine from "components/StatisticLine/StatisticLine "

const Statistics = (
    { 
        good, 
        neutral, 
        bad 
    }
) => {

    if (good + neutral + bad === 0) {
        return (
            <div>
                <h1>Statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Statistics</h1>
            <table>
                <tbody>
                    <StatisticLine text="good" value={good} />
                    <StatisticLine text="neutral" value={neutral} />
                    <StatisticLine text="bad" value={bad} />
                    <StatisticLine text="all" value={good + neutral + bad} />
                    <StatisticLine text="average" value={(good - bad) / (good + neutral + bad)} />
                    <StatisticLine text="positive" value={(good / (good + neutral + bad)) * 100 + " %"} />
                </tbody>
            </table>
        </div>
    )
    
}

export default Statistics