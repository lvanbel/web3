import axios from 'axios'
import AddPerson from 'components/AddPerson/AddPerson'
import FilterPersons from 'components/FilterPersons/FilterPersons'
import Numbers from 'components/Numbers/Numbers'
import { useEffect, useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([])

    const [filter, setFilter] = useState('')

    useEffect(
        () => {
            console.log('effect')
            axios
            .get('http://localhost:3001/persons')
            .then(response => {
                console.log('promise fulfilled')
                setPersons(response.data)
            })
        }, []
    )

    const createPerson = (person) => {
        const newPerson = {
        name: person.name,
        number: person.number,
        id : persons.length + 1
        }
        setPersons(persons.concat(newPerson))
    }

    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <h1>Phonebook</h1>
            <FilterPersons filterValue={filter} changeFilter={setFilter}/>
            <AddPerson createPerson={createPerson}/>
            <Numbers persons={filteredPersons} />
        </div>
    )
}

export default App