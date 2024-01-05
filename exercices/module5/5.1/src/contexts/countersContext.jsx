import React, { useState } from "react";

const Context = React.createContext(null)

    
const ProviderWrapper = (props) => {

    const [goodCounter, setGoodCounter] = useState(0)
    const [neutralCounter, setNeutralCounter] = useState(0)
    const [badCounter, setBadCounter] = useState(0)

    const increaseGood = () => setGoodCounter(goodCounter + 1)
    const increaseNeutral = () => setNeutralCounter(neutralCounter + 1)
    const increaseBad = () => setBadCounter(badCounter + 1)

    const resetCounters = () => {
        setGoodCounter(0)
        setNeutralCounter(0)
        setBadCounter(0)
    }
    
    const exposedValue = {
        goodCounter,
        neutralCounter,
        badCounter,
        increaseGood,
        increaseNeutral,
        increaseBad,
        resetCounters
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
