import AddPerson from 'components/AddPerson/AddPerson'
import FilterPersons from 'components/FilterPersons/FilterPersons'
import Numbers from 'components/Numbers/Numbers'
import { useEffect, useState } from 'react'
import personService from '../../services/persons'

const App = () => {
    const [persons, setPersons] = useState([])

    const [filter, setFilter] = useState('')

    useEffect(
        () => {
            personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
        }, []
    )

    const createPerson = (person) => {
        const newPerson = {
            name: person.name,
            number: person.number,
            id : persons.length + 1
        }

        personService
            .create(newPerson)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
            })
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