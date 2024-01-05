import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Context = React.createContext(null)

    
const ProviderWrapper = (props) => {

    const [sortedOpinions, setSortedOpinions] = useState([])

    const createOpinion = (opinion) => {
        const newSortedOpinions = sortedOpinions.concat({
          id: uuidv4(),
          text: opinion,
          score: 1,
        });
    
        newSortedOpinions.sort((a, b) => b.score - a.score);
        setSortedOpinions(newSortedOpinions);
      };
    

    const increaseOpinionScore = (opinionId) => {
        const newSortedOpinions = [...sortedOpinions];
        const opinionToUpdate = newSortedOpinions.find(
          (opinion) => opinion.id === opinionId
        );
        if (!opinionToUpdate) return undefined;
    
        opinionToUpdate.score += 1;
        newSortedOpinions.sort((a, b) => b.score - a.score);
        setSortedOpinions(newSortedOpinions);
      };
    
    
    const exposedValue = {
        sortedOpinions,
        createOpinion,
        increaseOpinionScore,
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
