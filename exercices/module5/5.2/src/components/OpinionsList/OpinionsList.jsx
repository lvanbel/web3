import { useContext } from "react"
import { Context as OpinionContext } from "../../contexts/opinionsContext";

function OpinionsList() {

    const { sortedOpinions, increaseOpinionScore } = useContext(OpinionContext)

    return(
        <ul>
            {sortedOpinions.map(opinion => (
                <li key={opinion.id}>
                    <p>{opinion.text}</p>
                    <p>{opinion.score}</p>
                    <button onClick={() => increaseOpinionScore(opinion.id)}>Vote</button>
                </li>
            ))}
        </ul>
    )
}

export default OpinionsList
