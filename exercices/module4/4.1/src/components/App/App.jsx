import AddPerson from 'components/AddPerson/AddPerson'
import FilterPersons from 'components/FilterPersons/FilterPersons'
import Numbers from 'components/Numbers/Numbers'
import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])

    const [filter, setFilter] = useState('')

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