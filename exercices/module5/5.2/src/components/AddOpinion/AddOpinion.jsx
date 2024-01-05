import { useContext, useState } from "react";
import { Context as OpinionContext } from "../../contexts/opinionsContext";

function AddOpinion() {

    const { createOpinion } = useContext(OpinionContext)

    const [newOpinion, setNewOpinion] = useState("")

    const handleOnChange = (event) => {
        setNewOpinion(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        createOpinion(newOpinion)
        setNewOpinion("")
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input
                placeholder="enter your opinion here please ; )"
                value={newOpinion}
                onChange={handleOnChange}
                required
            />
            <input type="submit" value="Add Opinion" />
        </form>

    )
}

export default AddOpinion
