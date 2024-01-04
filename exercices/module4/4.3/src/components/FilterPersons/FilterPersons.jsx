const FilterPersons = (
    { 
        filterValue, 
        changeFilter 
    }
) => {
    const handleFilterChange = (event) => {
        changeFilter(event.target.value)
    }

    return (
        <div>
            <input
                value={filterValue}
                onChange={handleFilterChange}
            />
        </div>
    );
};

export default FilterPersons;