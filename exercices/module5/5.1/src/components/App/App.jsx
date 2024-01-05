import { useContext } from "react"
import { Context as CounterContext } from "../../contexts/countersContext";

function App() {

    const { 
      goodCounter, 
      neutralCounter, 
      badCounter, 
      increaseGood,
      increaseNeutral,
      increaseBad, 
      resetCounters 
    } = useContext(CounterContext)

    return (
        <>
            <div>
                <p>Good : {goodCounter}</p>
                <button onClick={increaseGood}>Increase good</button>
            </div>
            <div>
                <p>Neutral : {neutralCounter}</p>
                <button onClick={increaseNeutral}>Increase neutral</button>
            </div>
            <div>
                <p>Bad : {badCounter}</p>
                <button onClick={increaseBad}>Increase bad</button>
            </div>
            <button onClick={resetCounters}>Reset</button>
        </>
    )
}

export default App
