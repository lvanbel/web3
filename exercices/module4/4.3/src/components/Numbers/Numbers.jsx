const Numbers = (
    { persons }
) => {

    return (
        <div>      
            <h1>Numbers</h1>
            
            {persons.map(person => 
                <p key={person.id}>{person.name} {person.number}</p>
            )}
        </div>
    )
}

export default Numbers